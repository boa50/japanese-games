let kanjis = `一人 二人 三日 四日 五日 六日 七日 八日 九日 十日 百万 千万 万年筆 円 明日 毎週 月曜日 今年 去年 時計 時間 十分 自分  午前　名前 午後 今晩 先週 今朝 先生 来る 来月 半分 毎日 曜日 人々 男の子 女の子 子供  母  父 友達  火曜日 水曜日 木曜日 土曜日 金曜日 日本語 川 花火 元気 生徒 魚 天気 空 山 雨 電気 電車 英語 耳 手紙 足 目 出口  名前`.trim()

const kanjisTextArea = document.getElementById('kanjis')
if (kanjisTextArea.value === '') {
    kanjisTextArea.value = kanjis
}

const getRandomLabel = (list) => {
    const idx = Math.floor(Math.random() * list.length)
    const label = list[idx]
    list.splice(idx, 1)
    
    return label;
}

const getLabels = (gridSize) => {
    kanjisList = kanjisTextArea.value.split(/\s+/)
    const labels = []
    for (let i = 0; i < gridSize; i++) {
        labels.push([])
        for (let j = 0; j < gridSize; j++) {
            if (!isBoardCenter(gridSize, i, j)) {
                const kanji = getRandomLabel(kanjisList)
                labels[i].push(kanji ? kanji : '')
            } else {
                labels[i].push('')
            }
        }
    }
    return labels
}
