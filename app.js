

function test() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const year = date.getFullYear();
    document.querySelector('.year p') = year;
}
setInterval(test, 1000)