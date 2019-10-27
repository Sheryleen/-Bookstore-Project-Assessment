/// create variables///
const row = document.getElementById("tableRow");
const tableBody = document.getElementById("table");
const books = document.getElementById("books");
const id = document.getElementById("id");

//create get request//

axios.get(`http://localhost:3000/books`).then(response => {
  let books = response.data;

  const tableBody = document.getElementById("table");
  for (let i = 0; i < books.length; i++) {
    //create element tr for table row//
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
        <td>${books[i].id}</td> 
        <td>${books[i].title}</td>
        <td>${books[i].author}</td>
        <td>${books[i].description}</td>
        <td>$${books[i].price}.00</td>
        <td>${books[i].quantity}</td>  
        <button id="${books[i].id}" class="btn btn-danger">delete</button> 
        
        </td>
        `;

    //adding row to the table body//

    tableBody.appendChild(tableRow);
    document
      .getElementById(`${books[i].id}`)
      .addEventListener("click", event => {
        event.preventDefault();

        axios
          .delete(`http://localhost:3000/books/${books[i].id}`)
          .then(response => response.data);
      });
  }
});
