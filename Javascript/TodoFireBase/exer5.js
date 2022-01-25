function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("todo-input");
  let newItem = db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });
  text.value = "";
}

function getItems() {
  db.collection("todo-items").onSnapshot((snapshot) => {
    // console.log("snapshot" + JSON.stringify(snapshot));
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    // console.log("items" + JSON.stringify(items));
    generateItems(items);
  });
}
function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    // console.log(item);
    itemsHTML += `
  <div class="todo-item">
  <div class="check">
      <div data-id="${item.id}"class="check-mark ${
      item.status == "completed" ? "checked" : "nothing"
      // console.log("itemMC" + JSON.stringify(item));")
      // console.log("item.status5" + item.status))
    }">
          <img src="./assets/icon-check.svg" alt="icon-check.svg">
      </div>
  </div>
  <div class="todo-text ${
    item.status == "completed" ? "checked" : "nothing"
    // console.log("itemMC" + JSON.stringify(item));")
    // console.log("item.status5" + item.status))
  }">${item.text}</div>          
    <div  
    class="binmarkcont ${
      item.status == "completed" ? "checked" : "nothing"
      // console.log("itemMC" + JSON.stringify(item));")
      // console.log("item.status5" + item.status))
    }"  data-id="${item.id}">
    <img class="binmark" src="./assets/icon-bin.svg" alt="icon-bin.svg"></div>

  </div>`;
  });
  document.querySelector(".todo-items").innerHTML = itemsHTML;
  createEventListeners();
}
// function deleteItems(dataid) {
//   alert("click" + dataid);
// }
let bin = document.querySelector(".binmarkcont");

function createEventListenersBins() {
  document.querySelector(".binmarkcont").forEach((bin) => {
    bin.addEventListener("click", function () {
      deleteOne(bin.dataset.id);
    });
  });
}
function createEventListeners() {
  let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
  let bins = document.querySelectorAll(".binmarkcont");
  // console.log("todoCheckMarks" + JSON.stringify(todoCheckMarks) + todoCheckMarks.length
  // );
  todoCheckMarks.forEach((checkMark) => {
    checkMark.addEventListener("click", function () {
      markCompleted(checkMark.dataset.id);
    });
  });
  bins.forEach((bin) => {
    bin.addEventListener("click", function () {
      deleteOne(bin.dataset.id);
    });
  });
}
function deleteOne(id) {
  let item = db.collection("todo-items").doc(id);
  item.delete();
  // alert('deleted'+ JSON.stringify(db.collection("todo-items").doc(id)))
  alert(item + id);
}
function markCompleted(id) {
  let item = db.collection("todo-items").doc(id);
  alert(item + id);
  item.get().then(function (doc) {
    if (doc.exists) {
      if (doc.data().status == "active") {
        item.update({
          status: "completed",
        });
      } else {
        item.update({
          status: "active",
        });
      }
    }
  });
  console.log("itemMC" + JSON.stringify(item));
}

getItems();
function myFunction() {
  document.body.style.backgroundColor = "green";
}
function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.match("generic-image-placeholder")) {
    image.src = "./assets/ba";
  } else {
    image.src = "./assets/background";
  }
}

function changeImg() {
  var image = document.getElementById('myImg');
  if (image.src.match("img/more.jpg")) {
      image.src = "img/less.jpg";
  }
  else {
      image.src = "img/more.jpg";
  }
}
