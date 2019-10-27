//create variables//
const row = document.getElementById("tableRow");
const bookTitle = document.getElementById("title");
const author = document.getElementById("author");
const description = document.getElementById('description');
const price = document.getElementById('priceNum');
const quantity = document.getElementById('quantity');
const myForm = document.getElementById('myForm');
const dollars = document.getElementById('intoDollars');
const number = document.getElementById('num')


    
myForm.addEventListener("submit", e => {
    e.preventDefault();
    
    
    //create post//
    //posting input data to axios//
    axios
        .post(`http://localhost:3000/books`, {
            title: `${title.value}`,
            author: `${author.value}`,
            description: `${description.value}`,
            quantity: `${myNumber.value}`,
            price: `$${priceNum.value}.00`,        
      
     }) 

        //using window to redirect the page// 
      
    .then(response => { window.location.replace('/index.html') });


});
    
      
        