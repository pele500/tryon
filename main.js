


window.addEventListener("load",(event)=>{
    document.getElementById('bee_shop').addEventListener('click',showInfobee);
    document.getElementById('fitness').addEventListener('click',showInfofit);
    document.getElementById('pod').addEventListener('click',showInfopod);
    document.getElementById('salon').addEventListener('click',showInfosal);
    document.getElementById('food').addEventListener('click',showInfofood);
    document.getElementById('uni').addEventListener('click',showInfouni);
})
const adding = () =>{
    document.getElementById('bee_shop').removeEventListener('click',showInfobee);
    document.getElementById('fitness').removeEventListener('click',showInfofit);
    document.getElementById('pod').removeEventListener('click',showInfopod);
    document.getElementById('salon').removeEventListener('click',showInfosal);
    document.getElementById('food').removeEventListener('click',showInfofood);
    document.getElementById('uni').removeEventListener('click',showInfouni);

}
const showInfobee = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">${event.target.id}</h1>`;
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
    document.getElementById('info').innerHTML += `<h1 id="text">${event.target.id}</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfofood = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">בוקר: 6:45 עד 8:00</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">צהריים: 11:45 עד 13:00</h1>`;
    document.getElementById('info').innerHTML += `<h1 id="text">ערב: 17:45 עד 19:00</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
    adding();
}
const showInfouni = (event) =>{
    document.getElementById('info').innerHTML += `<h1 id="text">מתחם האוניברסיטה מורכב ממספר מבנים המכיים כיתות מגוונות בגודלן ובמשאבן. בנוסף, באוניברסיטה ישנואודיטוריום בעל 80 כיסאות להעברת הרצאות קטנות וחד"ן שומרון לישיבות. הכיתות באוניברסיטה מחולקות למרכזים לכן ניתן לתאם אותן אל מול קה"די המרכזים או קצינת הצפה של הבסיס ולקבל עוד פרטים.</h1>`;
    document.getElementById('info').style.display = 'block';
    document.getElementById('x').addEventListener('click',close);
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
}