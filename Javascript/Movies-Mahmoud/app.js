// find elements

const [film_name,film_director,film_date] = document.querySelectorAll('input')
const film_category = document.querySelector('#film_category')
const addBtn = document.querySelector('.addfilmbtn')
let films = []
const tableBody = document.querySelector('tbody')

function TestRemove(getEl){
//    e.preventDefault();
    console.log(getEl.parentElement.parentElement.parentElement)
    getEl.parentElement.parentElement.parentElement.remove()
}

function TestEdit(getEl){

    console.log(getEl.parentElement.parentElement.parentElement)
  
   
  }

addBtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(film_name,film_director,film_date,film_category,addBtn)
    console.log(film_category.options[film_category.selectedIndex].text)
    let obj ={
        film_name:film_name.value,
        film_director:film_director.value,
        film_date:film_date.value,
        film_category:film_category.options[film_category.selectedIndex].text,
    }
    console.log(obj);
    films.push(obj)
    console.log(films)
    tableBody.innerHTML += `<tr>
    <th scope="row">1</th>
    <td>${obj.film_name}</td>
    <td>${obj.film_director}</td>
    <td>${obj.film_category}</td>
    <td>${obj.film_date}</td>
    <td><a href="#"><i class="fa fa-edit lead" onClick="TestEdit(this)" aria-hidden="true"></i></a></td>
    <td><a href="#"><i class="fa fa-edit lead" onClick="TestRemove(this)" aria-hidden="true"></i></a></td>

</tr>`
});

document.querySelector('.bg-danger').addEventListener('click',e=>{
    e.preventDefault();
    tableBody.innerHTML=""
})

// localStorage.setItem("key",value);
// localStorage.getItem("key");
// localStorage.removeItem("key");


