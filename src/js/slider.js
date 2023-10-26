import {pets} from './pets'
import { addToolsClickHandler } from './clickHandler';


const ITEM_ACTIVE = document.querySelector('#item-active')
const CAROUSEL = document.querySelector("#carousel");
const ARROW_LEFT = document.querySelector(".friend__left");
const ARROW_RIGHT = document.querySelector(".friend__right");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
let currentArray = []
let nextArray = []
let count = 0
function getRandom(min, max){
 min = Math.ceil(min)
 max = Math.floor(max)
 return Math.floor(Math.random()*(max-min+1)+ min)
}
function setCount(){
if(window.screen.width>=950){
 return count=3

}else if(window.screen.width<951&&window.screen.width>=600){
  return count = 2
}else{
  return count = 1
}
}

function updateSlider(){
  if(window.screen.width==600){
    setSllider()
    addToolsClickHandler()

   }else if(window.screen.width==950){
    setSllider()
    addToolsClickHandler()

   }
}
/* Generate active items*/
function setSllider(){
  setCount()
  console.log(setCount())
 ITEM_ACTIVE.innerHTML = ''
 let slide = ''
 let arr = generateUniqueActiveArray(0, pets.length-1,count*2)
 currentArray = arr.slice(0,count)
 nextArray = arr.slice(count,count*2)
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

function generateNextSlider(){
  let slide = ''
  let arrSet = new Set()
  const template = generateUniqueActiveArray(0, pets.length-1,8)
  template.forEach(el=>{
    if(!currentArray.includes(el)&&arrSet.size != count){
      arrSet.add(el)
    }
  })
  console.log(arrSet)
  const arr = Array.from(arrSet)
  for (let i=0; i<arr.length; i++){
    
        slide += `
        <div class="friend-slider__block" data-friendId='${arr[i]}'>
                    <img src=${pets[arr[i]].img} alt="${pets[arr[i]].name}">
                    <h4 class="friend-h4">${pets[arr[i]].name}</h4>
                    <button class="button-pets">Learn more</button>
                  </div>
        `
      }
      return slide
    }
  
function generateUniqueActiveArray(min, max, len){
 const nums = new Set();
 while(nums.size != len) {
   nums.add(getRandom(min, max));
 }
 
 return Array.from(nums)
}

function changeCurrentArray(item){
  let children = Array.from(item.children)
  const result = children.map(el=>{
     return +el.dataset.friendid})
  return result
}

function animation(animationEvent){


 let changedItem = '';
 if (animationEvent.animationName === "move-left") {
   CAROUSEL.classList.remove("transition-left");
   ITEM_RIGHT.innerHTML = document.querySelector("#item-active").innerHTML
   document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
   //document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
   changedItem = ITEM_LEFT;
   
   addToolsClickHandler()

 } else {
   CAROUSEL.classList.remove("transition-right");
   changedItem = ITEM_RIGHT;
   ITEM_LEFT.innerHTML = document.querySelector("#item-active").innerHTML
   document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
   console.log(changeCurrentArray(ITEM_ACTIVE))
   addToolsClickHandler()

 }
 currentArray = changeCurrentArray(ITEM_ACTIVE)
 changedItem.innerHTML = "";
 changedItem.innerHTML += generateNextSlider()
 ARROW_LEFT.addEventListener("click",moveLeft );
 ARROW_RIGHT.addEventListener("click",moveRight  );
}




const moveLeft = () => {
 CAROUSEL.classList.add("transition-left");
 ARROW_LEFT.removeEventListener("click", moveLeft);
 ARROW_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
 CAROUSEL.classList.add("transition-right");
 ARROW_LEFT.removeEventListener("click",moveRight );
 ARROW_RIGHT.removeEventListener("click",moveLeft );
 
};
export {CAROUSEL, ARROW_LEFT, ARROW_RIGHT, moveLeft, moveRight, getRandom, setSllider, animation,ITEM_ACTIVE,generateUniqueActiveArray, updateSlider} 


