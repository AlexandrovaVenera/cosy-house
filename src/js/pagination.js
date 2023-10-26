import { pets } from "./pets";
import {CAROUSEL, ARROW_LEFT, ARROW_RIGHT, getRandom, setSllider, animation, itemActive,generateUniqueActiveArray} from './slider'
import { addToolsClickHandler } from './clickHandler';
function createArray(){
  let arr = []
  for(let i=0; i<6; i++){
    let arrSource = generateUniqueActiveArray(0,7,8)
    arr.push(arrSource)
  }
  return arr.flat(1)
}


function countOnPage(){
  const  petWidth = document.querySelector('.pet-blocks').offsetWidth 
  const  petHeight = document.querySelector('.pet-blocks').offsetHeight

 let count = Math.floor(petWidth*petHeight / (280*435))

 return count
}
function pagination(){

  let arr = createArray()
  const data = arr
  let currentPage = 1
  let row = 8;
  let pagesCount 

  function displayList(arrData, rowPerPage, page){
  let postsEl = document.querySelector('.pet-blocks')
  postsEl.innerHTML = ''
  page--
  const start = rowPerPage*page;
  const end = start + 8;
  const paginatedData = arrData.slice(start, end)
  pagesCount = Math.ceil(arrData.length / rowPerPage)
  const btnNext = document.querySelectorAll('.circle-next')
  const btnPrev = document.querySelectorAll('.circle-prev')
  if(page == pagesCount-1){
    btnNext.forEach(el=>{
      el.style.pointerEvents = 'none'
      el.style.color='#CDCDCD'
      el.style.borderColor = '#CDCDCD'
    })
    btnPrev.forEach(el=>{
      el.style.pointerEvents = 'auto'
      el.style.color='#292929'
      el.style.borderColor = '#F1CDB3'
    })
   }
    else if(page == 0){
    btnPrev.forEach(el=>{
      el.style.pointerEvents = 'none'
      el.style.color='#CDCDCD'
      el.style.borderColor = '#CDCDCD'
    })
    btnNext.forEach(el=>{
      el.style.pointerEvents = 'auto'
      el.style.color='#292929'
      el.style.borderColor = '#F1CDB3'
    })
  }
  else if(page>0 && page < pagesCount-1){
 
    btnPrev.forEach(el=>{
      el.style.pointerEvents = 'auto'
      el.style.color='#292929'
      el.style.borderColor = '#F1CDB3'
    })
    btnNext.forEach(el=>{
      el.style.pointerEvents = 'auto'
      el.style.color='#292929'
      el.style.borderColor = '#F1CDB3'
    })}
  paginatedData.forEach((el, index)=>{
    const postEl = `
    <div class="friend-slider__block" data-friendId='${el}'>
                <img src='${pets[el].img}' alt="${pets[el].name}">
                <h4 class="friend-h4">${pets[el].name}</h4>
                <button class="button-pets">Learn more</button>
              </div>
    `
    postsEl.innerHTML += postEl
  })

}


function displayPaginationBtn(page){
  document.querySelector('.circle-current').textContent = page
}
document.querySelector('.circle-next').addEventListener('click', () => {
  currentPage = document.querySelector('.circle-current').innerText
  let nextPage = +currentPage + 1
  row = countOnPage()
    displayList(data, row, nextPage)
    displayPaginationBtn(nextPage)
    addToolsClickHandler()
})
document.querySelectorAll('.circle-prev')[1].addEventListener('click', () => {
  currentPage = document.querySelector('.circle-current').innerText
  let prevPage = +currentPage - 1
  row = countOnPage()
    displayList(data, row, prevPage)
    displayPaginationBtn(prevPage)
    addToolsClickHandler()
})
document.querySelector('.circle-first').addEventListener('click', () => {
  currentPage = document.querySelector('.circle-current').innerText
  let prevPage = 1
  row = countOnPage()
    displayList(data, row, prevPage)
    displayPaginationBtn(prevPage)
    addToolsClickHandler()
})
document.querySelector('.circle-last').addEventListener('click', () => {
  currentPage = document.querySelector('.circle-current').innerText
  let prevPage = pagesCount
  row = countOnPage()
    displayList(data, row, prevPage)
    displayPaginationBtn(prevPage)
    addToolsClickHandler()
})
window.addEventListener('resize', ()=>{
console.log(row,countOnPage(), row==countOnPage())
} )
displayList(data, row, currentPage)
}

export {pagination}