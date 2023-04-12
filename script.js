

const btnOpenModal=document.querySelectorAll('.show-modal')
const modal=document.querySelector('.modal')
const btnCloseModal=document.querySelector('.close-modal')
const overlay=document.querySelector('.overlay')

const openModal=()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

}


const closeModal=()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')

}
btnOpenModal.forEach((buttons)=>{
    buttons.addEventListener('click',openModal)

})

btnCloseModal.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',(event)=>{
    if(event.key==='Escape'){
        closeModal();
    }
})