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
    let delBtn = document.createElement('button');
    let modBtn = document.createElement('button');
    newItem.classList.add('Item');
    modBtn.id = 'modButton';
    delBtn.id = 'delButton';
    newItem.innerText = text;
    eval(catValue).appendChild(newItem);
    newItem.appendChild(modBtn);
    newItem.appendChild(delBtn);

    txtfield.value = '';
    itemList.push(newItem);
    console.log(itemList);
    itemList.forEach(element => element.addEventListener('mouseover', hoverFunction));
    itemList.forEach(element => element.addEventListener('mouseout', outFunction));
    modBtn.addEventListener('click', modify);
    delBtn.addEventListener('click', close);

}
})


function hoverFunction(){
    console.log("Hover");
    let child = this.children;
    child[0].style.display = "flex";
    child[1].style.display = "flex";
    console.log(child); 
}
function outFunction()
{
    let child = this.children;
    child[0].style.display = "none";
    child[1].style.display = "none";
}

function close(){
    let close = document.getElementById("delButton");
        console.log("close")
        let div = this.parentElement;
        div.style.display = "none";
      
}

function modify(){
    
}


