let body = document.getElementsByTagName('body');

document.getElementById('basket').onclick = function () {
    document.getElementById('dialog-wrapper').style.display = 'flex';
    body[0].style.overflow = 'hidden';
    console.log(body[0]);
};
document.getElementById('btn-close-dialog').onclick = function (e) {
    document.getElementById('dialog-wrapper').style.display = 'none';
    body[0].style.overflow = 'auto';
};


/*-------------------------------------------------------*/

let btnDecrement = document.getElementById('btnDecrement');
let btnIncrement = document.getElementById('btnIncrement');
let countItem = document.getElementById('countItem');
let priceItem = document.getElementById('priceItem');
let myCount = 1;
let myTovar = 75;


btnDecrement.onclick = function () {
    if(myCount < 0){
        btnDecrement.disabled;
    }
    myCount--;
    myTovar -= 75;
    countItem.innerHTML = myCount;
    priceItem.innerHTML = myTovar + '<span>грн</span>';
};

btnIncrement.onclick = function (){
    myCount++;
    myTovar += 75;
    countItem.innerHTML = myCount;
    priceItem.innerHTML = myTovar + '<span>грн</span>';
};


countItem.innerHTML = myCount;
priceItem.innerHTML = myTovar + '<span>грн</span>';



