function createNavbar(targetId) {

    const navEl = document.createElement("nav");

    const navWrapper = document.createElement("nav");
    navWrapper.className = "navbar";
    
    const homepng = document.createElement("a");
    homepng.href = "home.html";
    const homeImg = document.createElement("img");
    homeImg.src = "images/home.png";
    homeImg.alt = "Home";
    homeImg.style.width = "15px";
    homeImg.style.cursor = "pointer";
    homepng.appendChild(homeImg);

    const SGNavItem = document.createElement("a");
    SGNavItem.href = "AboutSG.html";
    const SGNavItemText = document.createTextNode("About Singapore");
    SGNavItem.appendChild(SGNavItemText);

    const homeNavItem = document.createElement("a");
    homeNavItem.href = "destinations.html";
    const homeNavItemText = document.createTextNode("Destinations");
    homeNavItem.appendChild(homeNavItemText);

    const tourNavItem = document.createElement("a");
    tourNavItem.href = "TourGuides.html";
    const tourNavItemText = document.createTextNode("Tour Guides");
    tourNavItem.appendChild(tourNavItemText);

    const aboutNavItem = document.createElement("a");
    aboutNavItem.href = "aboutus.html";
    const aboutNavItemText = document.createTextNode("About us");
    aboutNavItem.appendChild(aboutNavItemText);



    navWrapper.appendChild(SGNavItem);
    navWrapper.appendChild(homeNavItem);
    navWrapper.appendChild(homepng);
    navWrapper.appendChild(tourNavItem);
    navWrapper.appendChild(aboutNavItem);

    navEl.appendChild(navWrapper);

    document.querySelector(targetId).appendChild(navEl);
}

createNavbar("#nav-container");
