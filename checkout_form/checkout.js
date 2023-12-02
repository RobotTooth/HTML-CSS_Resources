const checkoutForm = document.getElementById('checkout-form');

checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(checkoutForm);

    fetch('/checkout', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your order has been placed!');
        } else {
            alert('There was an error processing your order. Please try again.');
        }
    });
});
