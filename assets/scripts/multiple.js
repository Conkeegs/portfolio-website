/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for hamburger menu.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/
let topBurger = document.getElementById('top-burger');
let sideDrawer = document.getElementById('drawer');
let cover = document.getElementById('cover');
let drawerOpened = false;

/**
 * This rotates the burger icon 90 degrees depending on if the drawer is opened or closed.
 */
function rotateBurger() {
    let topBurgerContainer = document.getElementById('top-burger-container');
    // topBurgerContainer.style.transition = '230ms';

    if (drawerOpened) {
        setTimeout(function() {
            topBurgerContainer.style.left = '55vw';
            topBurgerContainer.style.transform = 'rotate(90deg)';
            topBurgerContainer.style.transition = '215ms';
        }, 250);
    } else {
        setTimeout(function() {
            topBurgerContainer.style.left = null;
            topBurgerContainer.style.transform = 'rotate(0)';
            topBurgerContainer.style.transition = '150ms';
        }, 250);
    }
}

/**
 * Opens side drawer when burger icon is clicked.
 */
function openDrawer() {
    drawerOpened = true;
    window.scrollTo(0, 0);

    cover.style.display = 'block';
    setTimeout(function() {
        cover.style.opacity = '.5';
    }, 0);

    sideDrawer.style.display = 'block';
    setTimeout(function() {
        sideDrawer.style.right = '10vw';
        sideDrawer.style.opacity = '1';
        sideDrawer.style.transition = '215ms';
    }, 250);

    document.addEventListener('scroll', disableScroll);
}

/**
 * Closes side drawer when burger icon is clicked again.
 */
function closeDrawer() {
    drawerOpened = false;

    setTimeout(function() {
        cover.style.opacity = '0';
        setTimeout(function() {
            cover.style.display = 'none';
        }, 200);
    }, 10);

    setTimeout(function() {
        sideDrawer.style.right = '80vw';
        sideDrawer.style.opacity = '0';
        sideDrawer.style.transition = '150ms';
        setTimeout(function() {
            sideDrawer.style.display = 'none';
        }, 150);
    }, 250);

    document.removeEventListener('scroll', disableScroll);
}

/**
 * Disables scrolling when the drawer is open.
 */
function disableScroll() {
    window.scrollTo(0, 0);
}

/*
Main Code
*/

cover.addEventListener('click', function() {
    closeDrawer();
    rotateBurger();
});

topBurger.addEventListener('click', function() {
    if (drawerOpened) {
        closeDrawer();
    } else {
        openDrawer();
    }

    rotateBurger();
});