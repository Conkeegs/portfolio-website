/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for 'projects.html' project links.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/

/**
 * This function shows the original project listing page after the user exits out of an individual project page.
 *
 * @param {element} clickedProject The project that is to be animated back to the left (i.e. the poject that
 * was clicked on originally and animated to the right.)
 */
function showProjectList(clickedProject) {
    let top = document.getElementById('top');
    let projectsMiddle = document.getElementById('projects-middle');

    projectsMiddle.style.display = 'block';
    top.style.display = 'grid';

    top.style.opacity = '1';
    for (let i = 0; i < projectContainers.length; i++) {
        if (!projectContainers[i].isEqualNode(clickedProject)) {
            projectContainers[i].parentNode.style.opacity = '1';
        }
    }

    setTimeout(function() {
        clickedProject.parentNode.style.left = '0';
    }, 320);
}

/**
 * This function makes all of the elements on the project listing page, except the 'project' element the user clicked on,
 * fade away. After 500ms, the elements that faded away have their 'display' style set to
 * 'none'. It then calls the 'showProjectPage' function.
 *
 * @param {element} clickedProject The project that was clicked on (i.e. the project that animates to the right).
 */
function clearProjectList(clickedProject) {
    let top = document.getElementById('top');
    let projectsMiddle = document.getElementById('projects-middle');

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
        projectsMiddle.style.display = 'none';
        top.style.display = 'none';
        showProjectPage(clickedProject);
    }, 520);
}

/**
 * This function displays the individial project page elements and also gives the 'close' button
 * a listener for when it is clicked.
 *
 * @param {element} clickedProject The project that was clicked on. It is used here simply to pass it to the 'clearProjectPage'
 * function when the user closes out of this page.
 */
function showProjectPage(clickedProject) {
    let projectsPage = document.getElementById('projects-projectContainer');
    let projectsContainerTop = document.getElementById(
        'projects-projectContainer-top'
    );
    let projectsContainerMiddle = document.getElementById(
        'projects-projectContainer-middle'
    );
    let closeContainer = document.getElementById(
        'projects-projectContainer-top-closeContainer'
    );

    projectsPage.style.display = 'initial';
    projectsContainerTop.style.opacity = '1';
    projectsContainerMiddle.style.opacity = '1';
    closeContainer.style.transform = 'rotate(0)';
    closeContainer.style.left = '0';

    closeContainer.addEventListener('click', function() {
        rotateClose();
        clearProjectPage(clickedProject);
    });
}

/**
 * This function clears individual project pages. It displays the individual project page as 'none', and then calls the 'showProjectsList'
 * function.
 *
 * @param {element} clickedProject The project that was clicked on. It is used here to tell the 'showProjectList' function which
 * project element to animate.
 */
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
 * This function rotates the 'close' icon on individual project pages 90 degrees and then animates it to the left, when clicked.
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