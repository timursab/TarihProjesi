var allCs = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20];
//Randomize Flex Order
var iii = 0;
for(iii;iii < allCs.length;iii++){
    allCs[iii].dataset.customVariable ="bar";
    allCs[iii].bar = Math.floor(iii/2);
    allCs[iii].style.order = Math.round(Math.random()*10)

}

var selectingSecond = false;
var prevSelected;
var isInTransition = false;

var teamTurn = false;

q1Solved = false;
q2Solved = false;
q3Solved = false;
q4Solved = false;
q5Solved = false;
q6Solved = false;
q7Solved = false;
q8Solved = false;
q9Solved = false;
q10Solved = false;


c1.textContent = "question1";
c2.textContent = "answer1";
c3.textContent = "question2";
c4.textContent = "answer2";
c5.textContent = "question3";
c6.textContent = "answer3";
c7.textContent = "question4";
c8.textContent = "answer4";
c9.textContent = "question5";
c10.textContent ="answer5";
c11.textContent = "question6";
c12.textContent = "answer6";
c13.textContent = "question7";
c14.textContent = "answer7";
c15.textContent = "question8";
c16.textContent = "answer8";
c17.textContent = "question9";
c18.textContent = "answer9";
c19.textContent = "question10";
c20.textContent ="answer10";


addEventListener("click", (event) =>{
    if(event.target.className == "cards"){
        mainLogic(event.target);
    }
})


function mainLogic(c){
    if(c==prevSelected){return;}
    if((c == allCs[0]||c == allCs[1]) && q1Solved){return;}
    if((c == allCs[2]||c == allCs[3]) && q2Solved){return;}
    if((c == allCs[4]||c == allCs[5]) && q3Solved){return;}
    if((c == allCs[6]||c == allCs[7]) && q4Solved){return;}
    if((c == allCs[8]||c == allCs[9]) && q5Solved){return;}
    if((c == allCs[10]||c == allCs[11]) && q6Solved){return;}
    if((c == allCs[12]||c == allCs[13]) && q7Solved){return;}
    if((c == allCs[14]||c == allCs[15]) && q8Solved){return;}
    if((c == allCs[16]||c == allCs[17]) && q9Solved){return;}
    if((c == allCs[18]||c == allCs[19]) && q10Solved){return;}


    if(isInTransition){return;}

    if(selectingSecond){
        if(c.bar == prevSelected.bar){
            selectingSecond = false;
            if(c==allCs[0]||c==allCs[1]){q1Solved = true;}
            if(c==allCs[2]||c==allCs[3]){q2Solved = true;}
            if(c==allCs[4]||c==allCs[5]){q3Solved = true;}
            if(c==allCs[6]||c==allCs[7]){q4Solved = true;}
            if(c==allCs[8]||c==allCs[9]){q5Solved = true;}
            if(c==allCs[10]||c==allCs[11]){q6Solved = true;}
            if(c==allCs[12]||c==allCs[13]){q7Solved = true;}
            if(c==allCs[14]||c==allCs[15]){q8Solved = true;}
            if(c==allCs[16]||c==allCs[17]){q9Solved = true;}
            if(c==allCs[18]||c==allCs[19]){q10Solved = true;}

            let i = 0;
            while(i<allCs.length){
                if(allCs[i].bar == c.bar){
                    allCs[i].style.transform = "perspective(32cm)rotateY(0deg)"
                    setTimeout(showTextArray,502,i)
                    setTimeout(teamTurn?setBlue:setRed,1000,i)
                }
                i++;
            }
            return;
        }
        else{
            selectingSecond = false;
            isInTransition = true;
            c.style.transform = "perspective(32cm)rotateY(0deg)"
            setTimeout(showTextC,502,c)
            setTimeout(() => {
                prevSelected.style.transform = "perspective(32cm)rotateY(-180deg)";
                c.style.transform = "perspective(32cm)rotateY(-180deg)";
                setTimeout(hideTextC,502,c)
                setTimeout(hideTextC,502,prevSelected)
                prevSelected = undefined;
            }, 1000);
            teamTurn = !teamTurn;
            setTimeout(changeTurnBackground,2000,teamTurn)
            return;
        }
    }
    else{
        selectingSecond = true;
        c.style.transform = "perspective(32cm)rotateY(0deg)"
        setTimeout(showTextC,502,c)
        prevSelected = c;
    }
}

function showTextArray(i){
    allCs[i].style.color = "black"
}
function showTextC(ci){
    ci.style.color = "black"
}
function hideTextC(ci){
    ci.style.color = "transparent"
}
function setBlue(i){
    allCs[i].style.background = "linear-gradient(33deg,#00E7FF 25%,#00FFF6 10%,#00FFF6 50%,#00E7FF 50%,#00E7FF 75%,#00FFF6 50%,#00FFF6 100%)"
}
function setRed(i){
    allCs[i].style.background = "linear-gradient(33deg,#ff131c 25%,#d91118 10%,#d91118 50%,#ff131c 50%,#ff131c 75%,#d91118 50%,#d91118 100%)"
}
function changeTurnBackground(turn){
    if(turn){
        document.body.style.backgroundColor = "blue"
    }
    else{
        document.body.style.backgroundColor = "red"
        
    }
    isInTransition = false;
}