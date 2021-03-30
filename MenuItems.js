const items = [
    {
        key: "burgers",
        title: "Burgers",
        data: [
            {id: 1, name: "Hamburger", price: 5.99, calories: 260, image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26231102%2F3757723.jpg"},
            {id: 2, name: "Cheeseburger", price: 6.99, calories: 300, image: "https://www.simplyhappyfoodie.com/wp-content/uploads/2018/04/instant-pot-hamburgers-3-500x500.jpg"},
            {id: 3, name: "Double Cheeseburger", price: 7.99, calories: 450, image: "https://img.buzzfeed.com/video-api-prod/assets/7500687a06b34ee29c84a044861a01fc/BFV9770_DoubleCheeseburgerasmadebyErikAnderson-Thumb1080SQ.jpg"},
            {id: 4, name: "Chili Burger", price: 8.49, calories: 550, image: "https://palsweb.com/uploads/image/md/chili-burger"},
            {id: 5, name: "Impossible Burger", price: 7.99, calories: 250, image: "https://pyxis.nymag.com/v1/imgs/2e4/fec/ce667f789b3069be484b44ce9190942a44-15-impossible-burger-1.rsquare.w1200.jpg"}
        ]
    },

    {
        key: "pizzas",
        title: "Pizzas",
        data: [
            {id: 6, name: "Classic Pepperoni Pizza", price: 5.99, calories: 320, image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg"},
            {id: 7, name: "Cheese Pizza", price: 4.99, calories: 270, image: "https://gimmedelicious.com/wp-content/uploads/2014/03/Cauliflower-Crust-Pizza-1-500x500.jpg"},
            {id: 8, name: "Hawaiian Pizza", price: 6.29, calories: 350, image: "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg"},
            {id: 9, name: "Meat Lover's Pizza", price: 7.49, calories: 390, image: "https://www.queensleeappetit.com/wp-content/uploads/2019/02/Meat-Lovers-Pizza-5-1-480x480.jpg"},
            {id: 10, name: "Deep Dish Pizza", price: 8.99, calories: 550, image: "https://www.thefooddictator.com/wp-content/uploads/2019/02/deepdish.jpg"}
        ]
    },

    {
        key: "seafood",
        title: "Seafood",
        data: [
            {id: 11, name: "Grilled Salmon", price: 5.99, calories: 360, image: "https://fitfoodiefinds.com/wp-content/uploads/2020/05/grilled-salmon-12sq.jpg"},
            {id: 12, name: "California Sushi Roll", price: 4.99, calories: 230, image: "https://www.masalaherb.com/wp-content/uploads/2020/07/California-Roll-gog-1.jpg"},
            {id: 13, name: "Steamed Lobster", price: 8.29, calories: 130, image: "https://www.thespruceeats.com/thmb/-o0W1_Td2SFqBXwfrPuThC-LGkY=/2533x2533/smart/filters:no_upscale()/steamed-lobster-5097205-hero-06ab15ae53234b0ea162b60d54e57856.jpg"},
            {id: 14, name: "Shrimp Platter", price: 7.49, calories: 110, image: "https://www.langensteins.com/wp-content/uploads/2018/05/shrimp.jpg"},
            {id: 15, name: "Grilled Octopus", price: 8.99, calories: 160, image: "https://rasamalaysia.com/wp-content/uploads/2020/06/grilled-octopus-thumb-480x480.jpg"}
        ]
    },

    {
        key: "desserts",
        title: "Desserts",
        data: [
            {id: 16, name: "Chocalate Chip Cookie", price: 2.99, calories: 90, image: "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg"},
            {id: 17, name: "Fudge Brownie", price: 3.99, calories: 210, image: "https://www.theflavorbender.com/wp-content/uploads/2018/02/Fudgy-Brownies-The-Flavor-Bender-Featured-Image-SQ-16.jpg"},
            {id: 18, name: "Cheese Danish", price: 2.59, calories: 250, image: "https://lowcarbyum.com/wp-content/uploads/2016/04/cloud-bread-danish-sq.jpg"},
            {id: 19, name: "Cheesecake", price: 4.49, calories: 400, image: "https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg"},
            {id: 20, name: "Mochi Ice Cream", price: 1.99, calories: 100, image: "https://kirbiecravings.com/wp-content/uploads/2016/09/mochi-ice-cream-034.jpg"}
        ]
    },

    {
        key: "drinks",
        title: "Drinks",
        data: [
            {id: 21, name: "Water", price: 1.99, calories: 0, image: "https://pizzahampstead.com/wp-content/uploads/2016/09/45.jpg"},
            {id: 22, name: "Coca-Cola", price: 2.49, calories: 140, image: "https://img-new.cgtrader.com/items/146818/db92e85d13/realistic-coca-cola-can-3d-model-obj-3ds-fbx-c4d.jpg"},
            {id: 23, name: "Sprite", price: 2.49, calories: 140, image: "https://www.hippiebutler.com/wp-content/uploads/2017/07/Sprite-Can-1.jpg"},
            {id: 24, name: "Hawaiian Punch", price: 2.49, calories: 110, image: "https://images.freshop.com/00078000040234/ecc5c455c82cdf64e28df1b288a8a806_large.png"},
            {id: 25, name: "Orange Fanta", price: 2.49, calories: 160, image: "https://i.pinimg.com/originals/46/8c/69/468c69f66e073fb7a5fd8c493761be35.jpg"}
        ]
    }
];

export default items;
