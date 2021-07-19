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
            openProject();
        }, 120);
    });
}

function openProject() {
    setTimeout(toggleElementsDisplay, 100);
}

function toggleElementsDisplay() {
    let top = document.getElementById('top');

    top.style.opacity = '0';
    setTimeout(() => (top.style.display = 'none'), 500);
}