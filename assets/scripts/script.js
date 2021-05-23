/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts common to multiple pages
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/
let topBurger = document.getElementById("top-burger");
let sideDrawer = document.getElementById("drawer");
let cover = document.getElementById("cover");
let drawerOpened = false;

topBurger.addEventListener("click", function () {

    if (drawerOpened) {

        closeDrawer();

    }
    else {

        openDrawer();

    }

    rotateBurger();

});

/**
 * This rotates the burger icon 90 degrees depending on if the drawer is opened or closed.
 */
function rotateBurger() {

    let topBurgerContainer = document.getElementById("top-burger-container");
    topBurgerContainer.style.transition = "230ms";

    if (drawerOpened) {

        topBurgerContainer.style.left = "60vw";

    }
    else {

        topBurgerContainer.style.left = null;

    }
    
}

/**
 * Opens side drawer when burger icon is clicked.
 */
function openDrawer() {

    drawerOpened = true;

    cover.style.display = "block";
    setTimeout(function() {

        cover.style.opacity = ".5";
        cover.style.transition = "200ms";

    }, 10);

    sideDrawer.style.display = "block";
    setTimeout(function() {

        sideDrawer.style.right = "10vw";
        sideDrawer.style.opacity = "1";
        sideDrawer.style.transition = "230ms";

    }, 250);

}

/**
 * Closed side drawer when burger icon is clicked again.
 */
 function closeDrawer() {

    drawerOpened = false;

    setTimeout(function() {

        cover.style.opacity = "0";
        cover.style.transition = "200ms";

    }, 10);
    cover.style.display = "block";

    setTimeout(function() {

        sideDrawer.style.right = "80vw";
        sideDrawer.style.opacity = "0";
        sideDrawer.style.transition = "230ms";

    }, 250);
    sideDrawer.style.display = "block";

}