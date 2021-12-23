class film {
    constructor(title, director, url ) {
      this.title = title;
      this.director = director;
      this.url = url;
    }
  }
  // UI Class: Handle UI Tasks
  class UI {
    static displayfilm() {
      const film = Store.getfilm();
  
      film.forEach((film) => UI.addfilmToList(film));
    }
  
    static addfilmToList(film) {
      const list = document.querySelector('#film-list');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${film.title}</td>
        <td>${film.author}</td>
        <td>${film.category}</td>
        <td>${film.date}</td>


        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
      `;
  
      list.appendChild(row);
    }
  
    static deletefilm(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static showAlert(message, className) {
      const div = document.createElement('div');
      div.className = `alert alert-${className}`;
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector('.container');
      const form = document.querySelector('#film-form');
      container.insertBefore(div, form);
  
      // Vanish in 3 seconds
      setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  
    static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#category').value = '';
      document.querySelector('#date').value = '';



    }
  }
  
  
  // Store Class: Handles Storage
  class Store {
    static getfilm() {
      let film;
      if(localStorage.getItem('film') === null) {
        film = [];
      } else {
        film = JSON.parse(localStorage.getItem('film'));
      }
  
      return film;
    }
  
    static addFilm(film) {
      const film = Store.getFilm();
      film.push(film);
      localStorage.setItem('film', JSON.stringify(film));
    }
  
    static removefilm(category) {
      const film = Store.getFilm();
  
      film.forEach((film, index) => {
        if(film.category === category) {
          film.splice(index, 1);
        }
      });
  
      localStorage.setItem('film', JSON.stringify(film));
    }
  }
  
  // Event: Display films
  document.addEventListener('DOMContentLoaded', UI.displayfilm);
  
  // Event: Add a film
  document.querySelector('#film-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
  
    // Get form values
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const category = document.querySelector('#category').value;
   

  
    // Validate
    if(title === '' || author === '' || category === '') {
      UI.showAlert('Please fill in all fields', 'danger');
    } else {
      const date = document.querySelector('#date').value;
      // Instatiate film
      const film = new film(title, author, category,date);
  
      // Add film to UI
      UI.addfilmToList(film);
  
      // Add film to store
      Store.addfilm(film);
  
      // Show success message
      UI.showAlert('film Added', 'success');
  
      // Clear fields
      UI.clearFields();
    }
  });
  
  // Event: Remove a film
  document.querySelector('#film-list').addEventListener('click', (e) => {
    // Remove film from UI
    UI.deletefilm(e.target);
  
    // Remove film from store
    Store.removefilm(e.target.parentElement.previousElementSibling.textContent);
  
    // Show success message
    UI.showAlert('film Removed', 'success');
  });
