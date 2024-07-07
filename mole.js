let currMoletile;
let currPlanttile=[];
let score=0;
let gameOver= false;

window.onload= function(){
    setGame();

}
function setGame(){
    for(let i=0; i<9; i++){
        let tile= document.createElement("div");
        tile.id= i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); //2000m miliseconds i.e. 2 secs
    setInterval(setPlant, 1600);
    
}
function getRandomTile(){
    let num= Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }

    if(currMoletile){
        currMoletile.innerHTML= ""; //will clear all the tags within this div tag
    }


    let mole= document.createElement("img");
    mole.src= "./monty-mole.png";

    let num= getRandomTile();
    // if(currPlanttile && currPlanttile.id==num){
    //   return;  
    // }
    if(currPlanttile.some(tile => tile.id==num)){
        return;
    }
    currMoletile= document.getElementById(num);
    currMoletile.appendChild(mole);

}
function setPlant(){
    if (gameOver){
        return;
    }

//    if (currPlanttile) {
//     currPlanttile.innerHTML="";
//    }
    currPlanttile.forEach(tile => tile.innerHTML="");
    currPlanttile=[];
    for(let i=0; i<2; i++){
        let plant= document.createElement("img");
        plant.src= "./piranha-plant.png"
//for single plant
//    let num= getRandomTile();
//    if(currMoletile && currMoletile.id==num){
//     return;
//    }
//    currPlanttile= document.getElementById(num);
        let num;
        do{
            num= getRandomTile();
        }   
        while(currMoletile && currMoletile.id== num || currPlanttile.some(tile => tile.id ==num));
        let plantTile= document.getElementById(num);
        plantTile.appendChild(plant);
        currPlanttile.push(plantTile);
    }
}

function selectTile(){
    if(gameOver){
        return;
    }
    if (this == currMoletile){
       score+=10;
       document.getElementById("score").innerText= score.toString();
    }
    else if(currPlanttile.includes(this)){
        document.getElementById("score").innerText= "GAME OVER: " + score.toString();
        gameOver= true;
    }
}