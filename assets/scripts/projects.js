/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for 'projects.html' project links.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/

function showProjectList(clickedProject) {
    let top = document.getElementById('top');
    let projectsMiddle = document.getElementById('projects-middle');
    let drawer = document.getElementById('drawer');
    let cover = document.getElementById('cover');

    projectsMiddle.style.display = 'initial';
    top.style.display = 'grid';
    drawer.style.display = 'initial';
    cover.style.display = 'initial';

    top.style.opacity = '1';
    for (let i = 0; i < projectContainers.length; i++) {
        if (!projectContainers[i].isEqualNode(clickedProject)) {
            projectContainers[i].parentNode.style.opacity = '1';
        }
    }

    setTimeout(function() {
        clickedProject.parentNode.style.left = '0'; // clicked project is animated to the right
    }, 320);
}

/**
 * This function makes all of the elements, except the 'project' element the user clicked on,
 * fade away. After 500ms, the elements that faded away's 'display' styles are set to
 * 'none'.
 *
 * @param {element} clickedProject The project that was clicked on.
 */
function clearProjectList(clickedProject) {
    let top = document.getElementById('top');
    let projectsMiddle = document.getElementById('projects-middle');
    let drawer = document.getElementById('drawer');
    let cover = document.getElementById('cover');

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
        drawer.style.display = 'none'; // drawer is removed
        cover.style.display = 'none'; // cover is removed
        showProjectPage(clickedProject);
    }, 520);
}

/**
 * This function displays the individial project page elements and also gives the 'close' button
 * a listener for when it is clicked.
 */
function showProjectPage(clickedProject) {
    let projectsPage = document.getElementById('projects-projectContainer');
    let closeContainer = document.getElementById(
        'projects-projectContainer-top-closeContainer'
    );

    projectsPage.style.display = 'initial';

    closeContainer.addEventListener('click', function() {
        rotateClose();
        clearProjectPage(clickedProject, projectsPage);
    });
}

function clearProjectPage(clickedProject) {
    let projectsContainer = document.getElementById('projects-projectContainer');
    let projectsContainerTop = document.getElementById(
        'projects-projectContainer-top'
    );
    let projectsContainerMiddle = document.getElementById(
        'projects-projectContainer-middle'
    );

    projectsContainerTop.style.opacity = '0.0';
    projectsContainerMiddle.style.opacity = '0.0';

    setTimeout(function() {
        projectsContainer.style.display = 'none';
        showProjectList(clickedProject);
    }, 520);
}

/**
 * This function rotates the close icon 90 degrees and animates it to the left when clicked.
 */
function rotateClose() {
    let closeContainer = document.getElementById(
        'projects-projectContainer-top-closeContainer'
    );

    setTimeout(function() {
        closeContainer.style.transform = 'rotate(-90deg)';
        closeContainer.style.left = '-30vw';
    }, 250);
}

/* All code down here sets up click listeners on each project so that they may load their own
individual project pages.  */
let projectContainers = document.getElementsByClassName(
    'projects-middle-shadow-background'
);

for (let i = 0; i < projectContainers.length; i++) {
    projectContainers[i].addEventListener('click', function() {
        projectContainers[i].style.right = '0';
        projectContainers[i].style.bottom = '0';
        clearProjectList(projectContainers[i]);
        setTimeout(function() {
            projectContainers[i].style.right = '1vw';
            projectContainers[i].style.bottom = '1vw';
        }, 120);
    });
}