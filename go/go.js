// Apenas para teste
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const getRandomLabel = (list) => {
    const idx = Math.floor(Math.random() * list.length)
    const label = list[idx]
    list.splice(idx, 1)

    return label;
}

const isBoardCenter = (gridSize, rowIdx, colIdx) => {
    const centers = [gridSize/2 - 1, gridSize/2]
    return centers.includes(rowIdx) && centers.includes(colIdx)
}

const gridSize = 6
const labels = []

for (let i = 0; i < gridSize*gridSize; i++) {
    labels.push(makeid(5))
}

const board = document.getElementById('board')
const boardTable = document.createElement('table')
const boardTableBody = document.createElement('tbody')

for (let i = 0; i < gridSize; i++) {
    const boardTableRow = document.createElement('tr')
    
    for (let j = 0; j < gridSize; j++) {
        const boardTableCell = document.createElement('td')

        if (!isBoardCenter(gridSize, i, j)) {
            boardTableCell.innerText = getRandomLabel(labels)
        } else {
            const dot = document.createElement('span')
            dot.className = 'dot'
            if (i === j) {
                dot.className += ' white-dot'
            } else {
                dot.className += ' black-dot'
            }
            boardTableCell.append(dot)
        }

        boardTableRow.append(boardTableCell)
    }

    boardTableBody.append(boardTableRow)
}


boardTable.append(boardTableBody)
board.append(boardTable)