const {PUBLISHABLE_KEY,SECRET_KEY} = require("../utilities/config")
const Stripe = require("stripe")
const stripe = Stripe(SECRET_KEY)


const createCustomer = async (req,res)=>{
    try{

           const { email, name,phone,currency } = req.body;
           const customer = await stripe.customers.create({
            email:email,
            name:name,
            phone:phone,
            currency:currency,
           })
            console.log('Customer created:', customer)
             res.json({ customerId: customer.id }); 

    }catch(err){
    console.error('Error creating customer:', err);
    res.status(500).json({ error: err.message });
    }
}

const createProduct = async (req,res)=>{
    try{

         const { name, description } = req.body;

         const product = await stripe.products.create({
            name:name,
            description:description,
 
         })

    console.log('Product created:', product);
    res.json({ productId: product.id });
    }catch(err){
         console.error('Error creating product:', err);
    res.status(500).json({ error: err.message });
    }
}

module.exports={
    createCustomer,
    createProduct
}