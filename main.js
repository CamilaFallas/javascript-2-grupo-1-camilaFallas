import Bookstore from './modules/Bookstore.js';
import Book from './modules/Book.js';
import Comic from './modules/Comic.js';

(function () {
  const bookstore1 = new Bookstore('Libreria 1', 'Calle 1');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content')
  const menu = ['Show Books', 'Show Comics', 'Add book', 'Add Comic'];

  const initialize = () => {
    printBookstoreName();
    displayMenu();
    menuFunctionality();
  }
  
  const printBookstoreName = () => {
    sidebar.insertAdjacentHTML(
      'afterbegin',
      `<h2 class="title">
        <img src="./img/logo.svg" class="logo"/>
        ${bookstore1.getName}
      </h2>`
    )
  }
  
  const createMenu = () => {
    let menuHtml = '';
    menu.forEach((elem, index) => {
      menuHtml += `<li class="menu-item"> 
        <a href="#" id="${index}">${elem}</a>
      </li>`
    });
  
    return menuHtml;
  }
  
  const displayMenu = () => {
    sidebar.insertAdjacentHTML(
      'beforeend',
      `<ul class="menu">${createMenu()}</ul>`
    );
  }
  
  const menuFunctionality = () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        // e.stopPropagation(); // esto es para evitar que el evento se extienda/propague al los elementos padres
        event.preventDefault(); // esto es para evitar que se recargue la página cuando se hace click en el elemento, en este al elemeto li del menu
  
        const { id } = event.target
  
        switch (id) {
          case '0':
            showBooks(); 
            break;
          case '1':
            showComics();
            break;
          case '2':
            addBooks();
            break;
          case '3':
            addComics();
            break;
          default:
            console.log('That option does not exist');
            break;
        }
      });
    });
  }
  

  const showBooks = () => {
    mainContent.innerHTML= "";
    const books  = bookstore1.getBooks;
    for (let i = 0; i < books.length; i++) {
      mainContent.insertAdjacentHTML(
        'afterbegin',
        ` <div class="show-container">
          <p class="show">${books[i].title}</p>
          <p class="show">${books[i].author}</p>
          <p class="show">${books[i].price}</p>
          <p class="show">${books[i].stock}</p>
          <p class="show">${books[i].year}</p>
          </div>
            `
      )
  }
}
  
  const showComics = () => {
    mainContent.innerHTML= "";
    const comics = bookstore1.getComics;
    for (let i = 0; i < comics.length; i++) {
      mainContent.insertAdjacentHTML(
        'afterbegin',
        ` <p class="show">${comics[i].title}</p>
          <p class="show">${comics[i].author}</p>
          <p class="show">${comics[i].price}</p>
          <p class="show">${comics[i].stock}</p>
          <p class="show">${comics[i].year}</p>
          <p class="show">${comics[i].illustrator}</p>
          <p class="show">${comics[i].publisher}</p>
          <p class="show">${comics[i].volume}</p>
            `
      )
    }
  }
  
  const addBooks = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
    // if (title != null) {
    //   prompt ('Invalid name, please enter the title')
    // }else if {
      
    // }
  
    const book = new Book(title, author, price, stock, year);
    bookstore1.setBooks = book.getInfo();
  }
  

  const addComics = () => {
    const title = prompt('Title');
    const author = prompt('Author');
    const price = prompt('Price');
    const stock = prompt('Stock');
    const year = prompt('Year');
      const illustrator = prompt('illustrator');
      const publisher = prompt('publisher');
      const volume = prompt('volume');

    const comic = new Comic(title, author, price, stock, year, illustrator, publisher, volume);
    bookstore1.setComics = comic.getInfo();
  }
  
  initialize();
})();