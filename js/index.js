let txtfield = document.getElementById('textInput')
let submitbtn = document.getElementById('btnInput')
let categorybtn = document.getElementById('categorySelector')
let cat1 = document.getElementById('category1')
let cat2 = document.getElementById('category2')
let cat3 = document.getElementById('category3')
submitbtn.addEventListener('click', () =>{
    let text = txtfield.value;
    let catValue = categorybtn.value;
//console.log(catValue);

    function createItemList(){
        let newItem = document.createElement('li');
        newItem.classList.add('.Item');
        newItem.innerText = text;
        console.log(text);
        eval(catValue).appendChild(newItem);
        txtfield.value = '';
    }
    if(text.length == 0){
        console.log("ecrit ton pèwou");
    }
    else
    {
        createItemList();  
    }
})
