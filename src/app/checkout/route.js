import { getUserServer } from "@/api/getUserServer";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    
    const user = await getUserServer();
    if (!user) throw new Error("invalid user");

    const url = new URL(req.url);
    const origin = url.origin;

    const data = await req.json(); 
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(data);


    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: data.itemsInCart.map((el) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: el.name,
              images: [el.image.trim()],
            },
            unit_amount: el.price * 100, // amount in cents
          },
          quantity: el.quantity,
        };
      }),
      mode: "payment",
      success_url: `${origin}/payment?success=true&redirect=${data.currentURL}`,
      //success_url: `${req.headers.origin}/?success=true`,
      //cancel_url: `${origin}/?canceled=true`,
      automatic_tax: { enabled: true },
    });
   
    return Response.json({ sessionId: session.id });

  } catch (err) {
    console.log(err);
    return Response.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
