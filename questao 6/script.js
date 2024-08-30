const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const button = document.getElementById('changeButton');


function changeClasses() {
    div1.classList.add('box1-new');


    div2.classList.remove('box2');


    div3.classList.toggle('box3-new');
}


button.addEventListener('click', changeClasses);
