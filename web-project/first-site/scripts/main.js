let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/canada-leaf.png') {
        myImage.setAttribute('src','images/brazil-flag.png');
    }
    else {
        myImage.setAttribute('src','images/canada-leaf.png');
    };
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if (!myName || myName === null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Canada is cold, ' + myName;
    };
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Canada is cold, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}