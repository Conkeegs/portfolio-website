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
    let topLogoContainer = document.getElementById('top-logo-container');
    clickedProject.parentNode.style.transition = '150ms';

    top.style.opacity = '0';
    for (let i = 0; i < projectContainers.length; i++) {
        if (!projectContainers[i].isEqualNode(clickedProject)) {
            projectContainers[i].parentNode.style.opacity = '0';
        }
    }

    setTimeout(function() {
        clickedProject.parentNode.style.left = '100vw';
    }, 320);

    setTimeout(function() {
        for (let i = 0; i < projectContainers.length; i++) {
            if (!projectContainers[i].isEqualNode(clickedProject)) {
                projectContainers[i].parentNode.style.display = 'none';
            }
        }
        clickedProject.parentNode.style.display = 'none';
        topLogoContainer.style.display = 'none';
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

    top.style.opacity = '1.0';
}