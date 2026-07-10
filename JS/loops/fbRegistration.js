let day = document.getElementById("day");
for(let i = 1; i < 32; i++){
    day.innerHTML += `<option>${i}</option>`;
}


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = document.getElementById("month");
for(let i = 0; i < months.length; i++){
    month.innerHTML += `<option>${months[i]}</option>`;
}


let year = document.getElementById("year");
for(let i = 2026; i > 1969; i--){
    year.innerHTML += `<option>${i}</option>`;
}

