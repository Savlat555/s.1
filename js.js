document.body.innerHTML = `
	<main class="clock-page">
		<p class="clock-kicker">VAQTNI HIS QILING</p>
		<h1>Jonli soat</h1>
		<div class="time-display" role="timer" aria-label="Joriy vaqt">
			<span id="hours">00</span>
			<span class="time-separator" aria-hidden="true">:</span>
			<span id="minutes">00</span>
			<span class="time-separator" aria-hidden="true">:</span>
			<span id="seconds">00</span>
		</div>
		<div class="time-labels" aria-hidden="true">
			<span>SOAT</span>
			<span>DAQIQA</span>
			<span>SONIYA</span>
		</div>
		<p class="date-display" id="date-display"></p>
		<div class="clock-footer">
			<span class="live-dot" aria-hidden="true"></span>
			<span>Mahalliy vaqt</span>
		</div>
	</main>

	<div class="ad-overlay" id="ad-overlay" hidden>
		<section class="ad-panel" role="dialog" aria-modal="true" aria-labelledby="ad-title">
			<span class="ad-label">REKLAMA</span>
			<button class="ad-close" id="ad-close" type="button" aria-label="Reklamani yopish" hidden>&times;</button>
			<p class="ad-eyebrow">YANGI ODAT</p>
			<h2 id="ad-title">Har soniya yangi imkoniyat.</h2>
			<p class="ad-copy">Vaqtingizni qadrlang. Bugun o‘zingiz uchun yangi maqsad tanlang.</p>
			<div class="ad-stamp" aria-hidden="true">VAQT<br>QADRLI</div>
		</section>
	</div>
`;

const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const dateElement = document.querySelector("#date-display");
const adOverlay = document.querySelector("#ad-overlay");
const closeButton = document.querySelector("#ad-close");
const weekdayNames = ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"];
const monthNames = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];

function updateClock() {
	const now = new Date();

	hoursElement.textContent = String(now.getHours()).padStart(2, "0");
	minutesElement.textContent = String(now.getMinutes()).padStart(2, "0");
	secondsElement.textContent = String(now.getSeconds()).padStart(2, "0");
	dateElement.textContent = `${weekdayNames[now.getDay()]}, ${now.getDate()}-${monthNames[now.getMonth()]} ${now.getFullYear()}`;
}

function closeAd() {
	adOverlay.hidden = true;
	closeButton.hidden = true;
}

updateClock();
window.setInterval(updateClock, 1000);

window.setTimeout(() => {
	adOverlay.hidden = false;

	window.setTimeout(() => {
		closeButton.hidden = false;
		closeButton.focus();
	}, 5000);
}, 5000);

closeButton.addEventListener("click", closeAd);

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && !adOverlay.hidden && !closeButton.hidden) {
		closeAd();
	}
});
 