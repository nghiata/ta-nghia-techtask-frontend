var express = require('express');
var moment = require('moment')
var router = express.Router();
const ingredient_data = [
    {
        "title": "Ham",
        "use-by": "2020-01-21"
    },
    {
        "title": "Cheese",
        "use-by": "2020-01-21"
    },
    {
        "title": "Bread",
        "use-by": "2020-01-21"
    },
    {
        "title": "Butter",
        "use-by": "2020-01-21"
    },
    {
        "title": "Bacon",
        "use-by": "2020-01-21"
    },
    {
        "title": "Eggs",
        "use-by": "2020-01-22"
    },
    {
        "title": "Mushrooms",
        "use-by": "2020-01-22"
    },
    {
        "title": "Sausage",
        "use-by": "2020-01-22"
    },
    {
        "title": "Hotdog Bun",
        "use-by": "2020-01-22"
    },
    {
        "title": "Ketchup",
        "use-by": "2020-01-22"
    },
    {
        "title": "Mustard",
        "use-by": "2020-01-22"
    },
    {
        "title": "Lettuce",
        "use-by": "2020-01-23"
    },
    {
        "title": "Tomato",
        "use-by": "2020-01-23"
    },
    {
        "title": "Cucumber",
        "use-by": "2020-01-23"
    },
    {
        "title": "Beetroot",
        "use-by": "2020-01-23"
    },
    {
        "title": "Salad Dressing",
        "use-by": "2020-01-23"
    }
]

/* GET home page. */
router.get('/', function (req, res, next) {
    let use_by = req.query.use_by    
    let ingredient_res = []
    if (use_by != '' && use_by != undefined) {
        ingredient_res = ingredient_data.filter((ingredient, index) => {
            return ingredient['use-by'] == use_by
        })
    }
    else {
        ingredient_res = ingredient_data
    }
    res.send(ingredient_res)
});

module.exports = router;
