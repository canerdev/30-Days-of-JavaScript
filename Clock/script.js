function clock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let timeZone = 'AM';

    if(h > 12) {
        h = h - 12;
        timeZone = "PM";
    } else if (h == 12) {
        h = 0;
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    
    let time = h + '.' + m + '.' + s + ' ' + timeZone;
    console.log(time);
    setTimeout(clock, 1000)
}

clock()

