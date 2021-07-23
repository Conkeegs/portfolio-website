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
        setTimeout(function() {
            projectContainers[i].style.right = '1vw';
            projectContainers[i].style.bottom = '1vw';
            openProject(projectContainers[i]);
        }, 120);
    });
}

/**
 * This function simply takes in the project element the user clicked on and
 * passes it to the 'toggleElementsDisplay' function.
 *
 * @param {element} element The project that was clicked on.
 */
function openProject(element) {
    setTimeout(toggleElementsDisplay(element), 100);
}

/**
 * This function makes all of the elements, except the 'project' element the user clicked on,
 * fade away. After 500ms, the elements that faded away's 'display' styles are set to
 * 'none'.
 *
 * @param {element} element The project that was clicked on.
 */
function toggleElementsDisplay(element) {
    let top = document.getElementById('top');

    top.style.opacity = '0';
    for (let i = 0; i < projectContainers.length; i++) {
        if (!projectContainers[i].isEqualNode(element)) {
            projectContainers[i].parentNode.style.opacity = '0';
        }
    }

    setTimeout(function() {
        top.style.display = 'none';
        for (let i = 0; i < projectContainers.length; i++) {
            if (!projectContainers[i].isEqualNode(element)) {
                projectContainers[i].parentNode.style.display = 'none';
            }
        }
    }, 500);
}