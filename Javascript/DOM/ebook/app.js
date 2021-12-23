// find elements

const [book_name,book_author,book_date,price] = document.querySelectorAll('input')
const book_category = document.querySelector('#book_category')
const addBtn = document.querySelector('.addbookbtn')
let books = []
const tableBody = document.querySelector('tbody')

function TestRemove(getEl){
  //  e.preventDefault();
    console.log(getEl.parentElement.parentElement.parentElement)
    getEl.parentElement.parentElement.parentElement.remove()
}

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(book_name,book_author,book_date,price,book_category,addBtn)
    console.log(book_category.options[book_category.selectedIndex].text)
    let obj ={
        book_name:book_name.value,
        book_author:book_author.value,
        book_date:book_date.value,
        book_category:book_category.options[book_category.selectedIndex].text,
        price:price.value
    }
    console.log(obj);
    books.push(obj)
    console.log(books)
    tableBody.innerHTML += `<tr>
    <th scope="row">1</th>
    <td>${obj.book_name}</td>
    <td>${obj.book_author}</td>
    <td>${obj.book_category}</td>
    <td>${obj.book_date}</td>
    <td>${obj.price} <i class="fa fa-eur" aria-hidden="true"></i></td>
    <td><a href="#"><i class="fa fa-trash lead" onClick="TestRemove(this)" aria-hidden="true"></i></a></td>
</tr>`
});

document.querySelector('.bg-danger').addEventListener('click',e=>{
    e.preventDefault();
    tableBody.innerHTML=""
})