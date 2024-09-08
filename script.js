const myLibrary=[]
class Book{
    constructor (name,author,pages){
        this.name=name
        this.author=author
        this.pages=pages
        this.isread=false
        this.info=function(){
            let read=this.isRead?'finished reading':'not read yet'
            return `${this.name} by ${this.author}, ${this.pages} pages, ${read}`
        }
    }
}
function addBookToLibrary(name,author,pages){
    let book=new Book(name,author,pages)
    myLibrary.push(book)
}
const addBookButton=document.querySelector('.add-book button')
const bookInfoDialog=document.querySelector('.book-info-dialog')
const bookInfoDialogContainer=document.querySelector('.dialog-container')
addBookButton.addEventListener('click',showmodal)
function showmodal(){
    bookInfoDialogContainer.style.display='block'
    bookInfoDialog.showModal()
}
const closeDlgBtn=document.querySelector('#close-dialog')
closeDlgBtn.addEventListener('click',(e)=>{
    bookInfoDialog.close();
    bookInfoDialogContainer.style.display='none'
    e.preventDefault()
})
const addBookBtn=document.querySelector('#add-book')
addBookBtn.addEventListener('click',addBook)
const nameInp=document.querySelector('#name')
const authorInp=document.querySelector('#author')
const pagesInp=document.querySelector('#pages')
function addBook(e){
    e.preventDefault()
    addBookToLibrary(nameInp.value,authorInp.value,pagesInp.value)
    nameInp.value=authorInp.value=pagesInp.value=null
    refreshGrid()
    bookInfoDialog.close()
    bookInfoDialogContainer.style.display='none'
}
const grid=document.querySelector('.container')
function refreshGrid(){
    grid.textContent=''
    myLibrary.forEach(addBookToHTML)  
    setReadEventListeners()
    setRemoveEventListeners() 
}
function addBookToHTML(book,index){
    let card=document.createElement('div')
    card.classList.add('card','cards')
    card.id=index
    grid.appendChild(card)
    let para=document.createElement('p')
    card.appendChild(para)
    let span1=document.createElement('span')
    let span2=document.createElement('span')
    span1.textContent='Name:'
    span1.classList.add('fixed')
    span2.textContent=book.name
    para.appendChild(span1)
    para.appendChild(span2)
    para=document.createElement('p')
    card.appendChild(para)
    span1=document.createElement('span')
    span2=document.createElement('span')
    span1.textContent='Author:'
    span1.classList.add('fixed')
    span2.textContent=book.author
    para.appendChild(span1)
    para.appendChild(span2)
    para=document.createElement('p')
    card.appendChild(para)
    span1=document.createElement('span')
    span2=document.createElement('span')
    span1.textContent='Pages:'
    span1.classList.add('fixed')
    span2.textContent=book.pages
    para.appendChild(span1)
    para.appendChild(span2)
    para=document.createElement('p')
    card.appendChild(para)
    span1=document.createElement('span')
    span2=document.createElement('span')
    span1.textContent='Status:'
    span1.classList.add('fixed')
    span2.textContent=book.isread?'Read':'Not read'
    para.appendChild(span1)
    para.appendChild(span2)
    let btn=document.createElement('button')
    btn.textContent='Read'
    card.appendChild(btn)
    btn=document.createElement('button')
    btn.textContent='Remove'
    card.appendChild(btn)
}

let readBtn
function setReadEventListeners(){
    readBtn=document.querySelectorAll('.cards button:first-of-type')
    readBtn.forEach(btn=>btn.addEventListener('click',toggleReadStatus))
}

function toggleReadStatus(e){
    myLibrary[e.target.parentNode.id].isread=myLibrary[e.target.parentNode.id].isread?false:true
    refreshGrid()
}
let removeBtn
function setRemoveEventListeners(){
    removeBtn=document.querySelectorAll('.cards button:last-of-type')
    removeBtn.forEach(btn=>btn.addEventListener('click',removeBook))
}
function removeBook(e){
    myLibrary.splice(e.target.parentNode.id,1)
    refreshGrid()
}
console.log(readBtn)