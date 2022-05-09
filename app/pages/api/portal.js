import { supabase } from "../../utils/supabase";
import cookie from "cookie";
import initStripe from "stripe";

const handler = async (req, res) => {
    console.log("api req", req);
    const { user } = await supabase.auth.api.getUserByCookie(req);
    console.log("user", user);

    if (!user){
        return res.status(401).send("Unauthorized");
    }

    const token = cookie.parse(req.headers.cookie)["sb-access-token"];
    console.log('token', token);

    supabase.auth.session = () => ({
        access_token: token,
    });

    const { data: { stripe_customer }} = await supabase
        .from('profile')
        .select('stripe_customer')
        .eq('id', user.id)
        .single();

    const stripe = initStripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.billingPortal.sessions.create({
        customer: stripe_customer,
        return_url: `${process.env.CLIENT_URL}/dashboard`
    });

    res.send({
        url: session.url,
    });    
};

export default handler;