//from dog it is random
var comp = Math.random();
var status = document.getElementsByClassName("status")
var catHp = document.getElementById("catHp")
var dogHp = document.getElementById("dogHp")
var count =0
//from dog it is computer
function compare(){
    var attack = Math.round(Math.random() * 10)
    if (attack >count) {
        // var die = Math.round(Math.random() * 10) + 10
        // dogHp = die
        // if (dogHp < 0) {
        //     dogHp = 0
        // }
        bottomRow.innerHTML = "You are winner"
    } else {
        bottomRow.innerHTML = "You are loser"
    }


    // for (var i = 0; i < status.length; i++) {
    //     status[i].innerHTML = ""
    //     status[i].style.background = '#F0FFFF'
    // }
    // console.log(event.target.innerHTML.length)

}
// from the cat
function Box() {
    count++
    alert("you are winner  congrates!!")
// var attack=Math.round(Math.random()*10)
// if(attack>8){
//     var die = Math.round(Math.random() * 10)+10
//     dogHp = die
//     if (dogHp<0){
//         dogHp=0
//     }
// }else{
//     bottomRow.innerHTML="You are loser"
// }
    // for (var i = 0; i < status.length; i++) {
    //     status[i].innerHTML = ""
    //     status[i].style.background = '#F0FFFF'
    // }
    // console.log(event.target.innerHTML.length)
}
function Start(){
    alert("Welcome in the Fighting Game")

}
var results = compare();

// Display results
document.write("<br><br>" + results);







