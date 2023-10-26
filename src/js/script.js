import 'normalize.css';
import './../sass/main.scss'
import {CAROUSEL, ARROW_LEFT, ARROW_RIGHT, moveLeft, moveRight, getRandom, setSllider, animation, ITEM_ACTIVE, generateUniqueActiveArray, updateSlider} from './slider'
import { Modal } from './modal';
import { ContentOfModal } from './contentOfModal';
import { pets } from './pets';
import {pagination} from './pagination';
import { addToolsClickHandler } from './clickHandler';

/*Carousel*/ 
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");



if(ARROW_LEFT){
    ARROW_LEFT.addEventListener("click", moveLeft );
}
if(ARROW_RIGHT){
    ARROW_RIGHT.addEventListener("click", moveRight  )
}
if(CAROUSEL){
CAROUSEL.addEventListener("animationend", animation) 
}
if(ARROW_LEFT){
  window.addEventListener('resize', updateSlider)
}
if(document.querySelector('.pet-blocks')){
pagination()
}
/*----------------------*/
/*Burger*/
const menu = document.querySelector('.header__popup')

const burger = document.querySelectorAll('.menu-burger__header')[0]
burger.addEventListener('click', toggleBurger)
const menuBurger = document.querySelectorAll('.header-list__item-popup')

if (menuBurger.length > 0) {
    for (let i = 0; i < menuBurger.length; i++) {
      let currentLink = menuBurger[i];
      currentLink.addEventListener("click", toggleBurger);
    }
  }

function toggleBurger(){
    burger.classList.toggle('active__burger')
    menu.classList.toggle('open')
    document.querySelector('.popup__wrapper').classList.toggle('open__wrapper')
    if(document.body.style.position !== 'fixed'){
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    }else{
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        window.scrollTo({
          top: parseInt(scrollY || '0') * -1, 
          behavior: "instant"
        });
    }
}
document.querySelector('.popup__burger').addEventListener("click",toggleBurger)

menu.addEventListener('click', function(e){
    if(!e.target.closest('.popup__wrapper')){
        toggleBurger()
    }
  })


/*Modal*/

window.onload = function(){
   if(document.querySelector('.carousel')){ setSllider()}
    addToolsClickHandler()
}


