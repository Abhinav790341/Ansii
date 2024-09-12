function updateCountdown() {
    const birthdayDate = new Date('2024-09-13T00:00:00'); // Set your target date and time
    const now = new Date();
    const timeDifference = birthdayDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = "Happy Birthday!";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);
