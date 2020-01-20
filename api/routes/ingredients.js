var express = require('express');
var router = express.Router();
const ingredient_data = [
    {
        "title": "Ham",
        "use-by": "2019-11-25"
    },
    {
        "title": "Cheese",
        "use-by": "2019-11-08"
    },
    {
        "title": "Bread",
        "use-by": "2019-11-01"
    },
    {
        "title": "Butter",
        "use-by": "2019-11-25"
    },
    {
        "title": "Bacon",
        "use-by": "2019-11-02"
    },
    {
        "title": "Eggs",
        "use-by": "2019-11-25"
    },
    {
        "title": "Mushrooms",
        "use-by": "2019-11-11"
    },
    {
        "title": "Sausage",
        "use-by": "2019-11-25"
    },
    {
        "title": "Hotdog Bun",
        "use-by": "2019-11-25"
    },
    {
        "title": "Ketchup",
        "use-by": "2019-11-11"
    },
    {
        "title": "Mustard",
        "use-by": "2019-11-10"
    },
    {
        "title": "Lettuce",
        "use-by": "2019-11-10"
    },
    {
        "title": "Tomato",
        "use-by": "2019-11-05"
    },
    {
        "title": "Cucumber",
        "use-by": "2019-11-05"
    },
    {
        "title": "Beetroot",
        "use-by": "2019-11-06"
    },
    {
        "title": "Salad Dressing",
        "use-by": "2019-11-06"
    }
]

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send(ingredient_data)
});

module.exports = router;
