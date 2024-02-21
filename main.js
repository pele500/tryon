


window.addEventListener("load",(event)=>{
    document.getElementById('bee_shop').addEventListener('click',showInfobee);
    document.getElementById('fitness').addEventListener('click',showInfofit);
    document.getElementById('pod').addEventListener('click',showInfopod);
    document.getElementById('salon').addEventListener('click',showInfosal);
    document.getElementById('food').addEventListener('click',showInfofood);
    document.getElementById('uni').addEventListener('click',showInfouni);
    document.getElementById('btnMali').addEventListener('click',showTree);
})
const adding = () =>{
    document.getElementById('bee_shop').removeEventListener('click',showInfobee);
    document.getElementById('fitness').removeEventListener('click',showInfofit);
    document.getElementById('pod').removeEventListener('click',showInfopod);
    document.getElementById('salon').removeEventListener('click',showInfosal);
    document.getElementById('food').removeEventListener('click',showInfofood);
    document.getElementById('uni').removeEventListener('click',showInfouni);
    document.getElementById('btnMali').removeEventListener('click',showTree);

}
const showInfobee = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="textB">כוורת</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text"> 8:15 עד 19:45א-ה:</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">ה: 8:15 עד 16:30</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="textM">סטקיה</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">א-ד: 11:30 עד 19:00</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">ה: סגור</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="textD"> חלביה</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">א-ד: 8:30 עד 21:00</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">ה: 8:30 עד 15:00</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfofit = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">${event.target.id}</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfopod = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">אולם רווחה הינו האולם הגדול ביותר בבסיס מל"י 500, הוא מכיל כ400 כיסאות ובמה להעברת הרצאות/ פורומים וכדומה.</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfosal = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">יום א: 13:30 עד 17:30</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">19:00 עד 20:30</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">יום ב-ד: 8:00 עד 11:30</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">13:30 עד 17:30</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">19:00 עד 20:30</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">יום ה: 8:00 עד 11:30</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">13:00 עד 14:30</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfofood = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">שעות פתיחה</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">בוקר: 6:45 עד 8:00</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">צהריים: 11:45 עד 13:00</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">ערב: 17:45 עד 19:00</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfouni = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">מתחם האוניברסיטה מורכב ממספר מבנים המכיים כיתות מגוונות בגודלן ובמשאבן. בנוסף, באוניברסיטה ישנו אודיטוריום בעל 80 כיסאות להעברת הרצאות קטנות וחד"ן שומרון לישיבות. הכיתות באוניברסיטה מחולקות למרכזים לכן ניתן לתאם אותן אל מול קה"די המרכזים או קצינת הצפה של הבסיס ולקבל עוד פרטים.</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showTree = () =>{
    document.getElementById('treeMali').style.display = 'block';
    document.getElementById('x2').addEventListener('click',close2);
    adding();
}
const close = () =>{
    document.getElementById('info').innerHTML = `<img src="./assets/x.png" alt="x" id="x">`;
    document.getElementById('info').style.display = 'none';
    document.getElementById('x').removeEventListener('click',close);
    document.getElementById('bee_shop').addEventListener('click',showInfobee);
    document.getElementById('fitness').addEventListener('click',showInfofit);
    document.getElementById('pod').addEventListener('click',showInfopod);
    document.getElementById('salon').addEventListener('click',showInfosal);
    document.getElementById('food').addEventListener('click',showInfofood);
    document.getElementById('uni').addEventListener('click',showInfouni);
    document.getElementById('btnMali').addEventListener('click',showTree);
}
const close2 = () =>{
    document.getElementById('treeMali').style.display = 'none';
    document.getElementById('x').removeEventListener('click',close2);
    document.getElementById('bee_shop').addEventListener('click',showInfobee);
    document.getElementById('fitness').addEventListener('click',showInfofit);
    document.getElementById('pod').addEventListener('click',showInfopod);
    document.getElementById('salon').addEventListener('click',showInfosal);
    document.getElementById('food').addEventListener('click',showInfofood);
    document.getElementById('uni').addEventListener('click',showInfouni);
    document.getElementById('btnMali').addEventListener('click',showTree);
}