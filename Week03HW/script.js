// 1* classic for loop, log each item to the console

// let menu = ["pasta", "pizza", "burger"]
// for (let i=0, ii=menu.length; i<ii; i++) {
//     console.log(i, menu[i]);
// }

// 2* for of loop, write each item in your array to the dom

let menu = ["pasta", "pizza", "burger"];

let allmenu = "";
for (let name of menu) {
    allmenu += name + "<br>";
}

document.getElementById('menu-list').innerHTML = allmenu;

// 3* create and object with at least 3 properties
// 4* using for in loop, log each properties to your console

let object = {
    food: "pasta",
    restaurant: "Forma Pasta Factory",
    location: "14 Bedford"
}

for ( details in object) {
    console.log(details, object[details])
}

// let menu = [
//     {food: "pasta", restaurant: "Forma Pasta Factory", location: "14 Bedford"},
//     {food: "pizza", restaurant: "Joe's Pizza", location: "216 Bedford Ave"},
//     {food: "burger", restaurant: "DuMont Burger", location: "314 Bedford Ave"}
// ];

// const p = document.getElementById('menu-list');

// function listItem(m) {
//     let li = document.createElement('li');
//     li.innerHTML = m.food + " from " + m.restaurant + " at " + m.location; 
//     p.appendChild(li);
// }

// for (let m of menu) {
//     listItem(m)
// }
