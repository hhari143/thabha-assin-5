// Add your JavaScript code here
function loadMenuItems(category) {
    // Show menu page
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'block';

    // Load menu items based on category
    document.getElementById('menu-category').innerText = category + ' Items';

    // Simulate loading menu items from server
    setTimeout(function () {
        // Dummy menu items data
        var menuItems = [
            { name: 'Item 1', price: '$10' },
            { name: 'Item 2', price: '$15' },
            { name: 'Item 3', price: '$8' }
        ];

        var menuList = document.getElementById('menu-items');
        menuList.innerHTML = ''; // Clear previous items

        menuItems.forEach(function (item) {
            var li = document.createElement('li');
            li.className = 'menu-item';
            li.innerText = item.name + ' - ' + item.price;
            menuList.appendChild(li);
        });
    }, 500); // Simulating delay for loading data
}

function loadRandomCategory() {
    var categories = ['Lunch', 'Dinner', 'Sushi', 'Drinks']; // Add more categories as needed
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    loadMenuItems(randomCategory);
}
