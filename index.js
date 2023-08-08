const dynamicText=document.querySelector("h3 span")
const Words=["Programmer","Web Developer"];
let wordindex=0;
let charIndex=0;
let isDeleting=false;

const typeEffect=()=>{
    const currentWord=Words[wordindex];
    const currentChar=currentWord.substring(0,charIndex);
   dynamicText.textContent=currentChar;
   dynamicText.classList.add("stop-blinking");

   if(!isDeleting && charIndex<currentWord.length){
    charIndex++;
    setTimeout(typeEffect,200);
   }
   else if(isDeleting && charIndex>0){
    charIndex--;
    setTimeout(typeEffect,100);
   }
   else{
    isDeleting=!isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordindex =!isDeleting?(wordindex+1)% Words.length:wordindex;
    setTimeout(typeEffect,300);
   }
}
typeEffect();
