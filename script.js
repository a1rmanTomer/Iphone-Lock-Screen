//dates and times
document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const randomHours = Math.floor(Math.random() * 24);
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const randomMinutes = Math.floor(Math.random() * 60);
        const timeString = `${hours}:${minutes}`;
        const alarmRanTime = `${randomHours}:${randomMinutes}`;
        const dateString = now.toDateString();
        
        const timeInput = document.getElementById('time');
        const dateInput = document.getElementById('date');
        const alarmRan = document.getElementById('alarm');

        if (alarmRan) {
            if (!alarmRan.value) {
                alarmRan.value = alarmRanTime;
            }
        }

        if (dateInput) {
            dateInput.value = dateString;
        }
        if (timeInput) {
            timeInput.value = timeString;
        }
    }

    setInterval(updateTime, 1000);
    updateTime();
});

//flashlight
var flash = false;
function flash(){
    if (flash = false){
        console.log("flash is on!");
        flash = true
    }
    else{
        console.log("flash is off!");
        flash = false;
    }
}

//camera
function openCamera(){
    console.log("Opening Camera");
}