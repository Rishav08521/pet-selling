// script.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would normally handle login logic (e.g., make an API call).
    alert('Login functionality to be implemented.');
});




module.exports = router;
const Razorpay = require('razorpay');

// Initialize Razorpay
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create payment route
app.post('/api/payment', async (req, res) => {
    const options = {
        amount: req.body.amount, // amount in the smallest currency unit
        currency: 'INR',
        receipt: 'receipt#1',
    };
    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});
// script.js

window.onload = async () => {
    const response = await fetch('http://localhost:5000/api/pets');
    const pets = await response.json();
    console.log(pets); // You can now display pets on the page
};
async function initiatePayment(amount) {
    const response = await fetch('http://localhost:5000/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
    });
    const order = await response.json();
    console.log(order); // You can then proceed to show payment options using Razorpay
}
