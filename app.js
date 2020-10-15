// function checkOffCell() {
//     window.onclick = e => {
//         if (e.target.classList.contains("board-cell")) {
//             e.target.classList.toggle("picked")
//         }
//     }
// }

document.addEventListener('click', function (event) {
    if (event.target.classList.contains("board-cell")) {
        event.target.classList.toggle("picked")
    }
});