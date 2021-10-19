let userPosition;

window.onload = function() {
    userPosition=Math.round(window.pageYOffset / window.innerHeight);
    let dotNum=parseInt(userPosition)+1;
    let dotClass=".ne"+dotNum;
    document.querySelector(dotClass).style.transform="scale(1.5)";
    changeBackgruond();
};
    
function scrollPage(){
    window.scrollTo({ 
        top: userPosition*window.innerHeight, 
        behavior:"smooth"
    });
    changeBackgruond();
}

function scrollBtn(num){
    if(num!=userPosition){
        let step = userPosition-parseInt(num);
        userPosition=num;
        scrollPage();
        changeDotSize(parseInt(userPosition)+1, parseInt(step));
    }
}

function changeBackgruond(){
    if(userPosition%2==0) document.body.style.backgroundColor="rgb(193, 201, 196)";
    else document.body.style.backgroundColor="white";
}

window.addEventListener("wheel", circleScorll);
window.addEventListener("resize",scrollPage);

function circleScorll(e){
    if(e.deltaY>0 && userPosition<2){
        userPosition++;
        changeDotSize(userPosition+1, -1);
        pauseF();
        scrollPage();
    }
    else if(e.deltaY<0 && userPosition>0){
        userPosition--;
        changeDotSize(userPosition+1, 1);
        pauseF();
        scrollPage();
    }
}

function pauseF(){
    window.removeEventListener("wheel", circleScorll);
    setTimeout(function(){
        window.addEventListener("wheel", circleScorll);
    }, 500);
}

function changeDotSize(dotNumber, num){
    let dotClass = ".ne"+dotNumber; 
    let prevDotNumber = parseInt(dotNumber)+parseInt(num)
    let prevDotClass = ".ne"+prevDotNumber; 
    document.querySelector(dotClass).style.transform="scale(2.5)";
    document.querySelector(prevDotClass).style.transform="scale(1)";
}

//................PRZEWIJANIE STRON CYFRAMI NA KLAWIATURZE................

// window.addEventListener('keydown', (e) => {
//     window.removeEventListener("scroll",myFunction);
//     setTimeout(function(){
//         if(e.code.includes('Digit')){
//             userPosition=parseInt(e.code.substr(5))-1;
//             scrollPage(userPosition);
//         }
//         setTimeout(function(){
//             window.addEventListener("scroll", myFunction);
//         }, 1000);
//     }, 200);
// });

// let a=0;
// window.addEventListener("scroll", myFunction);