function ChangeCellColorOnClick() {
    let cells = document.querySelectorAll(".board-cell");
    cells.forEach(element => {
        element.addEventListener('click', function (event) {
            event.target.classList.toggle("selected-cell");
        })
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function CreateListOfRandomNumbers() {
    let numbers = [];
    const sizeOfGrid = 25;
    while (numbers.length < sizeOfGrid) {
        let randomNumber = getRandomInt(1, sizeOfGrid + 1);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber)
        }
    }
    return numbers;
}

function AssignCellContent() {
    let numbers = CreateListOfRandomNumbers();
    let cells = document.querySelectorAll(".board-cell");
    let counter = 0;
    const centrePosition = 12;
    cells.forEach(element => {
        if (counter == centrePosition) {
            element.innerHTML = "&#10033;";
            element.classList.add("selected-cell");
        }
        else {
            element.innerHTML = numbers[counter];
        }
        counter++;
    });
}

function HandleOnClickRandomNumberButton() {
    document.querySelector(".random-button").addEventListener('click', function () {
        let randNum = getRandomInt(1, 26);
        document.querySelector(".random-number").innerHTML = randNum;
    });
}

function ResetGame() {
    document.querySelector(".reset-button").addEventListener('click', function () {
        AssignCellContent();
    })
}

ChangeCellColorOnClick();
AssignCellContent();
HandleOnClickRandomNumberButton();
ResetGame();