/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for hamburger menu.
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

        setTimeout(function() {

            topBurgerContainer.style.left = "55vw";
            topBurgerContainer.style.transform = "rotate(90deg)";
            topBurgerContainer.style.transition = "215ms";

        },250);

    }
    else {

        setTimeout(function() {

            topBurgerContainer.style.left = null;
            topBurgerContainer.style.transform = "rotate(0)";
            topBurgerContainer.style.transition = "150ms";

        },250);

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

    }, 0);

    sideDrawer.style.display = "block";
    setTimeout(function() {

        sideDrawer.style.right = "10vw";
        sideDrawer.style.opacity = "1";
        sideDrawer.style.transition = "215ms";

    }, 250);

}

/**
 * Closes side drawer when burger icon is clicked again.
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
        sideDrawer.style.transition = "150ms";

    }, 250);
    sideDrawer.style.display = "block";

}

/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for skills percentages.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/
let skills = document.getElementsByClassName("skills-middle-container-background-skill");

for (let skill of skills) {

    rotateSkill(skill);

}

function rotateSkill(skill) {

    let spinnerLeft = skill.children[0];
    let spinnerRight = skill.children[1];

     if (parseInt(skill.textContent.trim()) <= 50) {

        spinnerRight.style.transform = "rotate(30deg)";

     }
     else {

        console.log(skill.textContent.trim());

        spinnerLeft.style.transform = "rotate(30deg)";

     }

}