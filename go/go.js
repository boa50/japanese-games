const montarTabela = () => {
    const gridSize = getGridSize()
    const labels = getLabels(gridSize)

    const board = document.getElementById('board')
    board.innerHTML = ''
    const boardTable = document.createElement('table')
    const boardTableBody = document.createElement('tbody')
    
    for (let i = 0; i < gridSize; i++) {
        const boardTableRow = document.createElement('tr')
        
        for (let j = 0; j < gridSize; j++) {
            const boardTableCell = document.createElement('td')
    
            if (!isBoardCenter(gridSize, i, j)) {
                boardTableCell.innerText = labels[i][j]
            } else {
                if (i === j) {
                    boardTableCell.append(makeDot('white'))
                } else {
                    boardTableCell.append(makeDot('black'))
                }
            }
            
            boardTableCell.onclick = () => {manageCell(boardTableCell)}
            boardTableRow.append(boardTableCell)
        }
    
        boardTableBody.append(boardTableRow)
    }
    
    boardTable.append(boardTableBody)
    board.append(boardTable)
    countDots()
}

montarTabela()

document.getElementById('btn-misturar').onclick = montarTabela
document.getElementById('black-select').onclick = () => {selectColor('black')}
document.getElementById('white-select').onclick = () => {selectColor('white')}