document.addEventListener("DOMContentLoaded", function () {
    // UPI Payment Buttons
    const googlePayButton = document.getElementById('google-pay');
    const phonePeButton = document.getElementById('phonepe');
    const paytmButton = document.getElementById('paytm');

    // Credit Card Form
    const cardForm = document.getElementById('card-form');
    const cardSubmitButton = cardForm.querySelector('.pay-button');

    // More Options Buttons
    const emiButton = document.getElementById('emi');
    const netBankingButton = document.getElementById('net-banking');

    // Pay Now Button
    const payNowButton = document.getElementById('pay-now-button');

    // Handle UPI Button Clicks
    googlePayButton.addEventListener('click', function () {
        alert("Redirecting to Google Pay...");
    });

    phonePeButton.addEventListener('click', function () {
        alert("Redirecting to PhonePe...");
    });

    paytmButton.addEventListener('click', function () {
        alert("Redirecting to Paytm...");
    });

    // Handle Credit Card Form Submission
    cardForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
        const billingAddress = document.getElementById('billing-address').value;

        // Simple validation
        if (!cardNumber || !expiryDate || !cvv || !billingAddress) {
            alert('Please fill out all fields.');
            return;
        }

        alert(`Processing payment of $120.00 using Card: ${cardNumber}`);
        // In a real-world scenario, you would now send this data to your backend.
    });

    // Handle More Options Button Clicks (EMI, Net Banking)
    emiButton.addEventListener('click', function () {
        alert("EMI payment option selected.");
    });

    netBankingButton.addEventListener('click', function () {
        alert("Redirecting to Net Banking...");
    });

    // Handle Pay Now Button Click
    payNowButton.addEventListener('click', function () {
        // Logic to check if a payment method has been selected
        alert("Processing the payment of $120.00...");
        
        // In a real-world scenario, you'd gather the selected payment method details here and proceed to the backend.
    });
});
