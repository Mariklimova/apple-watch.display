

function getTime() {
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    const year = date.getFullYear().toString();



    hours.length < 2 ? hours = '0' + hours : hours;
    minutes.length < 2 ? minutes = '0' + minutes : minutes;
    seconds.length < 2 ? seconds = '0' + seconds : seconds;
    month.length < 2 ? month = '0' + month : month;
    day.length < 2 ? day = '0' + day : day;


    document.querySelector('.year p').textContent = day + ' ' + month + ' ' + year;
    document.querySelector('.time').textContent = hours + ':' + minutes + ':' + seconds;
}
setInterval(getTime, 1000)