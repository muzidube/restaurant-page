const createHTML = (function() {
    const body = document.querySelector('body')
    const allContent = document.createElement('div')
    const navBar = document.createElement('nav');
    const homeBtn = document.createElement('p');

    const menuBtn = document.createElement('p');

    const innerMenu = document.createElement('section');

    const sushiMenu = document.createElement('div'); //column is-6
    const sushiDishes = document.createElement('h1'); //title

    const teppanyakiMenu = document.createElement('div'); //column is-6
    const teppanyakiDishes = document.createElement('h1'); //title
           
    function dishCreator(num, name, price, description) {

        
        const dish = document.createElement('article'); //container
        dish.setAttribute('id', 'menuItem');
        dish.classList.add('menuItem', 'media', num);
    
        const dishInfo = document.createElement('div');
        dishInfo.setAttribute('id', 'dishInfo');
        dishInfo.classList.add('dishInfo');

        const dishName = document.createElement('h3');
        dishName.setAttribute('id', 'dishName');
        dishName.setAttribute('class', 'dishName');

        const dishPrice = document.createElement('span');
        dishPrice.setAttribute('id', 'dishPrice');
        dishPrice.classList.add('dishPrice', 'is-right');

        const dishDesc = document.createElement('p');
        dishDesc.setAttribute('id', 'dishDesc');
        dishDesc.setAttribute('class', 'dishDesc');

        const dishCartBtn = document.createElement('button');
        dishCartBtn.setAttribute('id', 'dishCartBtn');
        dishCartBtn.classList.add('dishCartBtn', 'is-right');

        dishName.innerText = name;
        dishPrice.innerText = price;
        dishDesc.innerText = description;
        dishCartBtn.innerText = 'Add to Cart';

        dishInfo.appendChild(dishName);
        dishInfo.appendChild(dishPrice);
        dishInfo.appendChild(dishDesc);
        dishInfo.appendChild(dishCartBtn);
        
        dish.appendChild(dishInfo);

        return dish
            
    }

    const sushiDish1 = dishCreator(1, 'Tuna Tataki', '£12.50', 'Rare tuna slices served with salad and spicy citrus sauce' );
    const sushiDish2 = dishCreator(2, 'Salmon Tataki', '£10.50', 'Rare salmon slices served with salad and ponzu sauce' );
    const sushiDish3 = dishCreator(3, 'Tuna Blue Laguna', '£11.50', 'Tuna wrapped in seaweed and deep fried in tempura butter, served with balsamic teriyaki sauce' );
    const sushiDish4 = dishCreator(4, 'Beef Fillet Tataki', '£12.00', 'Slices of rare beef steak srved with salad and tosa-zu sauce' );

    const teppanyakiDish1 = dishCreator(5, 'Chicken', '£16.00', 'Teriyaki' );
    const teppanyakiDish2 = dishCreator(6, 'Duck Breast', '£19.00', 'Honey, ginger and orange marmalade' );
    const teppanyakiDish3 = dishCreator(7, 'Pork Fillet', '£18.00', 'Barbecue' );
    const teppanyakiDish4 = dishCreator(8, 'Lamb Fillet', '£20.00', 'Garlic chilli' );
    const teppanyakiDish5 = dishCreator(9, 'Beef Fillet', '£22.00', 'Asparagus and shitake mushrooms' );

    const contactBtn = document.createElement('p');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const mainContainer = document.createElement('div');
    const imageDiv = document.createElement('div');
    const restInfo = document.createElement('div');
    const infoText = document.createElement('p');
    const menuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
    
    allContent.setAttribute('id', 'content');
    allContent.setAttribute('class', 'content');
    
    navBar.setAttribute('id', 'navBar');
    navBar.setAttribute('class', 'navBar');
        homeBtn.setAttribute('id', 'homeBtn');
        homeBtn.classList.add('navBtns', 'homeBtn');

        menuBtn.setAttribute('id', 'menuBtn');
        menuBtn.classList.add('navBtns', 'menuBtn');

        contactBtn.setAttribute('id', 'contactBtn');
        contactBtn.classList.add('navBtns', 'contactBtn');


    header.setAttribute('id', 'header');
    header.setAttribute('class', 'header');

    h1.setAttribute('id', 'mainTitle');
    h1.setAttribute('class', 'mainTitle');

    mainContainer.setAttribute('id', 'mainContainer');
    mainContainer.setAttribute('class', 'mainContainer');

    imageDiv.setAttribute('id', 'imageDiv');
    imageDiv.setAttribute('class', 'imageDiv');

    restInfo.setAttribute('id', 'restInfo');
    restInfo.setAttribute('class', 'restInfo');        
        infoText.setAttribute('id', 'infoText');
        infoText.setAttribute('class', 'infoText');

    menuDiv.setAttribute('id', 'menuDiv');
    menuDiv.setAttribute('class', 'menuDiv');
        innerMenu.setAttribute('id', 'menuColumns')
        innerMenu.setAttribute('class', 'menuColumns')
            sushiMenu.setAttribute('id', 'sushiColumn');
            sushiMenu.classList.add('menuColumn', 'sushiMenu');
            sushiDishes.setAttribute('id', 'sushiDishes');
            sushiDishes.classList.add('sushiDishes', 'titleDishes');

            teppanyakiMenu.setAttribute('id', 'teppanyakiColumn');
            teppanyakiMenu.classList.add('menuColumn', 'teppanyakiMenu');
            teppanyakiDishes.setAttribute('id', 'teppanyakiDishes');
            teppanyakiDishes.classList.add('teppanyakiDishes', 'titleDishes');

    contactDiv.setAttribute('id', 'contactDiv');
    contactDiv.setAttribute('class', 'contactDiv');

    return {
        body,
        allContent,
        navBar,
        homeBtn,

        menuBtn,
        innerMenu,       
        sushiMenu,
        sushiDishes,
        sushiDish1,
        sushiDish2,
        sushiDish3,
        sushiDish4,

        teppanyakiMenu,
        teppanyakiDishes,
        teppanyakiDish1,
        teppanyakiDish2,
        teppanyakiDish3,
        teppanyakiDish4,
        teppanyakiDish5,

        contactBtn,
        header,
        h1,
        mainContainer,
        imageDiv,
        restInfo,
        infoText,
        menuDiv,
        contactDiv,
    }

})();

const contentHTML =(function() {
    const {
        body,
        allContent,
        navBar,
        homeBtn,

        menuBtn,
        innerMenu,       
        sushiMenu,
        sushiDishes,
        sushiDish1,
        sushiDish2,
        sushiDish3,
        sushiDish4,

        teppanyakiMenu,
        teppanyakiDishes,
        teppanyakiDish1,
        teppanyakiDish2,
        teppanyakiDish3,
        teppanyakiDish4,
        teppanyakiDish5,

        contactBtn,
        header,
        h1,
        mainContainer,
        imageDiv,
        restInfo,
        infoText,
        menuDiv,
        contactDiv,
    } = createHTML;

    h1.innerText = 'Hagane Teppanyaki';

    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';
    contactBtn.innerText = 'Contact';

    sushiDishes.innerText = 'Signature Sushi';
    teppanyakiDishes.innerText = 'Teppanyaki';


})();

const DOMappender =(function() {
    const {
        body,
        allContent,
        navBar,
        homeBtn,

        menuBtn,
        innerMenu,       
        sushiMenu,
        sushiDishes,
        sushiDish1,
        sushiDish2,
        sushiDish3,
        sushiDish4,

        teppanyakiMenu,
        teppanyakiDishes,
        teppanyakiDish1,
        teppanyakiDish2,
        teppanyakiDish3,
        teppanyakiDish4,
        teppanyakiDish5,

        contactBtn,
        header,
        h1,
        mainContainer,
        imageDiv,
        restInfo,
        infoText,
        menuDiv,
        contactDiv,
    } = createHTML;

    body.appendChild(allContent);

    mainContainer.appendChild(imageDiv);
    mainContainer.appendChild(restInfo);
    restInfo.appendChild(infoText);
    mainContainer.appendChild(menuDiv);
    mainContainer.appendChild(contactDiv);
    mainContainer.appendChild(menuDiv);
    
    menuDiv.appendChild(innerMenu);
        innerMenu.appendChild(sushiMenu);
            sushiMenu.appendChild(sushiDishes);
            sushiMenu.appendChild(sushiDish1);
            sushiMenu.appendChild(sushiDish2);
            sushiMenu.appendChild(sushiDish3);
            sushiMenu.appendChild(sushiDish4);
        innerMenu.appendChild(teppanyakiMenu);
            teppanyakiMenu.appendChild(teppanyakiDishes);
            teppanyakiMenu.appendChild(teppanyakiDish1);
            teppanyakiMenu.appendChild(teppanyakiDish2);
            teppanyakiMenu.appendChild(teppanyakiDish3);
            teppanyakiMenu.appendChild(teppanyakiDish4);
            teppanyakiMenu.appendChild(teppanyakiDish5);




    header.appendChild(h1);

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);


    
    allContent.appendChild(header);
    allContent.appendChild(navBar);
    allContent.appendChild(mainContainer);




})();