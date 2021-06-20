/*

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Scripts for 'skills.html'
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

*/
let skills = document.getElementsByClassName("skills-middle-container-background-skill");

for (let skill of skills) {

    rotateSkill(skill);

}

function rotateSkill(skill) {

    let spinnerPercentage = parseInt(skill.children[0].textContent.trim());
    let rotateDegree = 360 * parseFloat(`.${spinnerPercentage}`);
    console.log(rotateDegree);
    let spinnerLeft = skill.children[1];
    let spinnerRight = skill.children[2];
    let spinnerCover = skill.children[3];

     if (spinnerPercentage <= 50) {

        spinnerRight.style.display = "none";
        spinnerLeft.style.transform = `rotate(${rotateDegree}deg)`;

     }
     else {

        spinnerLeft.style.transform = "rotate(180deg)";
        spinnerCover.style.display = "none";
        spinnerRight.style.display = "block";
        spinnerRight.style.transform = `rotate(${rotateDegree - 180}deg)`;

     }

}