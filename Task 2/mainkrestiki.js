// Task 2
// Tic-Tac-Toe Checker
// 3x3 array, 
// 0 = empty, 
// 1 = "X"
// 2 = "O"

// We want our function to return:
// 	-1 = not finished (there are empty spots),
// 	1 = "X" won,
// 	2 = "O" won,
// 	0 = a draw.

let fieldArray = [
     [2, 2, 2],
     [1, 0, 0],
     [1, 0, 0],
];

checkHorisontal();
checkVertical();
checkDiagonals();
  
function checkHorisontal(){
    for(let i = 0; i < 3; i++){
        checkWin(fieldArray[i][0], fieldArray[i][1], fieldArray[i][2]);
    }
}

function checkVertical(){
    for(let i = 0; i < 3; i++){
        checkWin(fieldArray[0][i], fieldArray[1][i], fieldArray[2][i]);
    }
}

function checkDiagonals(){
    checkWin(fieldArray[0][0], fieldArray[1][1], fieldArray[2][2]);
    checkWin(fieldArray[0][2], fieldArray[1][1], fieldArray[2][0]);
}



function checkWin(first, second, third){
 if(first == second){
        if(second == third) {
            winner(third);
        }
    }
}


function winner(value){
    if(value == -1){
        console.log("Still playing!")
    }else if(value == 0){
        console.log("Draw!");
    }
    else if (value == 1){
        console.log("Winner X!")
    }
    else if (value == 2){
        console.log("Winner O!");
    }
}










