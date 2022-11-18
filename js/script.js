const clickBtn = document.getElementById("click")
const resetBtn = document.getElementById("reset")
const leftClicks = document.getElementById("clickleft")
const doubleLeftClicks = document.getElementById("doubleclickleft")
const rightClicks = document.getElementById("clickright")
const doubleRightClicks = document.getElementById("doubleright")
const midClicks = document.getElementById("clickmid")
const doubleMidClicks = document.getElementById("doublemid")

//inits
let leftClickCount = 0
let rightClickCount = 0
let midClickCount = 0
let doubleClickCount = 0  
let times = [0]  //array to store function start times
let diff = 0


clickBtn.addEventListener('pointerdown', e => {
    start = performance.now()       //logs function start time in milliseconds, in this case the exact time the button was clicked. 
    times.unshift(start)
    diff = times[0] - times[1]      // differentiates one click from the other, returns time in ms
    if (e.button === 0) {
        leftClickCount++
        leftClicks.textContent = leftClickCount
        e.stopPropagation()
        if(diff <= 80){            // if the difference in click times is less than/equal to 80, a double click is registered.
            doubleClickCount++
            doubleLeftClicks.textContent = doubleClickCount
        }
    }
    else if (e.button === 1) {
        midClickCount++
        midClicks.textContent = midClickCount
        e.stopPropagation()
        if (diff <= 80) {
            doubleClickCount++
            doubleMidClicks.textContent = doubleClickCount
        }
    }
    else if (e.button === 2) {
        rightClickCount++
        rightClicks.textContent = rightClickCount
        e.stopPropagation()
        if (diff <= 80) {
            doubleClickCount++
            doubleRightClicks.textContent = doubleClickCount
        }
    }
}) 

resetBtn.addEventListener('click', () => {
    leftClickCount = 0
    rightClickCount = 0
    midClickCount = 0
    doubleClickCount = 0
    leftClicks.textContent = leftClickCount
    midClicks.textContent = midClickCount
    rightClicks.textContent = rightClickCount
    doubleLeftClicks.textContent = doubleClickCount
    doubleMidClicks.textContent = doubleClickCount
    doubleRightClicks.textContent = doubleClickCount
})










