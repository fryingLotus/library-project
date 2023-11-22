const form = document.querySelector(".formStyle");
const dataButton = document.querySelectorAll("[data-button]");






form.addEventListener("submit", (event) => library.addBook(event));


class Book{
  constructor(title,author,pages,readStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.books.push(new Book('Harry Potter', 'J.K. Rowling', 143, 'Read'));
    this.displayBooks();
  }

  addBook(event) {
    // Add the book to the library
    event.preventDefault();

    const getTitle = document.querySelector("#title").value;
    const getAuthor = document.querySelector("#author").value;
    const getPage = document.querySelector("#page").value;
  
    let readStatus = "";
  
    dataButton.forEach((btn) => {
          if (btn.classList.contains('active')) {
            if (btn.value == "yes") {
              readStatus = "Read";
            } else {
              readStatus = "Not Read";
            }
            
          }
        })
  
  
    let newBook = new Book(getTitle, getAuthor, getPage, readStatus);
    

    this.books.push(newBook);
    console.log(this.books);
    // displayBooks();
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
    

    deleteButtons.forEach((deleteButton, index) => {
      deleteButton.addEventListener('click',() => {
    
        this.books.splice(index, 1);
    
      
        deleteButton.parentElement.remove();
    
     
      });
    });
    
  }
// te
  displayBooks() {
    const bookBox = document.querySelector("#bookItem");
      bookBox.innerHTML = "";
     this.books.forEach((book,index) => {
        let div = document.createElement("div");
        div.className = "card";
    
        let p1 = document.createElement("p");
        p1.textContent = book.title;
        div.appendChild(p1);
    
        let p2 = document.createElement("p");
        p2.textContent = book.author;
        div.appendChild(p2);
    
        let p3 = document.createElement("p");
        p3.textContent = book.pages;
        div.appendChild(p3);
      
        let p4 = document.createElement("p");
        p4.textContent = "Status: ";
        
        let span = document.createElement("span");
       
        span.textContent = book.readStatus;
        console.log(span.textContent);
        p4.appendChild(span);
       
        div.appendChild(p4);
    
        let deleteButton = document.createElement("BUTTON");
        deleteButton.textContent = "×";
        deleteButton.addEventListener('click', () => {
         this.removeBook(index);
          
        });
        div.appendChild(deleteButton);
        
    
        bookBox.appendChild(div);
      })
  }
}

let library = new Library();
// Create a new book

dataButton.forEach((btn) => {
  btn.addEventListener("click",(event) => {
    dataButton.forEach((btn) => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');
  })
})

// function displayBooks() {
//   const bookBox = document.querySelector("#bookItem");
//   bookBox.innerHTML = "";
//   myLibrary.forEach((book,index) => {
//     let div = document.createElement("div");
//     div.className = "card";

//     let p1 = document.createElement("p");
//     p1.textContent = book.title;
//     div.appendChild(p1);

//     let p2 = document.createElement("p");
//     p2.textContent = book.author;
//     div.appendChild(p2);

//     let p3 = document.createElement("p");
//     p3.textContent = book.pages;
//     div.appendChild(p3);
  
//     let p4 = document.createElement("p");
//     p4.textContent = "Status: ";
    
//     let span = document.createElement("span");
   
//     span.textContent = book.readStatus;
//     console.log(span.textContent);
//     p4.appendChild(span);
   
//     div.appendChild(p4);

//     let deleteButton = document.createElement("BUTTON");
//     deleteButton.textContent = "×";
//     deleteButton.addEventListener('click', function() {
//       myLibrary.splice(index, 1);
//       displayBooks();
//     });
//     div.appendChild(deleteButton);
    

//     bookBox.appendChild(div);
//   })

// }

// // let deleteArray = document.createElement("BUTTON");
// const myLibrary = [];
// function addBookToLibrary(event) {
//   event.preventDefault();
//   const getTitle = document.querySelector("#title").value;
//   const getAuthor = document.querySelector("#author").value;
//   const getPage = document.querySelector("#page").value;

//   let readStatus = "";

//   dataButton.forEach((btn) => {
//     if (btn.classList.contains('active')) {
//       if (btn.value == "yes") {
//         readStatus = "Read";
//       } else {
//         readStatus = "Not Read";
//       }
      
//     }
//   })


//   let newBook = new Book(getTitle, getAuthor, getPage, readStatus);
//   myLibrary.push(newBook);
//   displayBooks();
//   console.log(readStatus);
//   console.log(myLibrary);
//   console.log(myLibrary.length);
// }

// dataButton.forEach((btn) => {
//   btn.addEventListener("click",(event) => {
//     dataButton.forEach((btn) => {
//       btn.classList.remove('active');
//     });
//     event.target.classList.add('active');
//   })
// })




// modal
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
// end of modal
