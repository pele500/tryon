


window.addEventListener("load",(event)=>{
    document.getElementById('bee_shop').addEventListener('click',showInfobee);
    document.getElementById('hospital').addEventListener('click',showInfohos);
    document.getElementById('fitness').addEventListener('click',showInfofitness);
    document.getElementById('salon').addEventListener('click',showInfosal);
    document.getElementById('food').addEventListener('click',showInfofood);
    document.getElementById('uni').addEventListener('click',showInfouni);
    document.getElementById('btnMali').addEventListener('click',showTree);
})
const adding = () =>{
    document.getElementById('bee_shop').removeEventListener('click',showInfobee);
    document.getElementById('hospital').removeEventListener('click',showInfohos);
    document.getElementById('fitness').removeEventListener('click',showInfofitness);
    document.getElementById('salon').removeEventListener('click',showInfosal);
    document.getElementById('food').removeEventListener('click',showInfofood);
    document.getElementById('uni').removeEventListener('click',showInfouni);
    document.getElementById('btnMali').removeEventListener('click',showTree);

}
const showInfobee = (event) =>{
    document.getElementById('showInfo').innerHTML = `<img src="./assets/graphic/infoBee.png" alt="infoBee">`;
    document.getElementById('showInfo').innerHTML += `<div id="x"></div>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('showInfo').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfohos = (event) =>{
    document.getElementById('showInfo').innerHTML = `<img src="./assets/graphic/infoHos.png" alt="infohos">`;
    document.getElementById('showInfo').innerHTML += `<div id="x"></div>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('showInfo').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfofitness = (event) =>{
    document.getElementById('showInfo').innerHTML = `<img src="./assets/graphic/infofit.png" alt="infofit">`;
    document.getElementById('showInfo').innerHTML += `<div id="x"></div>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('showInfo').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfosal = (event) =>{
    document.getElementById('showInfo').innerHTML = `<img src="./assets/graphic/infoSal.png" alt="infoSal">`;
    document.getElementById('showInfo').innerHTML += `<div id="x"></div>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('showInfo').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfofood = (event) =>{
    document.getElementById('showInfo').innerHTML = `<img src="./assets/graphic/infoFood.png" alt="infoFood">`;
    document.getElementById('showInfo').innerHTML += `<div id="x"></div>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('showInfo').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfouni = (event) =>{
    document.getElementById('showInfo').innerHTML = `<img src="./assets/graphic/infoUni.png" alt="infoUni">`;
    document.getElementById('showInfo').innerHTML += `<div id="x"></div>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('showInfo').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showTree = () =>{
    document.getElementById('treeMali').style.display = 'block';
    document.getElementById('lomda').style.display = 'none';
    document.getElementById('back').addEventListener('click',close2);
    adding();
}
const close = () =>{
    document.getElementById('info').style.display = 'none';
    document.getElementById('showInfo').style.display = 'none';
    document.getElementById('x').removeEventListener('click',close);
    document.getElementById('bee_shop').addEventListener('click',showInfobee);
    document.getElementById('hospital').addEventListener('click',showInfohos);
    document.getElementById('fitness').addEventListener('click',showInfofitness);
    document.getElementById('salon').addEventListener('click',showInfosal);
    document.getElementById('food').addEventListener('click',showInfofood);
    document.getElementById('uni').addEventListener('click',showInfouni);
    document.getElementById('btnMali').addEventListener('click',showTree);
}
const close2 = () =>{
    document.getElementById('lomda').style.display = 'block';
    document.getElementById('treeMali').style.display = 'none';
    document.getElementById('back').removeEventListener('click',close2);
    document.getElementById('bee_shop').addEventListener('click',showInfobee);
    document.getElementById('hospital').addEventListener('click',showInfohos);
    document.getElementById('fitness').addEventListener('click',showInfofitness);
    document.getElementById('salon').addEventListener('click',showInfosal);
    document.getElementById('food').addEventListener('click',showInfofood);
    document.getElementById('uni').addEventListener('click',showInfouni);
    document.getElementById('btnMali').addEventListener('click',showTree);
}