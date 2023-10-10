
    // setInterval(() => {
    // d = new Date(); //object of date()
    // hr = d.getHours();
    // min = d.getMinutes();
    // sec = d.getSeconds();
    // hr_rotation = 30 * hr + min / 2; //converting current time
    // min_rotation = 6 * min;
    // sec_rotation = 6 * sec;
    
    // hour.style.transform = `rotate(${hr_rotation}deg)`;
    // minute.style.transform = `rotate(${min_rotation}deg)`;
    // second.style.transform = `rotate(${sec_rotation}deg)`;
    // }, 1000);

    let hr = document.getElementById('hour');
    let min = document.getElementById('minute');
    let sec = document.getElementById('second');

    function displaytime(){
        let date = new Date();

        // getting hour, minute, second from date

        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let hr_rotation= 30*hr + min/2;
        let min_rotation=6*min;
        let sec_rotation=6*sec;

        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
    }
    setInterval(displaytime,1000);


