document.addEventListener('click', function (event) {
    if (event.target.classList.contains("board-cell")) {
        event.target.classList.toggle("picked")
    }
});

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
    var counter = 0;
    var centrePosition = 12;
    cells.forEach(element => {
        if (counter == centrePosition) {
            element.innerHTML = "&#10033;"
        }
        else {
            element.innerHTML = numbers[counter];
        }
        counter++;
    });
}

AssignCellContent();