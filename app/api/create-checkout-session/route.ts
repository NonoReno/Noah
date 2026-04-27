import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_placeholder") {
    return NextResponse.json(
      { error: "Stripe non configuré. Ajoutez STRIPE_SECRET_KEY dans .env.local" },
      { status: 503 }
    );
  }

  try {
    const { items, form, shippingCost, bundleDiscount } = await req.json();

    const base = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item: { name: string; image: string; price: number; quantity: number; colorName: string; size: string }) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
            description: `${item.colorName} · Taille ${item.size}`,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })
    );

    if (bundleDiscount > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: { name: `Pack Ensemble (-${bundleDiscount}€)` },
          unit_amount: -Math.round(bundleDiscount * 100),
        },
        quantity: 1,
      });
    }

    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: { name: "Livraison" },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${base}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/checkout`,
      customer_email: form.email,
      shipping_address_collection: { allowed_countries: ["FR", "BE", "CH", "LU", "ES", "IT"] },
      metadata: {
        customer_name: `${form.firstName} ${form.lastName}`,
        customer_email: form.email,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
