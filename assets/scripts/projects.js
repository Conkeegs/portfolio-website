/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for 'projects.html' project links.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/

let projectContainers = document.getElementsByClassName(
    'projects-middle-shadow-background'
);

for (let i = 0; i < projectContainers.length; i++) {
    projectContainers[i].addEventListener('click', function() {
        projectContainers[i].style.right = '0';
        projectContainers[i].style.bottom = '0';
        toggleElementsDisplay(projectContainers[i]);
        setTimeout(function() {
            projectContainers[i].style.right = '1vw';
            projectContainers[i].style.bottom = '1vw';
        }, 120);
    });
}

/**
 * This function makes all of the elements, except the 'project' element the user clicked on,
 * fade away. After 500ms, the elements that faded away's 'display' styles are set to
 * 'none'.
 *
 * @param {element} clickedProject The project that was clicked on.
 */
function toggleElementsDisplay(clickedProject) {
    let top = document.getElementById('top');
    let projectsMiddle = document.getElementById('projects-middle');
    clickedProject.parentNode.style.transition = '150ms'; // change 'projects-middle-shadow' transition from 500ms to 150ms so that it animates to the right quicker

    top.style.opacity = '0'; // top opacity is set to 0
    for (let i = 0; i < projectContainers.length; i++) {
        if (!projectContainers[i].isEqualNode(clickedProject)) {
            projectContainers[i].parentNode.style.opacity = '0'; // all other project opacities are set to 0
        }
    }

    setTimeout(function() {
        clickedProject.parentNode.style.left = '100vw'; // clicked project is animated to the right
    }, 320);

    setTimeout(function() {
        projectsMiddle.style.display = 'none'; // projects-middle element is removed
        top.style.display = 'none'; // top element is removed
    }, 520);

    setTimeout(function() {
        switchToProjectPage(clickedProject);
    }, 600);
}

function switchToProjectPage(clickedProject) {
    let top = document.getElementById('top');
    let topPageName = document.getElementById('top-page-name');
    let topBurger = document.getElementById('top-burger');

    topBurger.src = 'assets/images/close.svg';
    topPageName.innerHTML = clickedProject.getElementsByClassName(
        'projects-middle-shadow-background-container-textHolder-name'
    )[0].innerHTML;

    topBurger.onclick = () => (window.location = 'projects.html');

    top.style.opacity = '1.0';
}