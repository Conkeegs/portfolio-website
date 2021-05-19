/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts common to multiple pages
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/
let topBurger = document.getElementById("top-burger");

topBurger.addEventListener("click", openDrawer);

/**
 * Opens side drawer when burger icon is clicked.
 */
function openDrawer() {

    let sideDrawer = document.getElementById("drawer");
    let cover = document.getElementById("cover");

    cover.style.display = "block";
    setTimeout(function() {

        cover.style.opacity = ".5";
        cover.style.transition = "200ms";

    }, 10);

    sideDrawer.style.display = "block";
    setTimeout(function() {

        sideDrawer.style.right = "10vw";
        sideDrawer.style.opacity = "1";
        sideDrawer.style.transition = "300ms";

    }, 250);

}