let txtfield = document.getElementById('textInput')
let submitbtn = document.getElementById('btnInput')
let categorybtn = document.getElementById('categorySelector')
let cat1 = document.getElementById('category1')
let cat2 = document.getElementById('category2')
let cat3 = document.getElementById('category3')
let itemList = document.getElementById('Item')
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
    let delBtn = document.createElement('button');
    let modBtn = document.createElement('button');
    newItem.classList.add('Item');
    delBtn.id = 'delButton';
    modBtn.id = 'modButton';
    newItem.innerText = text;
    eval(catValue).appendChild(newItem);
    newItem.appendChild(delBtn);
    newItem.appendChild(modBtn);

    txtfield.value = '';
    console.log(text);

    return newItem;
    
}
})

// if(bool){
//     console.log(bool)
//     .addEventListener('mouseover', hoverFunction)
// }
function hoverFunction(){
    console.log("Hover");
    this.style.color = 'blue';
}