let name_1 = prompt('Enter player 1 name for symbol "X":');
let name_2 = prompt('Enter player 2 name for symbol "O":');
document.querySelector('#p1-name').textContent = name_1;
document.querySelector('#p2-name').textContent = name_2;
document.querySelector('#start').textContent = `The game starts with symbol 'X' which is player: ${name_1}`;
const squares = document.querySelectorAll(".square");
let last = 'O';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWin = (player) => {
    return winningCombinations.some(combination => {
        return combination.every(index => squares[index].textContent === player);
    });
};

const checkDraw = () => {
    return [...squares].every(square => square.textContent !== '');
};

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.textContent === '' && !checkWin('X') && !checkWin('O')) {
            if (last === 'O') {
                square.textContent = 'X';
                last = 'X';
            } else {
                square.textContent = 'O';
                last = 'O';
            }

            if (checkWin('X')) {
                document.querySelector('#winner').textContent = `${name_1} (X) wins!`;
            } else if (checkWin('O')) {
                document.querySelector('#winner').textContent = `${name_2} (O) wins!`;
            } else if (checkDraw()) {
                document.querySelector('#winner').textContent = `It's a draw!`;
            }
        }
    });
});
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    last = 'O';
    squares.forEach(square => square.textContent = '');
    document.querySelector('#winner').textContent = '';
    document.querySelector('#start').textContent = `The game starts with symbol 'X' which is player: ${name_1}`;
});