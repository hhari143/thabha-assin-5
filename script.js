// js/script.js

(function () {
    var randomCategoryShortName = ""; // Initialize variable for random category short name

    // Function to load menu items for a given category
    function loadMenuItems(categoryShortName) {
        console.log("Loading menu items for category: " + categoryShortName);
        // Implement logic to load menu items for the given category
    }

    // Function to generate a random category short name
    function generateRandomCategory() {
        var categories = ["Lunch", "Dinner", "Sushi", "Appetizers", "Desserts"];
        var randomIndex = Math.floor(Math.random() * categories.length);
        return categories[randomIndex];
    }

    // STEP 0: Generate a random category short name when Specials tile is clicked
    document.getElementById("specialsTile").addEventListener("click", function () {
        randomCategoryShortName = generateRandomCategory();
        loadMenuItems(randomCategoryShortName);
    });

    // TODO: STEP 1 - Implement the rest of the steps as instructed

})();
