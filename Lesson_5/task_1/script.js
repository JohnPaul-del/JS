function chessBoard(){
    const board = document.querySelector('#board');
    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let rw = 0; rw <= 9; rw++){
        let row = document.createElement('DIV');
        for (let cl = 0; cl <= 9; cl++){
            let col = document.createElement('DIV');
            row.append(col);
            if (rw != 0 && rw != 9) {
                if (cl != 0 && cl != 9){
                    if (rw % 2 == cl % 2){
                        col.className = 'black';
                    };
                };
            };
            if (rw == 0 || rw == 9){
                if (cl != 0 && cl != 9){
                    col.textContent = cl;
                };
            };
            if (cl == 0 || cl == 9){
                if (rw != 0 && rw != 9) {
                    col.textContent = letter[rw-1];
                };
            };
            if (rw ==0 || rw == 9 || cl == 0 || cl == 9){
                col.className = 'white';
            };
        };
        board.append(row);
        row.className = 'outer';
    };
};

chessBoard();