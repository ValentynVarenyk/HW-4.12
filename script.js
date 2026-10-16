
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.targetDate = targetDate;

    this.days = this.timer.querySelector('[data-value="days"]');
    this.hours = this.timer.querySelector('[data-value="hours"]');
    this.mins = this.timer.querySelector('[data-value="mins"]');
    this.secs = this.timer.querySelector('[data-value="secs"]');

    this.start();
  }

  start() {
    this.updateTimer();
    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const time = this.targetDate - Date.now();

    if (time <= 0) {
      this.days.textContent = '00';
      this.hours.textContent = '00';
      this.mins.textContent = '00';
      this.secs.textContent = '00';
      clearInterval(this.intervalId);
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor(
      (time % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secs = Math.floor(
      (time % (1000 * 60)) / 1000
    );

    this.days.textContent = String(days).padStart(2, '0');
    this.hours.textContent = String(hours).padStart(2, '0');
    this.mins.textContent = String(mins).padStart(2, '0');
    this.secs.textContent = String(secs).padStart(2, '0');
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2027'),
});
