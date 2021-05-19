document.querySelector('.nav-burger').addEventListener('click', function(){
    document.querySelector('.nav-links').classList.toggle('show');

    var burger = document.querySelector('.nav-burger span')
    if (burger.innerHTML == "menu"){
        burger.innerHTML = "close"
    }
    else{
        burger.innerHTML = "menu"
    }
});