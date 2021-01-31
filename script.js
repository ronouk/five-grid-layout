const layout1 = document.getElementById('layout-1');
layout1.addEventListener('click', function(){
    document.getElementById('layout-1-item').style.order=1;
    document.getElementById('layout-2-item').style.order=2;
    document.getElementById('layout-3-item').style.order=3;
    document.getElementById('layout-4-item').style.order=4;
    document.getElementById('layout-5-item').style.order=5;
})

const layout2 = document.getElementById('layout-2');
layout2.addEventListener('click', function(){
    document.getElementById('layout-1-item').style.order=2;
    document.getElementById('layout-2-item').style.order=1;
    document.getElementById('layout-3-item').style.order=3;
    document.getElementById('layout-4-item').style.order=4;
    document.getElementById('layout-5-item').style.order=5;
})

const layout3 = document.getElementById('layout-3');
layout3.addEventListener('click', function(){
    document.getElementById('layout-1-item').style.order=2;
    document.getElementById('layout-2-item').style.order=3;
    document.getElementById('layout-3-item').style.order=1;
    document.getElementById('layout-4-item').style.order=4;
    document.getElementById('layout-5-item').style.order=5;
})

const layout4 = document.getElementById('layout-4');
layout4.addEventListener('click', function(){
    document.getElementById('layout-1-item').style.order=2;
    document.getElementById('layout-2-item').style.order=3;
    document.getElementById('layout-3-item').style.order=4;
    document.getElementById('layout-4-item').style.order=1;
    document.getElementById('layout-5-item').style.order=5;
})

const layout5 = document.getElementById('layout-5');
layout5.addEventListener('click', function(){
    document.getElementById('layout-1-item').style.order=2;
    document.getElementById('layout-2-item').style.order=3;
    document.getElementById('layout-3-item').style.order=4;
    document.getElementById('layout-4-item').style.order=5;
    document.getElementById('layout-5-item').style.order=1;
})