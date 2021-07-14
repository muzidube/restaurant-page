const createHTML = (function() {
    const body = document.querySelector('body')
    const allContent = document.createElement('div')
    const navBar = document.createElement('nav');
    const homeBtn = document.createElement('p');

    const menuBtn = document.createElement('p');

    const sushiMenu = document.createElement('div');
        const sushiDishes = document.createElement('dl');
            const sushiDish1 = document.createElement('dt');
            const sushiDish2 = document.createElement('p');
            const sushiDish3 = document.createElement('p');
            const sushiDish4 = document.createElement('p');

        const sushiPrices = document.createElement('div');
            const sushiPrice1 = document.createElement('p');
            const sushiPrice2 = document.createElement('p');
            const sushiPrice3 = document.createElement('p');
            const sushiPrice4 = document.createElement('p');


    const teppanyakiMenu = document.createElement('div');
        const teppanyakiDishes = document.createElement('div');
            const teppanyakiDish1 = document.createElement('p');
            const teppanyakiDish2 = document.createElement('p');
            const teppanyakiDish3 = document.createElement('p');
            const teppanyakiDish4 = document.createElement('p');
            const teppanyakiDish5 = document.createElement('p');

        const teppanyakiPrices = document.createElement('div');
            const teppanyakiPrice1 = document.createElement('p');
            const teppanyakiPrice2 = document.createElement('p');
            const teppanyakiPrice3 = document.createElement('p');
            const teppanyakiPrice4 = document.createElement('p');
            const teppanyakiPrice5 = document.createElement('p');

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
    allContent.setAttribute('class', 'content')
    
    navBar.setAttribute('id', 'navBar');
    navBar.setAttribute('class', 'navBar');
        homeBtn.setAttribute('id', 'homeBtn');
        homeBtn.setAttribute('class', 'homeBtn');

        menuBtn.setAttribute('id', 'menuBtn');
        menuBtn.setAttribute('class', 'menuBtn');

        contactBtn.setAttribute('id', 'contactBtn');
        contactBtn.setAttribute('class', 'contactBtn');


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
        sushiMenu.setAttribute('id', 'sushiMenu');
        sushiMenu.setAttribute('class', 'sushiMenu');
            sushiDishes.setAttribute('id', 'sushiDishes');
            sushiDishes.setAttribute('class', 'sushiDishes');
                sushiDish1.setAttribute('id', 'sushiDish');
                sushiDish1.setAttribute('class', 'sushiDish');
                sushiDish2.setAttribute('id', 'sushiDish');
                sushiDish2.setAttribute('class', 'sushiDish');
                sushiDish3.setAttribute('id', 'sushiDish');
                sushiDish3.setAttribute('class', 'sushiDish');
                sushiDish4.setAttribute('id', 'sushiDish');
                sushiDish4.setAttribute('class', 'sushiDish');
            sushiPrices.setAttribute('id', 'sushiPrices');
            sushiPrices.setAttribute('class', 'sushiPrices');
                sushiPrice1.setAttribute('id', 'sushiPrice');
                sushiPrice1.setAttribute('class', 'sushiPrice');
                sushiPrice2.setAttribute('id', 'sushiPrice');
                sushiPrice2.setAttribute('class', 'sushiPrice');
                sushiPrice3.setAttribute('id', 'sushiPrice');
                sushiPrice3.setAttribute('class', 'sushiPrice');
                sushiPrice4.setAttribute('id', 'sushiPrice');
                sushiPrice4.setAttribute('class', 'sushiPrice');

        teppanyakiMenu.setAttribute('id', 'teppanyakiMenu');
        teppanyakiMenu.setAttribute('class', 'teppanyakiMenu');
            teppanyakiDishes.setAttribute('id', 'teppanyakiDishes');
            teppanyakiDishes.setAttribute('class', 'teppanyakiDishes');
                teppanyakiDish1.setAttribute('id', 'teppanyakiDish');
                teppanyakiDish1.setAttribute('class', 'teppanyakiDish');
                teppanyakiDish2.setAttribute('id', 'teppanyakiDish');
                teppanyakiDish2.setAttribute('class', 'teppanyakiDish');
                teppanyakiDish3.setAttribute('id', 'teppanyakiDish');
                teppanyakiDish3.setAttribute('class', 'teppanyakiDish');
                teppanyakiDish4.setAttribute('id', 'teppanyakiDish');
                teppanyakiDish4.setAttribute('class', 'teppanyakiDish');
            teppanyakiPrices.setAttribute('id', 'teppanyakiPrices');
            teppanyakiPrices.setAttribute('class', 'teppanyakiPrices');
                teppanyakiPrice1.setAttribute('id', 'teppanyakiPrice');
                teppanyakiPrice1.setAttribute('class', 'teppanyakiPrice');
                teppanyakiPrice2.setAttribute('id', 'teppanyakiPrice');
                teppanyakiPrice2.setAttribute('class', 'teppanyakiPrice');
                teppanyakiPrice3.setAttribute('id', 'teppanyakiPrice');
                teppanyakiPrice3.setAttribute('class', 'teppanyakiPrice');
                teppanyakiPrice4.setAttribute('id', 'teppanyakiPrice');
                teppanyakiPrice4.setAttribute('class', 'teppanyakiPrice');

    contactDiv.setAttribute('id', 'contactDiv');
    contactDiv.setAttribute('class', 'contactDiv');

    return {
        body,
        allContent,
        navBar,
        homeBtn,

        menuBtn,       
        sushiMenu,
        sushiDishes,
        sushiDish1,
        sushiDish2,
        sushiDish3,
        sushiDish4,
        sushiPrice1,
        sushiPrice2,
        sushiPrice3,
        sushiPrice4,

        teppanyakiMenu,
        teppanyakiDishes,
        teppanyakiDish1,
        teppanyakiDish2,
        teppanyakiDish3,
        teppanyakiDish4,
        teppanyakiDish5,
        teppanyakiPrice1,
        teppanyakiPrice2,
        teppanyakiPrice3,
        teppanyakiPrice4,
        teppanyakiPrice5,

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
        contactBtn,
        header,
        h1,
        mainContainer,
        imageDiv,
        restInfo,
        infoText,
        menuDiv,
        contactDiv

    } = createHTML;

    h1.innerText = 'Hagane Teppanyaki';

    homeBtn.innerText = 'Home';
    menuBtn.innerText = 'Menu';
    contactBtn.innerText = 'Contact';

    sushiDishes.innerText = 'Signature Sushi';
        sushiDish1.innerText = 'Tuna';


})();

const menuLists =(function() {

    sushiList = ['Electronics Watch','House wear Items','Kids wear','Women Fashion'];
    sushiCost = ['Electronics Watch','House wear Items','Kids wear','Women Fashion'];

    teppanyakiList = ['Electronics Watch','House wear Items','Kids wear','Women Fashion'];
    teppanyakiCost = ['Electronics Watch','House wear Items','Kids wear','Women Fashion'];

    function renderProductList(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class','item');

        ul.appendChild(li);

        li.innerHTML=li.innerHTML + element;
    }
})();

const DOMappender =(function() {
    const {
        body,
        allContent,
        navBar,
        homeBtn,
        menuBtn,
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

    header.appendChild(h1);

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);


    
    allContent.appendChild(header);
    allContent.appendChild(navBar);
    allContent.appendChild(mainContainer);

    //Appender for menu items

    document.getElementById('renderList').appendChild(ul);
    productList.forEach(renderProductList);

})();