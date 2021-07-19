import symbol from '../images/enso.png';
import location from '../images/location2.png';

const createHTML = (function() {
    const body = document.querySelector('body')
    const allContent = document.createElement('div')
    const navBar = document.createElement('nav');
        const homeBtn = document.createElement('p');
        const menuBtn = document.createElement('p');
        const contactBtn = document.createElement('p');
        homeBtn.addEventListener('click', switchActiveHome);
        menuBtn.addEventListener('click', switchActiveMenu);
        contactBtn.addEventListener('click', switchActiveContact);
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

    function detailCreator(name, type, description) {

        
        const detailContainer = document.createElement('article');
        detailContainer.setAttribute('id', 'detailItem');
        detailContainer.classList.add('detailItem', 'media', type);
    
        const detailInfo = document.createElement('div');
        detailInfo.setAttribute('id', 'detailInfo');
        detailInfo.classList.add('detailInfo');

        const detailName = document.createElement('h3');
        detailName.setAttribute('id', 'detailName');
        detailName.setAttribute('class', 'detailName');

        const detailDesc = document.createElement('p');
        detailDesc.setAttribute('id', 'detailDesc');
        detailDesc.setAttribute('class', 'detailDesc');
        
        detailName.innerText = name;
        detailDesc.innerText = description
        detailInfo.appendChild(detailName);
        detailInfo.appendChild(detailDesc);
        
        detailContainer.appendChild(detailInfo);

        return detailContainer
            
    }

    function emailCreator(name, type, description) {

        
        const detailContainer = document.createElement('article');
        detailContainer.setAttribute('id', 'detailItem');
        detailContainer.classList.add('detailItem', 'media', type);
    
        const detailInfo = document.createElement('div');
        detailInfo.setAttribute('id', 'detailInfo');
        detailInfo.classList.add('detailInfo');

        const detailName = document.createElement('h3');
        detailName.setAttribute('id', 'detailName');
        detailName.setAttribute('class', 'detailName');

        const detailDesc = document.createElement('a');
        detailDesc.setAttribute('id', 'detailDesc');
        detailDesc.classList.add('detailDesc', 'email');
        detailDesc.setAttribute('href', 'https://github.com/muzidube');
        detailDesc.setAttribute('target', '_blank');

        detailName.innerText = name;
        detailDesc.innerText = description
        detailInfo.appendChild(detailName);
        detailInfo.appendChild(detailDesc);
        
        detailContainer.appendChild(detailInfo);

        return detailContainer
            
    }

    const address = detailCreator('Address', 'address', '278 Kings Road, London, SW3 5AW');
    const telephone = detailCreator('Telephone', 'telephone', '02011 1111 1111');
    const email = emailCreator('Email', 'email', '\nhaveALook@myGithub.com');
    const hours = detailCreator('Opening Hours', 'hours', '4pm - 10pm Every Day');

    const header = document.createElement('header');
    const headerContainer = document.createElement('div');
    const headerContent = document.createElement('div');
    const restSymbol = document.createElement('img');
    const restName = document.createElement('p');
    const mainContainer = document.createElement('div');
    const restInfo = document.createElement('div');
    const infoText = document.createElement('p');
    const menuDiv = document.createElement('div');
    const contactDiv = document.createElement('div');
        const innerContact = document.createElement('section');
            const mapDiv = document.createElement('div'); //column is-6
                const mapTitle = document.createElement('h1');
                const mapContainer = document.createElement('div'); //column is-6
                const mapImg = document.createElement('img'); //column is-6
            const detailsDiv = document.createElement('div'); //column is-6
                const detailsContainer = document.createElement('div');
                    const detailsTitle = document.createElement('h1'); //column is-6
    const footer = document.createElement('footer');
    const footerContainer = document.createElement('div');
    const footerContent = document.createElement('div');
    const footerText = document.createElement('p');
    
    allContent.setAttribute('id', 'content');
    allContent.setAttribute('class', 'content');
    
    navBar.setAttribute('id', 'navBar');
    navBar.setAttribute('class', 'navBar');
        homeBtn.setAttribute('id', 'homeBtn');
        homeBtn.classList.add('navBtns', 'homeBtn', 'active');

        menuBtn.setAttribute('id', 'menuBtn');
        menuBtn.classList.add('navBtns', 'menuBtn');

        contactBtn.setAttribute('id', 'contactBtn');
        contactBtn.classList.add('navBtns', 'contactBtn');


    header.setAttribute('id', 'header');
    header.setAttribute('class', 'header');
        headerContainer.setAttribute('id', 'headerContainer');
        headerContainer.setAttribute('class', 'headerContainer');
            headerContent.setAttribute('id', 'headerContent');
            headerContent.setAttribute('class', 'headerContent');
                restSymbol.setAttribute('id', 'restSymbol');
                restSymbol.setAttribute('class', 'restSymbol');
                restSymbol.setAttribute('src', symbol);
                restName.setAttribute('id', 'restName');
                restName.setAttribute('class', 'restName');

    mainContainer.setAttribute('id', 'mainContainer');
    mainContainer.setAttribute('class', 'mainContainer');

    restInfo.setAttribute('id', 'restInfo');
    restInfo.classList.add('restInfo', 'active');        
        infoText.setAttribute('id', 'infoText');
        infoText.setAttribute('class', 'infoText');

    menuDiv.setAttribute('id', 'menuDiv');
    menuDiv.classList.add('menuDiv');
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
    contactDiv.classList.add('contactDiv');
        innerContact.setAttribute('id', 'contactColumns')
        innerContact.setAttribute('class', 'contactColumns')
            mapDiv.setAttribute('id', 'mapDiv');
            mapDiv.classList.add('contactColumn', 'mapDiv');
                mapTitle.setAttribute('id', 'mapTitle');
                mapTitle.classList.add('mapTitle', 'contactTitles');
                mapContainer.setAttribute('id', 'mapContainer');
                mapContainer.classList.add('mapContainer');
                mapImg.setAttribute('id', 'mapImg');
                mapImg.classList.add('mapImg');
                mapImg.setAttribute('src', location);
            detailsDiv.setAttribute('id', 'detailsDiv');
            detailsDiv.classList.add('contactColumn', 'detailsDiv');
                detailsContainer.setAttribute('id', 'detailsContainer');
                detailsContainer.classList.add('detailsContainer');
                    detailsTitle.setAttribute('id', 'detailsTitle');
                    detailsTitle.classList.add('detailsTitle', 'contactTitles');

    footer.setAttribute('id', 'footer');
    footer.setAttribute('class', 'footer');
        footerContainer.setAttribute('id', 'footerContainer');
        footerContainer.setAttribute('class', 'footerContainer');
            footerContent.setAttribute('id', 'footerContent');
            footerContent.setAttribute('class', 'footerContent');
                footerText.setAttribute('id', 'footerText');
                footerText.setAttribute('class', 'footerText');

     function switchActiveHome() {
        homeBtn.classList.add('active');
        restInfo.classList.add('active');
        menuDiv.classList.remove('active');
        menuBtn.classList.remove('active');
        contactDiv.classList.remove('active');
        contactBtn.classList.remove('active');

        
    }

    function switchActiveMenu() {
        menuBtn.classList.add('active');
        menuDiv.classList.add('active');
        contactDiv.classList.remove('active');
        contactBtn.classList.remove('active');
        restInfo.classList.remove('active');
        homeBtn.classList.remove('active');
        
    }

    function switchActiveContact() {
        contactBtn.classList.add('active');
        contactDiv.classList.add('active');
        menuDiv.classList.remove('active');
        menuBtn.classList.remove('active');
        restInfo.classList.remove('active');
        homeBtn.classList.remove('active');

    }

    return {
        body,
        allContent,
        navBar,
        homeBtn,

        menuBtn,
        menuDiv,
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
        contactDiv,
        innerContact,
        mapDiv,
        mapTitle,
        mapContainer,
        mapImg,
        detailsDiv,
        detailsTitle,
        detailsContainer,
        address,
        telephone,
        email,
        hours,

        header,
        headerContainer,
        headerContent,
        restSymbol,
        restName,
        mainContainer,
        restInfo,
        infoText,
        footer,
        footerContainer,
        footerContent,
        footerText,
    }

})();

const contentHTML =(function() {
    const {
        body,
        allContent,
        navBar,
        homeBtn,

        menuBtn,
        menuDiv,
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
        contactDiv,
        innerContact,
        mapDiv,
        mapTitle,
        mapContainer,
        mapImg,
        detailsDiv,
        detailsTitle,
        detailsContainer,
        address,
        telephone,
        email,
        hours,

        header,
        headerContainer,
        headerContent,
        restSymbol,
        restName,
        mainContainer,
        restInfo,
        infoText,

        footer,
        footerContainer,
        footerContent,
        footerText,

    } = createHTML;

    restName.innerText = 'Hagane Teppanyaki';

    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';
    contactBtn.innerText = 'Contact';

    sushiDishes.innerText = 'Signature Sushi';
    teppanyakiDishes.innerText = 'Teppanyaki';

    mapTitle.innerText = 'Find Us';
    detailsTitle.innerText = 'Info';
    
    infoText.innerText = ('Hagane Teppanyaki is a Japanese food haven, in a relaxing setting. Offering authentic Japanese dining and seamless hospitality, all presented in an atmosphere of unpretentious enjoyment.\n\nPlease have a look at our menu, you can dine inside or click and collect.\n\nYour food journey awaits.');

    footerText.innerText = ('A Muzi Dube Restaurant');
})();

const DOMappender =(function() {
    const {
        body,
        allContent,
        navBar,
        homeBtn,

        menuBtn,
        menuDiv,
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
        contactDiv,
        innerContact,
        mapDiv,
        mapTitle,
        mapContainer,
        mapImg,
        detailsDiv,
        detailsTitle,
        detailsContainer,
        address,
        telephone,
        email,
        hours,

        header,
        headerContainer,
        headerContent,
        restSymbol,
        restName,
        mainContainer,
        restInfo,
        infoText,

        footer,
        footerContainer,
        footerContent,
        footerText,

    } = createHTML;

    body.appendChild(allContent);

    mainContainer.appendChild(restInfo);
    restInfo.appendChild(infoText);
    mainContainer.appendChild(menuDiv);
    mainContainer.appendChild(contactDiv);
    
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

    contactDiv.appendChild(innerContact);
        innerContact.appendChild(mapDiv);
            mapDiv.appendChild(mapTitle);
            mapDiv.appendChild(mapImg);
        innerContact.appendChild(detailsDiv);
            detailsDiv.appendChild(detailsContainer);
                detailsContainer.appendChild(detailsTitle);
                detailsContainer.appendChild(address);
                detailsContainer.appendChild(telephone);
                detailsContainer.appendChild(email);
                detailsContainer.appendChild(hours);





    header.appendChild(headerContainer);
    headerContainer.appendChild(headerContent);
    headerContent.appendChild(restSymbol);
    headerContent.appendChild(restName);


    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    footer.appendChild(footerContainer);
    footerContainer.appendChild(footerContent);
    footerContent.appendChild(footerText);
    
    
    allContent.appendChild(header);
    allContent.appendChild(navBar);
    allContent.appendChild(mainContainer);
    allContent.appendChild(footer);





})();