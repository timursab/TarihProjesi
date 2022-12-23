console.log(localStorage.getItem("lines"));


var allCs = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20];
var iii = 0;
var tarihLines = JSON.parse(localStorage.getItem("lines")); 
for(iii;iii < allCs.length;iii++){
    allCs[iii].dataset.customVariable ="bar";
    allCs[iii].bar = Math.floor(iii/2);
    eval(`c${iii+1}`).textContent = tarihLines[iii];
    //Randomize card placement
    //allCs[iii].style.order = Math.round(Math.random()*10);
}

var blueScore = 0;
var redScore = 0;
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

/*
c1.textContent = "İlk Kurulan Türk Beyliği";
c2.textContent = "Saltuklular";
c3.textContent = "İlk Hastanenin Kurulduğu beylik";
c4.textContent = "Mengücekliler";
c5.textContent = "Yağbasan Medresesinin Bulunduğu Beylik";
c6.textContent = "Danişmentliler";
c7.textContent = "El Cezerinin Bulunduğu Beylik";
c8.textContent = "Artuklular";
c9.textContent = "Donaınımı Güçlü olan bir Beylik";
c10.textContent ="Çaka Beyliği";
c11.textContent = "Türkiye Selçuklunun En Parlak Dönemi";
c12.textContent = "1. Alaaddin Keykubat Dönemi";
c13.textContent = "Anadolunun Kapılarını Açan Savaş";
c14.textContent = "Malazgrit Savaşı";
c15.textContent = "Türkiye selçuklunun Yıkılışını Başlatan Savaş";
c16.textContent = "Kösedağ Savaşı";
c17.textContent = "Türklerin Anadoludaki Yerini Sağlamlaştıran Savaş";
c18.textContent = "Miryekefelon Savaşı";
c19.textContent = "İlk Dini İsyandır";
c20.textContent = "Babailer İsyanı";
*/

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
            }, 2000);
            teamTurn = !teamTurn;
            setTimeout(changeTurnBackground,3000,teamTurn)
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
    allCs[i].style.background = "linear-gradient(33deg,#0d5394 25%,#1464b1 10%,#1464b1 50%,#0d5394 50%,#0d5394 75%,#1464b1 50%,#1464b1 100%)"
    blueScore++;
    checkGameEnd();
}
function setRed(i){
    allCs[i].style.background = "linear-gradient(33deg,#ff131c 25%,#d91118 10%,#d91118 50%,#ff131c 50%,#ff131c 75%,#d91118 50%,#d91118 100%)"
    redScore++;
    checkGameEnd();
}
function changeTurnBackground(turn){
    if(turn){
        document.body.style.backgroundColor = "#0e5ee4"
    }
    else{
        document.body.style.backgroundColor = "#f41733"
    }
    isInTransition = false;
}
function checkGameEnd(){   
    console.log(blueScore,redScore) 
    if (blueScore + redScore >= 20) {
        if (blueScore>redScore) {
            window.location.assign('results/blueWin.html');
        } 
        if(blueScore<redScore) {
            window.location.assign('results/redWin.html');
        }
        if (blueScore == redScore) {
            window.location.assign('results/drawWin.html');
        } 
    }
}