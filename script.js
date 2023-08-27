(function(){

const spanEl = document.querySelector("main h2 span");
const txtArr=['Front-End developer'];
let index=0;
let currentTxt=txtArr[index].split("");

function writeTxt(){
    spanEl.textContent += currentTxt.shift();
    if(currentTxt.length !== 0 ){
        setTimeout(writeTxt, Math.floor(Math.random()*100));
    }else{
        currentTxt=spanEl.textContent.split("");
        setTimeout(deleteTxt,3000);
    }
   
}
function deleteTxt(){
    currentTxt.pop;
    spanEl.textContent=currentTxt.join("");
    if(currentTxt.length !==0){
        setTimeout(deleteTxt, Math.floor(Math.random()*100));

    }else{
        index=(index+1)% txtArr.length;
        currentTxt=txtArr[index].split("");
        console.log(currentTxt);
        writeTxt();
    }
}
writeTxt();
})();

const animationMove=function(selector){
    const targetEl=document.querySelector(selector);
    const browserScrollY=window.pageYOffset;
    const targetScrollY=targetEl.getBoundingClientRect().top +browserScrollY;
    window.scrollTo({ top:targetScrollY,behavior:'smooth'});

};
//스크롤 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i=0; i<scollMoveEl.length; i++){
    scollMoveEl[i].addEventListener('click',function(e){
        const target=this.dataset.target;
        animationMove(target);
    });
}

const headerEl= document.querySelector("header");
window.addEventListener('scroll',function(){
    const browerScrollY=window.pageYOffset;
    if(browerScrollY>0){
        headerEl.classList.add("active");

    }else{
        headerEl.classList.remove("active");
    }
});