import { ContentOfModal } from './contentOfModal';
import { pets } from './pets';
const addToolsClickHandler = () =>{
  document.querySelectorAll('.friend-slider__block').forEach(block => {
      block.addEventListener('click', () => {         
          if(pets) {
              document.body.style.top = `-${window.scrollY}px`;
              document.body.style.position = 'fixed';
              addContentClickHandle(block);

          }
      })
  })
}
const addContentClickHandle = (node) =>{
    let clickedPetId = node.getAttribute('data-friendid')
    renderContentModalWindow(pets[clickedPetId]);
}

const renderContentModalWindow = (content) =>{
    let modal =  new ContentOfModal('article-modal', content);
    modal.renderModal();
}
export {addToolsClickHandler}