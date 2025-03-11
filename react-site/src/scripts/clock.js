function updateClock() {
    const clockElement = document.querySelector(".clock");
    if (!clockElement) return;

    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    clockElement.textContent = `${hours}:${minutes} ${amPm}`;
}


setInterval(updateClock, 1000);
updateClock();