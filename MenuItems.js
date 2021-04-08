const items = [
    {
        key: "burgers",
        title: "Burgers",
        data: [
            {id: 1, name: "Hamburger", calories: 260, fat: 8, carbs: 31, sugar: 6, sodium: 0.48, image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26231102%2F3757723.jpg"},
            {id: 2, name: "Cheeseburger", calories: 300, fat: 12, carbs: 33, sugar: 7, sodium: 0.68, image: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3-500x500.jpg"},
            {id: 3, name: "Double Cheeseburger", calories: 450, fat: 23, carbs: 34, sugar: 7, sodium: 1.18, image: "https://img.buzzfeed.com/video-api-prod/assets/7500687a06b34ee29c84a044861a01fc/BFV9770_DoubleCheeseburgerasmadebyErikAnderson-Thumb1080SQ.jpg"},
            {id: 4, name: "Chili Burger", calories: 550, fat: 32, carbs: 51, sugar: 8, sodium: 1.18, image: "https://palsweb.com/uploads/image/md/chili-burger"},
            {id: 5, name: "Impossible Burger", calories: 250, fat: 39, carbs: 53, sugar: 11, sodium: 1.61, image: "https://pyxis.nymag.com/v1/imgs/2e4/fec/ce667f789b3069be484b44ce9190942a44-15-impossible-burger-1.rsquare.w1200.jpg"}
        ]
    },

    {
        key: "pizzas",
        title: "Pizzas",
        data: [
            {id: 6, name: "Classic Pepperoni Pizza", calories: 300, fat: 12.1, carbs: 34, sugar: 4.1, sodium: 0.68, image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg"},
            {id: 7, name: "Cheese Pizza", calories: 270, fat: 9.8, carbs: 33.6, sugar: 4.1, sodium: 0.55, image: "https://gimmedelicious.com/wp-content/uploads/2014/03/Cauliflower-Crust-Pizza-1-500x500.jpg"},
            {id: 8, name: "Hawaiian Pizza", calories: 350, fat: 8.3, carbs: 25.3, sugar: 3.1, sodium: 0.56, image: "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg"},
            {id: 9, name: "Meat Lover's Pizza", calories: 390, fat: 21, carbs: 34, sugar: 2.0, sodium: 0.86, image: "https://www.queensleeappetit.com/wp-content/uploads/2019/02/Meat-Lovers-Pizza-5-1-480x480.jpg"},
            {id: 10, name: "Deep Dish Pizza", calories: 550, fat: 11.6, carbs: 33.2, sugar: 3.4, sodium: 0.56, image: "https://www.thefooddictator.com/wp-content/uploads/2019/02/deepdish.jpg"}
        ]
    },

    {
        key: "seafood",
        title: "Seafood",
        data: [
            {id: 11, name: "Grilled Salmon", calories: 360, fat: 21, carbs: 3, sugar: 1, sodium: 0.61, image: "https://fitfoodiefinds.com/wp-content/uploads/2020/05/grilled-salmon-12sq.jpg"},
            {id: 12, name: "California Sushi Roll", calories: 230, fat: 16, carbs: 47, sugar: 3.4, sodium: 0.8, image: "https://www.masalaherb.com/wp-content/uploads/2020/07/California-Roll-gog-1.jpg"},
            {id: 13, name: "Steamed Lobster", calories: 430, fat: 34, carbs: 2, sugar: 1.3, sodium: 290, image: "https://www.thespruceeats.com/thmb/-o0W1_Td2SFqBXwfrPuThC-LGkY=/2533x2533/smart/filters:no_upscale()/steamed-lobster-5097205-hero-06ab15ae53234b0ea162b60d54e57856.jpg"},
            {id: 14, name: "Shrimp Platter", calories: 110, fat: 7.4, carbs: 12.8, sugar: 2.8, sodium: 0.34, image: "https://www.langensteins.com/wp-content/uploads/2018/05/shrimp.jpg"},
            {id: 15, name: "Grilled Octopus", calories: 160, fat: 2.4, carbs: 5, sugar: 0, sodium: 0.52, image: "https://rasamalaysia.com/wp-content/uploads/2020/06/grilled-octopus-thumb-480x480.jpg"}
        ]
    },

    {
        key: "desserts",
        title: "Desserts",
        data: [
            {id: 16, name: "Chocalate Chip Cookie", calories: 90, fat: 2.3, carbs: 6.7, sugar: 15, sodium: 0.03, image: "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg"},
            {id: 17, name: "Fudge Brownie", calories: 210, fat: 8, carbs: 37, sugar: 24, sodium: 0.2, image: "https://www.theflavorbender.com/wp-content/uploads/2018/02/Fudgy-Brownies-The-Flavor-Bender-Featured-Image-SQ-16.jpg"},
            {id: 18, name: "Cheese Danish", calories: 250, fat: 15.5, carbs: 26.4, sugar: 5, sodium: 0.320, image: "https://lowcarbyum.com/wp-content/uploads/2016/04/cloud-bread-danish-sq.jpg"},
            {id: 19, name: "Cheesecake", calories: 400, fat: 18, carbs: 20.4, sugar: 8, sodium: 0.04, image: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg"},
            {id: 20, name: "Mochi Ice Cream", calories: 100, fat: 1, carbs: 25, sugar: 3, sodium: 0, image: "https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-034.jpg"}
        ]
    },

    {
        key: "drinks",
        title: "Drinks",
        data: [
            {id: 21, name: "Water", calories: 0, fat: 0, carbs: 0, sugar: 0, sodium: 0, image: "https://pizzahampstead.com/wp-content/uploads/2016/09/45.jpg"},
            {id: 22, name: "Coca-Cola", calories: 140, fat: 0, carbs: 39, sugar: 39, sodium: 0.05, image: "https://img-new.cgtrader.com/items/146818/db92e85d13/realistic-coca-cola-can-3d-model-obj-3ds-fbx-c4d.jpg"},
            {id: 23, name: "Sprite", calories: 140, fat: 0, carbs: 34.2, sugar: 34.2, sodium: 0.06, image: "https://www.hippiebutler.com/wp-content/uploads/2017/07/Sprite-Can-1.jpg"},
            {id: 24, name: "Hawaiian Punch", calories: 110, fat: 0, carbs: 17, sugar: 17, sodium: 0.1, image: "https://images.freshop.com/00078000040234/ecc5c455c82cdf64e28df1b288a8a806_large.png"},
            {id: 25, name: "Orange Fanta", calories: 160, fat: 0, carbs: 28.1, sugar: 28.1, sodium: 0.03, image: "https://i.pinimg.com/originals/46/8c/69/468c69f66e073fb7a5fd8c493761be35.jpg"}
        ]
    }
];

export default items;
