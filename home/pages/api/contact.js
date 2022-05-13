
const handler = async (req, res) => {
    if (req.query.API_ROUTE_SECRET !== process.env.API_ROUTE_SECRET){
        return res.status(401).send("You are not authorized to call this API");
    }

    res.status(200).json({ message: 'Send an email' })
};

export default handler;