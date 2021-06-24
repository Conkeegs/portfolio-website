/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for 'skills.html'
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/
let skills = document.getElementsByClassName("skills-middle-container-background-skill");

for (let skill of skills) {

    rotateSkill(skill);

}

/**
 * Rotates the pie chart divs based on the skill percent value inside of the 'skill' parameter.
 * 
 * @param {element} skill An element with class attribute 'skills-middle-container-background-skill'.
 */
function rotateSkill(skill) {

    const rotateMultiplier = 3.6;
    let spinnerPercentage = parseInt(skill.children[0].textContent.trim());
    let rotateDegree = rotateMultiplier * spinnerPercentage;

    let spinnerLeft = skill.children[1];
    let spinnerRight = skill.children[2];
    let spinnerCover = skill.children[3];

    if (spinnerPercentage <= 50) {

        spinnerLeft.style.transitionTimingFunction = "ease-in-out";

        spinnerRight.style.display = "none";
        spinnerLeft.style.transition = "500ms";
        setTimeout(() => spinnerLeft.style.transform = `rotate(${rotateDegree}deg)`, 10);

    } else {

        spinnerRight.style.opacity = "0.0";
        spinnerRight.style.transitionProperty = "opacity, transform";
        spinnerRight.style.transitionDuration = "0s, 250ms";
        spinnerLeft.style.transition = "250ms";

        spinnerLeft.style.transitionTimingFunction = "ease-in";

        setTimeout(function() {

            spinnerLeft.style.transform = "rotate(180deg)";
            setTimeout(function() {

                spinnerRight.style.opacity = "1.0";
                spinnerRight.style.transform = `rotate(${rotateDegree - 180}deg)`;

            }, 250);


        }, 10);

    }

}