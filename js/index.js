let containers = document.querySelectorAll('.container');
let txtfield = document.getElementById('textInput')
let submitbtn = document.getElementById('btnInput')
let categorybtn = document.getElementById('categorySelector')
let cat1 = document.getElementById('category1')
let cat2 = document.getElementById('category2')
let cat3 = document.getElementById('category3')
let itemList = [];
let bool = false;


submitbtn.addEventListener('click', () =>{
    let text = txtfield.value;
    let catValue = categorybtn.value;
    bool = true;
//console.log(catValue);

if(text.length == 0){
    console.log("ecrit ton pèwou");
}

else
{
    createItemList();
}

function createItemList(){
    let newItem = document.createElement('li');
    let newItemText = document.createElement('h4');
    let delBtn = document.createElement('button');
    let modBtn = document.createElement('button');
    newItem.className='Item';
    newItem.classList.add(catValue);
    newItem.draggable = true;
    newItem.style.display = "flex";
    modBtn.id = 'modButton';
    modBtn.innerHTML += '<i class="fa-solid fa-pencil"></i>';
    delBtn.id = 'delButton';
    delBtn.innerHTML += '<i class="fa-solid fa-eraser"></i>';
    newItemText.innerText = text;
    eval(catValue).appendChild(newItem);
    newItem.appendChild(newItemText);
    newItem.appendChild(modBtn);
    newItem.appendChild(delBtn);

    txtfield.value = '';
    itemList.push(newItem);

    itemList.forEach(element => 
    {
        element.addEventListener('mouseover', hoverFunction);
        element.addEventListener('mouseout', outFunction);

        element.addEventListener('dragstart', () => 
        {
            element.classList.add('dragging');
            console.log('dragging');
        })

        element.addEventListener('dragend', ()=>{
            element.classList.remove('dragging');
            console.log('stopDraggin');
        })
    })
    

    modBtn.addEventListener('click', changeText);
    delBtn.addEventListener('click', close);
    
}
})

containers.forEach(container => {
    container.addEventListener('dragover', e =>{
        let child = container.children;
        e.preventDefault();
        let afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        console.log(afterElement);
        child[1].appendChild(draggable);
        draggable.style.justifyContent = 'center';
        console.log( draggable.style.justifyContent);
    })
})

function getDragAfterElement(container, y){
    let draggableElements = [...container.querySelectorAll('.Item:not(.dragging)')];

    return draggableElements.reduce((closest, child)=> {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height/2;
        if(offset < 0 && offset > closest.offset)
        {
            return {offset: offset, element: child};
        }
        else
        {
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;
}

function hoverFunction(){
    let child = this.children;
    child[2].style.display = "flex";
    child[1].style.display = "flex";
}
function outFunction()
{
    let child = this.children;
    child[2].style.display = "none";
    child[1].style.display = "none";
}

function close(){
    let close = document.getElementById("delButton");
    let div = this.parentElement;
    div.style.display = "none";
      
}

function changeText(){
    let inputText = document.createElement('input');
    let buttonOk = document.createElement('button');
    buttonOk.innerHTML += '<i class="fa-solid fa-check"></i>';
    inputText.id = 'textInputModify';
    buttonOk.id = 'btnOk';
    let txtfieldModify = document.getElementById('textInputModify')
    inputText.type = 'text';
    inputText.placeholder = 'Modify Text';
    let child = this.parentElement.children;
    let textValue = child[0];
    textValue.appendChild(inputText);
    textValue.appendChild(buttonOk);
    buttonOk.addEventListener('click', () =>{
        if(inputText.value.length != 0)
        textValue.innerText = inputText.value;
        child[2].style.display = "none";
        child[1].style.display = "none";
        console.log("modified") 
        
    });
        
}
