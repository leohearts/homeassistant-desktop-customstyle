async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
(async ()=>{

s = document.createElement('style')
s.innerHTML = `
html {
  overflow:   scroll;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}`
document.head.append(s)

let setStyle = (e) => {
    if (e.style) {
        // e.style.background = 'transparent'
        e.style.backgroundColor = 'transparent'
    }
}
let setStyleCard = (e) => {
    if (e.style) {
        // e.style.background = 'transparent'
        e.style.backgroundColor = '#ffe5f299'
    }
}

let x = (d) => {
    if (d.tagName == 'HA-CARD') {
        setStyleCard(d)
        return
    }
    if (d.className == 'header'){
        setStyle(d)
    }
    d.childNodes.forEach(e=>{
        x(e)
        // setStyle(e)
    })
    if (d.shadowRoot) {
        setStyle(d)
        d.shadowRoot.childNodes.forEach(e=>{
            x(e)
            // setStyle(e)
        })
    }
}

await sleep(1000)
x(document.body)
document.querySelector('html').style.backgroundColor = 'transparent'
document.addEventListener('click', async ()=>{await sleep(100);x(document.body)})
// setStyle(document.body)
// setStyle(document.querySelector('html') )
})()
