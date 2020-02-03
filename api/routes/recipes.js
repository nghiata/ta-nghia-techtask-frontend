var express = require('express');
var router = express.Router();

const RECIPES_DETAIL = [
    {
        "title": "Ham and Cheese Toastie",
        "ingredients": [
            "Ham",
            "Cheese",
            "Bread",
            "Butter"
        ]
    },
    {
        "title": "Salad",
        "ingredients": [
            "Lettuce",
            "Tomato",
            "Cucumber",
            "Beetroot",
            "Salad Dressing"
        ]
    },
    {
        "title": "Hotdog",
        "ingredients": [
            "Hotdog Bun",
            "Sausage",
            "Ketchup",
            "Mustard"
        ]
    }
]

/* GET home page. */
router.get('/', function (req, res, next) {
    let ingredients = req.query.ingredients    
    let recipes_data = RECIPES_DETAIL.filter((recipe, index) => {
        let origin_ingredients = recipe.ingredients
        origin_ingredients.sort()
        return origin_ingredients.join(',') == ingredients
    })    

    res.send(recipes_data)
});

module.exports = router;
