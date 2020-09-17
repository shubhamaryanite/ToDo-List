const addForm=document.querySelector('.add');
//link to ul list
const list=document.querySelector('.todos');


const generateTemplate=todo=>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML+=html;
};

generateTemplate(
//take event as a parameter in call by function
addForm.addEventListener('submit', e=>{
    e.preventDefault();
    //delete all spaces in string before and after - trim
    const todo=addForm.add.value.trim();
    //console.log(todo);
    if(todo.length>0)
    {
        todo);
        addForm.reset();
    }
});


//delete todos
list.addEventListener('click', e=>{
    //only works whwn we will click on delete/trash icon
    if(e.target.classList.contains('delete'))
    {
        //delte li item itself
        e.target.parentElement.remove();
    }
});


//keyup event
const search=document.querySelector('.search input');


const filterTodos=(term)=>{
    //console.log(term);
    //filter method returns array
    //dont contains the searched terms

    //adding filtered class to those who do not contains the matched term
    //filterd class is modified in css to get removed / deleted

    // Array.from(list.children)
    // .filter(()=>{
    //     return !todo.textContent.includes(term);
    // }).forEach((todo)=>{
    //     todo.classList.add('filtered');
    // });

    //converting it into lowercase
    //also matching the lowercase and uppercase as the same
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> todo.classList.add('filtered'));

    //remove filtered class from the items 
    //which do not contains that term

    Array.from(list.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(term))
        .forEach((todo)=> todo.classList.remove('filtered'));
};


search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
});


//bootstrap
//html css javascript
//responsive 
// !bootstrap - without bootstrap
// login page - fully responsive - convert it into mobile/ laptop display
// local storage in browser
// media query
//