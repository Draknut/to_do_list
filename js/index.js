let txtfield = document.getElementById('textInput')
let submitbtn = document.getElementById('btnInput')
let categorybtn = document.getElementById('categorySelector')
let cat1 = document.getElementById('category1')
let cat2 = document.getElementById('category2')
let cat3 = document.getElementById('category3')

submitbtn.addEventListener('click', () =>{

let text = txtfield.value;
let catValue = categorybtn.value;
console.log(catValue);
if(text.length == 0){

    console.log("ecrit ton pèwou");
}
else if(catValue == "cat1"){

    let newItem = document.createElement('li');
    newItem.classList.add('.Item');
    newItem.innerText = text;
    cat1.appendChild(newItem);
    console.log(text);
    txtfield.value = '';
    
}
else if(catValue == "cat2"){

    let newItem = document.createElement('li');
    newItem.classList.add('.Item');
    newItem.innerText = text;
    cat2.appendChild(newItem);
    console.log(text);
    txtfield.value = '';
    
}
else if(catValue == "cat3"){

    let newItem = document.createElement('li');
    newItem.classList.add('.Item');
    newItem.innerText = text;
    cat3.appendChild(newItem);
    console.log(text);
    txtfield.value = '';
    
}

})
