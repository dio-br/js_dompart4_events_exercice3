
let para = document.querySelectorAll('p')[0];
// para.setAttribute('class', 'text-style');

let i = 2
console.log(i % 2);
para.addEventListener('click', () => {
    if (i % 2 == 0) {
        para.style.cssText = "background-color:blue; color:gold"
        i++
    } else {
        para.style = ""
        i++
    }
});