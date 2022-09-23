// function addTwo(a, b) {
//     return a+b;
// }
// function buttonClicked(a, b, addTwo) {
//     return addTwo(a, b)

// }
// console.log(buttonClicked(8, 3, addTwo))

// function addTwo(a, b) {
//     return a+b;
// }
// function multiTwo(a, b) {
//     return a*b
// }
// function compareTwo(a, b, addTwo) {
//     const add = addTwo(a,b)
//     const multi = multiTwo(a,b)
//     if (add<multi) {
//         console.log("multi is higher than add")
//     } else if(multi<add{
//         console.log("add is higher than multi")
//     } else {
//      console.log("equal")
//    }
// }
// compareTwo(1, 3, addTwo)

// const arr = [1, 2, 3]


// function addTwo(a) {
//     return a+2;
// }
// function myMap(arr, callback) {
//     for(let i = 0;i < arr.length; i++) {
//        arr[i] = callback(arr[i])
//     }
//     return arr
// }
// console.log(myMap(arr, addTwo))

// const arr = [1, 2, 3]

// function addTwo(a) {
//     return a + 2;
// }

// function forEach(arr, callback) {
//     for(let i = 0; i < arr.length; i++) {
//        callback(arr[i])
//     }
// }
// function myMap(arr, callback) {
//     const newArray = []

//     function cb(num) {
//         newArray.push(callback(num))
//     }
//     forEach(arr, cb)
//     return newArray
// }

// console.log(myMap(arr, addTwo))

// const arr = [1, 2, 3, 4, 5];

// function atLeastTwo(arr, callback) {
//     const truthies = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Boolean(arr[i])) {
//             truthies.push(arr[i]);
//         }
//     }
//     if (truthies.length > 1) {
//         truthies.forEach(function (value) {
//             callback(value);
//         });
//         return true
//     }
//     return false
// }

// const result = atLeastTwo(arr, addTwo);
// console.log(result);

// const prom = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject("davr");
//     }, 3000);

// });

// prom.then(function (value) {
//     console.log("then");
//     console.log(value);
// })
// .catch(function (error) {
//     console.log("catch");
//     console.log(error)
// })

async function fetcher() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${47.91667}&lon=${106.91667}&appid=3972e690c0a66980cb955f09908a89e6`
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        document.querySelector(
            "body"
        ).innerHTML = `<hi style="color: red"> ${error.message} </h1>`;
    }
}
fetcher();
const body = document.getElementsByTagName("body")
const container = document.createElement("div");
const navbar = document.createElement("div");
const text = document.createElement("div");
const date = document.createElement("div");
const country = document.createElement("div");
const text3 = document.createElement("div")
const text1 = document.createElement("div");
const text2 = document.createElement("div");

const main = document.createElement("img");
const graduss = document.createElement("div");
const switchi = document.createElement("button");

container.classList.add("container")
date.classList.add("date")
country.classList.add("country")
navbar.classList.add("navbar")
main.classList.add("main")
graduss.classList.add("graduss")
switchi.classList.add("switchi")
text1.classList.add("text1")
text2.classList.add("text2")

document.body.append(container)
container.append(navbar, main, graduss)
navbar.append(text)
text.append(date, country)
text3.append(text1, text2)
graduss.append(text3, switchi)

text1.innerText = "23˚"
text2.innerText = "Cloudy"
switchi.innerText = "Night"
date.innerText = "Sep 23 2022"
country.innerText = "Ulaanbaatar"



function dayNight() {
    console.log('ajiljin')
    if (switchi.innerText === "Night") {
        switchi.innerText = "Day"
        container.style.backgroundColor = "rgb(36, 36, 36)"
        text1.style.color = "white"
        text2.style.color = "white"
        date.style.color = "white"
        country.style.color = "white"
        switchi.style.backgroundColor = "white"
        switchi.style.color = "rgb(36, 36, 36)"
        text1.innerText = "10˚"
        graduss.style.padding = "20px"
        text3.style.display = "flex"
        text3.style.alignItems = "center"
        text3.style.flexDirection = "column"
        navbar.style.padding = "20px"
    } else if (switchi.innerText === "Day") {
        switchi.innerText = "Night"
        container.style.backgroundColor = "white"
        text1.style.color = "black"
        text2.style.color = "black"
        date.style.color = "black"
        country.style.color = "black"
        switchi.style.backgroundColor = "black"
        switchi.style.color = "white"
        text1.innerText = "23˚"
        graduss.style.padding = "20px"
        text3.style.display = "flex"
        text3.style.alignItems = "center"
        text3.style.flexDirection = "column"
        navbar.style.padding = "20px"
    }
}

switchi.addEventListener('click', dayNight)

if (switchi.innerText === "Night") {
    if (text2.innerText === "Cloudy") {
        main.src = "./Clouds.png"
    } else if (text2.innerText === "Rainy") {
        main.src = "./Rain.png"
    } else if (text2.innerText === "Clear") {
        main.src = "./Sun(1).png"
    } else if (text2.innerText === "Snowy") {
        main.src = "./Snow.png"
    } else if (text2.innerText === "Lightning rian") {
        main.src = "./Snow(1).png"
    } else if (text2.innerText === "Windy") {
        main.src = "./Wind.png"
    }
} 
if (switchi.innerText === "Day") {
    if (text2.innerText === "Cloudy") {
        main.src = "./Clouds(1).png"
    } else if (text2.innerText === "Rainy") {
        main.src = "./Rain(1).png"
    } else if (text2.innerText === "Clear") {
        main.src = "./Sun(3).png"
    } else if (text2.innerText === "Snowy") {
        main.src = "./Snow(2).png"
    } else if (text2.innerText === "Lightning rian") {
        main.src = "./Snow(3).png"
    } else if (text2.innerText === "Windy") {
        main.src = "./night.png"
    }
}