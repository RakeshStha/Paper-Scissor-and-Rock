
function qak(yourChoice) {
    "use strict";
    console.log(yourChoice.src);//Returns image that we just clicked
    var HumanChoice, BotChoice;
    HumanChoice = yourChoice.id;//Returns id of our choice
    console.log(HumanChoice);
    BotChoice = NumtoChoice(RandForBot());
    console.log(BotChoice);
    var results = samba(HumanChoice, BotChoice);
    console.log(results);
    var endmesg = finalmessage(results);
    console.log(endmesg);
    sprFrontend(HumanChoice, BotChoice, endmesg);
    console.log(endmesg);
    autoreload();
}
//for bot selection
function RandForBot() {
    return Math.floor(Math.random() * 3);
}
function NumtoChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}
/*Bot choice */
//Compare human and bot choice which can actually be done by if/else
/*eg if(HumanChoice === rock && BotChoice === scissor){
    return("Rock won")
} but this is actually very tedious because we have to put 8 if else condition It is not incorect though */
//another method using json
function samba(a, b) {
    var aDatabasee = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }
    };
    var YourScore = aDatabasee[a][b];
    var CompScore = aDatabasee[b][a];
    return [YourScore, CompScore];
    finalmessage(YourScore, CompScore);
}

function finalmessage([YourScore, CompScore]) {
    if (YourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    } else if (YourScore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'You won!!', 'color': 'green' };
    }
}

function sprFrontend(humanImage, botImage, finalmessage) {
    var imagesource = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    humanDiv = document.createElement('div');
    botDiv = document.createElement('div');
    mesgDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesource[humanImage] + "' width=200px style = 'box-shadow: 0px 10px 50px	rgb(0,128,0);'>"
    document.getElementById('dan').append(humanDiv);

    mesgDiv.innerHTML = "<h1 style = 'color:" + finalmessage['color'] + "; font-size:60px; padding:30px;'>" + finalmessage['message'] + "</h1>"
    document.getElementById('dan').append(mesgDiv);

    botDiv.innerHTML = "<img src = '" + imagesource[botImage] + "' width = 200px style = 'box-shadow: 0px 10px 50px rgb(255,0,0);'>"
    document.getElementById('dan').append(botDiv);
}
function autoreload() {
    setTimeout(function () {
        location.reload();
    }, 2000);
}