const runFetch = (url, cb) => {
    fetch(url)
      .then(data => data.json()).then(({ files }) => {
        cb(null, files);
      }).catch((err) => {
        cb(err);
      });
  };
  
  const updateBookList = () => {
    runFetch('/books', (err, books) => {
      if (err) {
        // document.getElementById('books').innerHTML = 'We have an error in our book database';
      } else {
        var table = document.getElementById('books-table');
        books.forEach((file) => {
            var row = document.createElement('tr');
            var name = document.createElement('td');
            name.innerHTML = book.name;
            row.appendChild(name);
            var author = document.createElement('td');
            author.innerHTML = book.first_name + " " + book.last_name;
            row.appendChild(author);
            var year = document.createElement('td');
            year.innerHTML = book.year;
            row.appendChild(year);
            var genre = document.createElement('td');
            genre.innerHTML = book.genre;
            row.appendChild(genre);
        });
      }
    });
  };
