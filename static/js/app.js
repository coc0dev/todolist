var addBtn = document.getElementById('addBtn');
var todoItemField = document.getElementById('todo-item')
var ul = document.getElementById('todo-list-container')

function addActiveClass() {
    if (!this.classList.contains('list-group-item-dark')) {
        this.classList.add('active');
    } 
    
}
function removeActiveClass() {
    if (!this.classList.contains('list-group-item-dark')) {
        this.classList.remove('active');
    } 
    
}

function doThis() {
    this.classList.toggle('list-group-item-dark')
    this.classList.toggle('line-through')
    this.classList.toggle('checked')
    this.classList.toggle('text-muted')
        this.classList.remove('active');
}
// create list item and highlight on hover/mouseover
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // create element
    var li = document.createElement('li');

    // set the innerText to what's inside the input field
    li.innerText = todoItemField.value;
    // console.log(todoItemField.value)

    // add the classes
    li.classList.add('list-group-item');
    // create an x
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Add it into the ul
    ul.appendChild(li);

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Add the toggle event listener
    li.addEventListener('mouseover', addActiveClass);
    li.addEventListener('mouseleave', removeActiveClass);
    li.addEventListener('click', doThis);

    todoItemField.value = '';

})






