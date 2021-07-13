const createHTML = (function() {
    const body = document.querySelector('body')
    const allContent = document.createElement('div')
    const navBar = document.createElement('nav');
    const homeBtn = document.createElement('p');
    const menuBtn = document.createElement('p');
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

    contactDiv.setAttribute('id', 'contactDiv');
    contactDiv.setAttribute('class', 'contactDiv');

    return {
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
    mainContainer.appendChild(infoText);
    mainContainer.appendChild(menuDiv);
    mainContainer.appendChild(contactDiv);

    header.appendChild(h1);

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);



    allContent.appendChild(navBar);
    allContent.appendChild(header);
    allContent.appendChild(mainContainer);

})();