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
    newItem.classList.add('Item');
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
    itemList.forEach(element => element.addEventListener('mouseover', hoverFunction));
    itemList.forEach(element => element.addEventListener('mouseout', outFunction));
    modBtn.addEventListener('click', changeText);
    delBtn.addEventListener('click', close);
    
}
})



function hoverFunction(){
    console.log("Hover");
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
    inputText.placeholder = 'modify text';
    buttonOk.value = "ok";
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
