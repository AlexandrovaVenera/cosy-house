import {pets} from './pets'
import { addToolsClickHandler } from './clickHandler';


const ITEM_ACTIVE = document.querySelector('#item-active')
const CAROUSEL = document.querySelector("#carousel");
const ARROW_LEFT = document.querySelector(".friend__left");
const ARROW_RIGHT = document.querySelector(".friend__right");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");

function getRandom(min, max){
 min = Math.ceil(min)
 max = Math.floor(max)
 return Math.floor(Math.random()*(max-min+1)+ min)
}
/* Generate active items*/
function setSllider(){
 ITEM_ACTIVE.innerHTML = ''
 let slide = ''
 let arr = generateUniqueActiveArray(0, pets.length-1,6)
 let currentArray = arr.slice(0,3)
 let nextArray = arr.slice(3,6)
 for (let i=0; i<currentArray.length; i++){
  
   slide += `
   <div class="friend-slider__block" data-friendId='${currentArray[i]}'>
               <img src=${pets[currentArray[i]].img} alt="${pets[currentArray[i]].name}">
               <h4 class="friend-h4">${pets[currentArray[i]].name}</h4>
               <button class="button-pets">Learn more</button>
             </div>
   `
 }
 ITEM_ACTIVE.innerHTML = slide
 slide = ''
 for (let i=0; i<nextArray.length; i++){
  
   slide += `
   <div class="friend-slider__block" data-friendId='${nextArray[i]}'>
               <img src=${pets[nextArray[i]].img} alt="${pets[nextArray[i]].name}">
               <h4 class="friend-h4">${pets[nextArray[i]].name}</h4>
               <button class="button-pets">Learn more</button>
             </div>
   `
 }
 ITEM_LEFT.innerHTML = slide
 ITEM_RIGHT.innerHTML = slide
     slide = ''
}
 
  
function generateUniqueActiveArray(min, max, len){
 const nums = new Set();
 while(nums.size != len) {
   nums.add(getRandom(min, max));
 }
 
 return Array.from(nums)
}


function generateUniquePrevArray(min, max){
 const numsPrev = new Set();
 while(numsPrev.size !== 3) {
   let n = getRandom(min, max)
   if(!currentArray.includes(n)){
     numsPrev.add(n);
   }
 }
 return Array.from(numsPrev)
}



function countOfSlides(){
 countSlider = Math.floor(document.querySelector('.friends-slider').offsetWidth / document.querySelector('.friend-slider__block').offsetWidth)
 return countSlider

}









/* ---------- NEW----------*/

function animation(animationEvent){
 let changedItem;
 if (animationEvent.animationName === "move-left") {
   CAROUSEL.classList.remove("transition-left");
   changedItem = ITEM_LEFT;
   document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
   addToolsClickHandler()

 } else {
   CAROUSEL.classList.remove("transition-right");
   changedItem = ITEM_RIGHT;
   document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
   addToolsClickHandler()

 }
 

 ARROW_LEFT.addEventListener("click", moveLeft);
 ARROW_RIGHT.addEventListener("click", moveRight);
}




const moveLeft = () => {
 CAROUSEL.classList.add("transition-left");
 ARROW_LEFT.removeEventListener("click", moveLeft);
 ARROW_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
 CAROUSEL.classList.add("transition-right");
 ARROW_LEFT.removeEventListener("click", moveLeft);
 ARROW_RIGHT.removeEventListener("click", moveRight);
 
};
export {CAROUSEL, ARROW_LEFT, ARROW_RIGHT, moveLeft, moveRight, getRandom, setSllider, animation,ITEM_ACTIVE,generateUniqueActiveArray} 



// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function(){
//     offset = offset + 256;
//     if (offset > 768) {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.slider-prev').addEventListener('click', function () {
//     offset = offset - 256;
//     if (offset < 0) {
//         offset = 768;
//     }
//     sliderLine.style.left = -offset + 'px';
// });