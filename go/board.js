const isBoardCenter = (gridSize, rowIdx, colIdx) => {
    const centers = [gridSize/2 - 1, gridSize/2]
    return centers.includes(rowIdx) && centers.includes(colIdx)
}

const makeDot = (color) => {
    const dot = document.createElement('span')
    dot.className = 'dot'
    if (color === 'white') {
        dot.classList.add('white-dot')
    } else {
        dot.classList.add('black-dot')
    }

    return dot
}

const changeDotColor = (element) => {
    const dot = element.firstChild
    const classList = element.firstChild.classList

    if (classList.contains('white-dot')) {
        dot.classList.remove('white-dot')
        dot.classList.add('black-dot')
    } else {
        dot.classList.remove('black-dot')
        dot.classList.add('white-dot')
    }
}

const countDots = () => {
    const blackPoints = document.getElementById('black-points')
    const whitePoints = document.getElementById('white-points')

    blackPoints.innerText = document.getElementsByClassName('black-dot').length
    whitePoints.innerText = document.getElementsByClassName('white-dot').length
}

const manageCell = (element) => {
    if (element.innerText !== '') {
        element.innerText = ''
        element.append(makeDot('white'))
    } else {
        changeDotColor(element)
    }

    countDots()
}