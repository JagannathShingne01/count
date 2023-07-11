const endDate = "01 Jan 2024 12:00 AM"

document.getElementById("end-date").innerText = endDate;
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000; //mili sec converted into sec

    if (diff < 0)return;

    inputs[0].value = Math.floor(diff / 3600   / 24); //converted into days
    inputs[1].value = Math.floor((diff / 3600) % 24); //converted into hours
    inputs[2].value = Math.floor((diff / 60) % 60); //converted into min
    inputs[3].value = Math.floor((diff) % 60); //converted into sec

}

clock()

setInterval(
    () => {
        clock()

    },1000
)