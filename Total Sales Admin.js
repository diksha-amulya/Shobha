// Dummy data for the dashboard elements
const topSellingProducts = [
    { name: 'Luxury Centerpiece', price: '$200', rating: '4.8' },
    { name: 'LED String Lights', price: '$50', rating: '4.5' },
    { name: 'Gold Backdrop Arch', price: '$300', rating: '4.7' }
];

const paymentMethods = [
    { method: 'Credit Card', percentage: '60%' },
    { method: 'PayPal', percentage: '25%' },
    { method: 'Bank Transfer', percentage: '15%' }
];

const recentOrders = [
    { name: 'Flower Arrangement', price: '$120', rating: '4.6' },
    { name: 'Tablecloth Set', price: '$40', rating: '4.4' },
    { name: 'Wedding Arch', price: '$350', rating: '5.0' },
    { name: 'LED Party Lights', price: '$80', rating: '4.3' },
    { name: 'Centerpiece Vase', price: '$75', rating: '4.6' }
];

// Insert Top-Selling Products
const topProductsList = document.getElementById('top-products');
topSellingProducts.forEach(product => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${product.name} - ${product.price} - Rating: ${product.rating}`;
    topProductsList.appendChild(listItem);
});

// Insert Payment Methods
const paymentList = document.getElementById('payment-methods');
paymentMethods.forEach(payment => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${payment.method}: ${payment.percentage}`;
    paymentList.appendChild(listItem);
});

// Insert Recent Orders
const ordersTableBody = document.getElementById('orders-table').getElementsByTagName('tbody')[0];
recentOrders.forEach(order => {
    const row = ordersTableBody.insertRow();
    const productNameCell = row.insertCell(0);
    const priceCell = row.insertCell(1);
    const ratingCell = row.insertCell(2);
    
    productNameCell.innerText = order.name;
    priceCell.innerText = order.price;
    ratingCell.innerText = order.rating;
});
