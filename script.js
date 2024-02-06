// JavaScript logic for generating random category and loading menu items
function loadMenuItems(categoryShortName) {
    console.log("Loading menu items for category: " + categoryShortName);
    // Implement logic to load menu items for the given category
}

function generateRandomCategory() {
    var categories = ["Lunch", "Dinner", "Sushi", "Appetizers", "Desserts"];
    var randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

window.onload = function () {
    document.getElementById("specialsTile").addEventListener("click", function () {
        var randomCategoryShortName = generateRandomCategory();
        loadMenuItems(randomCategoryShortName);
    });
};
