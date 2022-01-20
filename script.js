let btn = document.querySelectorAll('.btn');
let banner = document.querySelector('#banner');

btn[0].onclick = () => {
    banner.src = "images/pic1.png";
    animation();
    btn[0].classList.add("active");
}

btn[1].onclick = () => {
    banner.src = "images/pic2.png";
    animation();
    btn[1].classList.add("active");
}

btn[2].onclick = () => {
    banner.src = "images/pic3.png";
    animation();
    btn[2].classList.add("active");

}

function animation(){
    banner.classList.add("zoom");
    setTimeout(function() {
        banner.classList.remove("zoom");
    },500);

    for(b of btn){
        b.classList.remove("active");
    }
}

// dark mood -------->

let sw = document.querySelector('.sw');
let bol = document.querySelector('.bol');

sw.onclick = () =>{
    bol.classList.toggle('active');
    document.body.classList.toggle('active');
}