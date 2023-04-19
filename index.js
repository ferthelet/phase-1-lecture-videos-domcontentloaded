document.addEventListener('DOMContentLoaded', () => {
    console.log('after DOM is loaded')
    console.log(document.querySelector('div')); // show it up
})

console.log('before DOM is loaded')
console.log(document.querySelector('div')); // wont show it up