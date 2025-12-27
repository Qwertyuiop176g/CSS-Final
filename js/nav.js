function createNavbar(targetId) {

    const navEl = document.createElement("nav");

    
    const homepng = document.createElement("a");
    homepng.href = "home.html";
    const homeImg = document.createElement("img");
    homeImg.src = "images/home.png";
    homeImg.alt = "Home";
    homeImg.style.width = "15px";
    homeImg.style.cursor = "pointer";
    homepng.appendChild(homeImg);


    const homeNavItem = document.createElement("a");
    homeNavItem.href = "destinations.html";
    const homeNavItemText = document.createTextNode("Destination");
    homeNavItem.appendChild(homeNavItemText);


    const aboutNavItem = document.createElement("a");
    aboutNavItem.href = "aboutus.html";
    const aboutNavItemText = document.createTextNode("About us");
    aboutNavItem.appendChild(aboutNavItemText);


    navEl.appendChild(homepng);
    navEl.appendChild(homeNavItem);
    navEl.appendChild(aboutNavItem);
    
    document.querySelector(targetId).appendChild(navEl);
}

createNavbar("#nav-container");