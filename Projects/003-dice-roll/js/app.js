let counter = 0
function rollDice() {
    let ul = document.getElementById('list');
    let dice = document.getElementById('dice');
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    counter++
    switch (randomNumber) {
        case 1:
            dice.innerText = '⚀';
            break;
        case 2:
            dice.innerText = '⚁';
            break;
        case 3:
            dice.innerText = '⚂';
            break;
        case 4:
            dice.innerText = '⚃';
            break;
        case 5:
            dice.innerText = '⚄';
            break;
        case 6:
            dice.innerText = '⚅';
            break;
    }
    let li = document.createElement('li');
    li.innerHTML = `<li><span id="liText">Roll ${counter}:</span><span id="liDice">${dice.innerText}</span></li>`
    ul.appendChild(li)
}