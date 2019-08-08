const runFetch = (url, cb) => {
    fetch(url)
      .then(data => data.json() )
        .then((books) => {
            cb(null, books);
      }).catch((err) => {
        cb(err);
      });
  };

const updateBookList = () => {
    runFetch('/books', (err, books) => {
      if (err) {
         document.getElementById('error').innerHTML = 'We have an error in our book database';
      } else {
        var table = document.getElementById('books-table');
        books.forEach((book) => {
            console.log(book);
            var row = document.createElement('tr');
            row.appendChild( createItem(book.name) );
            row.appendChild( createItem(book.first_name + " " + book.last_name) );
            row.appendChild( createItem(book.date) );
            row.appendChild( createItem(book.genre) );
            table.appendChild(row);
        });
      }
    });
};


const createItem = (data) => {
    var item = document.createElement('td');
    item.innerHTML = data;
    return item;
}

updateBookList();