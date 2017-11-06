let monster = document.querySelector(".monster");
let monsterWrapper = document.querySelector(".monsterDiv")
let girl = document.querySelector(".girl");
let girlFront = document.querySelector(".girlStanding");
let girlCrying = document.querySelector(".girlCrying");
let girlWalkBack = document.querySelector(".girlwalkingback");
let girlWrapper = document.querySelector(".girlDiv");
let riceman = document.querySelector(".riceman");
let ricemanFront = document.querySelector(".ricemanFront");
let selectMe = document.querySelector(".pressSomething");
let crosses = document.querySelector(".crosses");
let ricemanWrapper = document.querySelector(".ricemanDiv");
let cryingSound = document.querySelector(".crying");
window.addEventListener('load', manEnters);

function manEnters(){
    riceman.classList.add("walkfromleft");
    riceman.addEventListener('transitionend', manStops);
}
function manStops(){
    console.log("function: manStops");
    riceman.classList.add("dontDisplay");
    ricemanFront.classList.add("display");
    selectMe.classList.add("display");
    selectMe.addEventListener('click', manLeaves);
}
function manLeaves(){
    console.log("function: manLeaves");
    riceman.classList.remove("dontDisplay");
    ricemanFront.classList.remove("display");
    selectMe.classList.remove("display");
    riceman.classList.remove("walkfromleft");
    ricemanWrapper.classList.add("walkRight");
    ricemanWrapper.addEventListener('animationend', girlEnters);
}

function girlEnters(){
    console.log("function: girlEnters");
    riceman.classList.add("dontDisplay");
    ricemanWrapper.classList.add("dontDisplay");
    girl.classList.add("walkfromleft");
    girl.addEventListener('transitionend', girlStops)
}

function girlStops(){
     console.log("function: girlStops");
     girl.classList.remove("walkfromleft");
     girl.classList.add("dontDisplay");
     girlFront.classList.add("display");
     crosses.classList.add("display");
     setTimeout(girlCries, 2000);
}
function girlCries(){
    console.log("function: girlCries");
    girlFront.classList.remove("display");
    girlCrying.classList.add("display");
    cryingSound.play();
    setTimeout(girlLeaves, 3500);
}
function girlLeaves(){
    console.log("function: girlLeaves");
    cryingSound.pause();
    crosses.classList.remove("display");
    girlCrying.classList.remove("display");
    girlWalkBack.classList.add("display");
    girlWrapper.classList.add("walkOutLeft");
    girlWrapper.addEventListener('animationend', girlMonsterEnters)
}
function girlMonsterEnters(){
    console.log("function: girlMonsterEnters");
    girlWrapper.classList.remove("walkOutLeft");
    girlWalkBack.classList.remove("display");
    girlWrapper.classList.add("display");
    girlFront.classList.add("display");
    monster.classList.add("display");
    selectMe.classList.add("display");
    let backGround = document.querySelector("#mainScene");
    backGround.classList.add("sweatChef");
    backGround.removeAttribute("ID");
    selectMe.addEventListener('click', function(event){
        event.preventDefault();
        window.location = "credits.html";
    });
}

