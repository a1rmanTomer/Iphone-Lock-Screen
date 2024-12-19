document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        const dateString = now.toDateString();
        
        const timeInput = document.getElementById('time');
        const dateInput = document.getElementById('date');
        if (dateInput) {
            dateInput.value = dateString;
        }
        if (timeInput) {
            timeInput.value = timeString;
        }
    }

    setInterval(updateTime, 1000);
    updateTime(); // Initial call to set the time immediately
});

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

function openCamera(){
    console.log("Opening Camera");
}