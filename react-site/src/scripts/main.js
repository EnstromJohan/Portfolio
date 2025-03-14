import { updateClock } from "./clock.js";

document.addEventListener("DOMContentLoaded", () => {
  setInterval(updateClock, 1000);
  updateClock();
});
