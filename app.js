const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', function () { 
    const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor
    p.innerText = "The values are: "+ newColor
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r + g + b <= 320) {
        document.body.style.color = "yellow"
    } else document.body.style.color = "black"
    return `rgb(${r}, ${g}, ${b})`
}


