const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const cors = require('cors');
const auth = require('./routes/auth')
const admin = require('./routes/admin')
const home = require('./routes/home')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

connectDB();
// Middlewares
app.use(cors());
app.use(express.json({limit:"50mb"}));

// Routes
app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/home", home);


// Stripe
app.post("/api/checkout", async (req, res) => {
    console.log(req.body);

    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            shipping_options: [{shipping_rate : "shr_1NUBYoSApopPbzRopU4nOkcj"}],
            mode: "payment",
            line_items: req.body.items.map((item) => {
                return {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: item.itemName,
                            images: [item.image],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity,
                };
            }),
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
            
        });
        res.status(200).send({ id: session.id });
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            "success": false,
            "message":"Payment Failed"
        })
    }
})


app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
})