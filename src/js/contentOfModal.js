import { Modal } from "./modal";

export class ContentOfModal extends Modal{
  constructor (classes, { name, img, type, breed, description, age, inoculations, diseases, parasites }) {
    super(classes);
    this.name = name; 
    this.img =  img;
    this.type = type
    this.breed = breed
    this.description = description
    this.age = age
    this.inoculations = inoculations
    this.diseases = diseases
    this.parasites = parasites
  }
generateContent(){
  console.log(scroll)
  let template = '';
  let article = document.createElement('div')
  article.className = 'article-modal__content';
  this.img && (template += `<img src=${this.img} alt=${this.name}/>`)
  if (this.name || this.type || this.description || this.age || this.inoculations || this.diseases || this.parasites) {
    template += `<div class="pet__content">`
    
    this.name && 
    (template += `<h2 class="pet__name">${this.name}</h2>`)

    this.type && this.breed &&
    (template += `<p class="pet__type">${this.type} - ${this.breed}</p>`)

    this.description && 
    (template += `<p class="pet__desc pet__desc-temp">${this.description}</p>`)

    this.age && 
    (template += `<p class="pet__age pet__desc-temp pet__point"><span class="pet__key">Age: </span>${this.age}</p>`)

    this.age && 
    (template += `<p class="pet__desc-temp pet__point"><span class="pet__key">Inoculations: </span>${this.inoculations.join(', ')}</p>`)

    this.age && 
    (template += `<p class="pet__desc-temp pet__point"><span class="pet__key">Diseases: </span>${this.diseases.join(', ')}</p>`)

    this.age && 
    (template += `<p class="pet__desc-temp pet__point"><span class="pet__key">Parasites: </span>${this.parasites.join(', ')}</p>`)


    template += `</div>`
}
  article.innerHTML = template;
  return article;
}
renderModal(){
  let content = this.generateContent();
  console.log(content);
  super.buildModal(content)
}
}