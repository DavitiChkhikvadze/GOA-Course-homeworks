const bookstore = new Map([
    ['978-1', { title: 'Book One', author: 'Author A', genre: 'Fiction', price: 20, description: 'A great read.', status: 'available' }],
    ['978-2', { title: 'Book Two', author: 'Author B', genre: 'Non-fiction', price: 15, description: 'An insightful book.', status: 'available' }],
    ['978-3', { title: 'Book Three', author: 'Author A', genre: 'Fiction', price: 25, description: 'A thrilling story.', status: 'available' }],
  ]);
  
const personalCollection = new Map();
  
function renderBooks(containerId, books) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    books.forEach((book, id) => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
  
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p><strong>Price:</strong> $${book.price}</p>
        <p>${book.description}</p>
        <button class="${containerId === 'store-container' ? 'add-to-collection' : 'remove-from-collection'}" data-id="${id}">
          ${containerId === 'store-container' ? 'Add to Collection' : 'Remove from Collection'}
        </button>
      `;
      container.appendChild(bookCard);
    });
  }
  
  function filterBooks(map, { genre = '', author = '', minPrice = 0, maxPrice = Infinity }) {
    return new Map(
      Array.from(map).filter(([id, book]) =>
        (genre === '' || book.genre === genre) &&
        (author === '' || book.author.includes(author)) &&
        (book.price >= minPrice && book.price <= maxPrice)
      )
    );
  }
  
  function searchBooks(map, query) {
    return new Map(
      Array.from(map).filter(([id, book]) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
      )
    );
  }
  
  function addToCollection(id) {
    if (bookstore.has(id)) {
      const book = bookstore.get(id);
      book.status = 'added';
      personalCollection.set(id, book);
      renderBooks('collection-container', personalCollection);
      renderBooks('store-container', bookstore);
    }
  }
  
  function removeFromCollection(id) {
    if (personalCollection.has(id)) {
      personalCollection.delete(id);
      if (bookstore.has(id)) {
        bookstore.get(id).status = 'available';
      }
      renderBooks('collection-container', personalCollection);
      renderBooks('store-container', bookstore);
    }
  }
  
  function setupEventListeners() {
    document.getElementById('store-container').addEventListener('click', (e) => {
      if (e.target.classList.contains('add-to-collection')) {
        addToCollection(e.target.dataset.id);
      }
    });
  
    document.getElementById('collection-container').addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-from-collection')) {
        removeFromCollection(e.target.dataset.id);
      }
    });
  
    document.getElementById('search-store').addEventListener('input', (e) => {
      const query = e.target.value;
      renderBooks('store-container', searchBooks(bookstore, query));
    });
  
    document.getElementById('search-collection').addEventListener('input', (e) => {
      const query = e.target.value;
      renderBooks('collection-container', searchBooks(personalCollection, query));
    });
  }
  
  function initialize() {
    renderBooks('store-container', bookstore);
    renderBooks('collection-container', personalCollection);
    setupEventListeners();
  }
  
  document.addEventListener('DOMContentLoaded', initialize);
  