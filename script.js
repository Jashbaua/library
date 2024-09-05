const myLibrary=[]
function Book(){
    this.title
    this.author
    this.pages
    this.isread
    this.info=function(){
        let read=this.isRead?'finished reading':'not read yet'
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read}`
    }
}
let theHobbit=new Book()
theHobbit.title='koka'
console.log(theHobbit.info())