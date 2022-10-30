const myText=document.querySelector(".replace-text");
const myInput=document.querySelector("input");
const myBtn=document.querySelector("button");
myBtn.onclick=function(){
    myText.innerHTML=myInput.value;
}