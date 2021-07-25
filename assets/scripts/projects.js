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
 * @param {element} element The project that was clicked on.
 */
function toggleElementsDisplay(element) {
    let top = document.getElementById('top');
    element.parentNode.style.transition = '150ms';

    top.style.opacity = '0';
    for (let i = 0; i < projectContainers.length; i++) {
        if (!projectContainers[i].isEqualNode(element)) {
            projectContainers[i].parentNode.style.opacity = '0';
        }
    }

    setTimeout(function() {
        element.parentNode.style.left = '100vw';
    }, 320);

    setTimeout(function() {
        top.style.display = 'none';
        for (let i = 0; i < projectContainers.length; i++) {
            if (!projectContainers[i].isEqualNode(element)) {
                projectContainers[i].parentNode.style.display = 'none';
            }
        }
    }, 520);
}