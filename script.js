const audio = document.getElementById('audio');
const audio2 = document.getElementById("audio2");
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
let currentTrack = 0;

audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';
});

progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    audio.currentTime = (clickX / width) * audio.duration;
});
const playBtn = document.getElementById('play-btn');

progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    audio.currentTime = (clickX / width) * audio.duration;
}); 

const timeDisplay = document.getElementById("timeDisplay");

audio.addEventListener("timeupdate", () => {
    const current = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = `${current} / ${duration}`;
});

function formatTime(time) {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}

function play() {
    const audio = document.getElementById("audio");
    const button = document.getElementById("play-btn");

    if (audio.paused) {
        audio.play();
        button.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        button.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function rnbPlaylist() {
    window.location.href = "rnbPlaylist.html";
}

function popPlaylist() {
    window.location.href = "popPlaylist.html";
}

function amapianoPlaylist() {
    window.location.href = "amapianoPlaylist.html";
}

function housePlaylist() {
    window.location.href = "housePlaylist.html";
}

function backToGenre() {
    window.location.href = "index.html";
}

function backToRnbPlaylist() {
    window.location.href = "rnbPlaylist.html";
}

function backToPopPlaylist() {
    window.location.href = "popPlaylist.html";
}

function backToAmapianoPlaylist() {
    window.location.href = "amapianoPlaylist.html";
}

function backToHousePlaylist() {
    window.location.href = "housePlaylist.html";
}

function wyhNext() {
    window.location.href = 'getyou.html';
}

function wyhPrevious() {
    window.location.href = 'sorrows.html';
}

function gyNext() {
    window.location.href = 'whiteferrari.html';
}

function gyPrevious() {
    window.location.href = 'whatyouheard.html';
}

function wfNext() {
    window.location.href = 'notyoutoo.html';
}

function wfPrevious() {
    window.location.href = 'getyou.html';
}

function nytNext() {
    window.location.href = 'sorrows.html';
}

function nytPrevious() {
    window.location.href = 'whiteferrari.html';
}

function sbtNext() {
    window.location.href = 'whatyouheard.html';
}

function sbtPrevious() {
    window.location.href = 'notyoutoo.html';
}

function toiNext() {
    window.location.href = 'poeticjustice.html';
}

function toiPrevious() {
    window.location.href = 'shottaflow.html';
}

function pjNext() {
    window.location.href = 'sickomode.html';
}

function pjPrevious() {
    window.location.href = 'thickofit.html';
}

function smNext() {
    window.location.href = 'norolemodelz.html';
}

function smPrevious() {
    window.location.href = 'poeticjustice.html';
}

function nrmNext() {
    window.location.href = 'shottaflow.html';
}

function nrmPrevious() {
    window.location.href = 'sickomode.html';
}

function sfNext() {
    window.location.href = 'thickofit.html';
}

function sfPrevious() {
    window.location.href = 'norolemodelz.html';
}

function iNext() {
    window.location.href = 'songcry.html';
}

function iPrevious() {
    window.location.href = 'jola.html';
}

function scNext() {
    window.location.href = 'birimarung.html';
}

function scPrevious() {
    window.location.href = 'inhliziyo.html';
}

function bmNext() {
    window.location.href = 'liyoshona.html';
}

function bmPrevious() {
    window.location.href = 'songcry.html';
}

function lNext() {
    window.location.href = 'jola.html';
}

function lPrevious() {
    window.location.href = 'birimarung.html';
}

function jNext() {
    window.location.href = 'inhliziyo.html';
}

function jPrevious() {
    window.location.href = 'liyoshona.html';
}

function sNext() {
    window.location.href = 'wedanceagain.html';
}

function sPrevious() {
    window.location.href = 'pluto.html';
}

function wdaNext() {
    window.location.href = 'lovesong28.html';
}

function wdaPrevious() {
    window.location.href = 'lovesong28.html';
}

function ls28Next() {
    window.location.href = 'heavenlysent.html';
}

function ls28Previous() {
    window.location.href = 'wedanceagain.html';
}

function hsNext() {
    window.location.href = 'pluto.html';
}

function hsPrevious() {
    window.location.href = 'lovesong28.html';
}

function pNext() {
    window.location.href = 'still.html';
}

function pPrevious() {
    window.location.href = 'heavenlysent.html';
}

function whatYouHeard() {
    window.location.href = 'whatyouheard.html';
}

function getYou() {
    window.location.href = 'getyou.html';
}

function whiteFerrari() {
    window.location.href = 'whiteferrari.html';
}

function notYouToo() {
    window.location.href = 'notyoutoo.html';
}

function sorrows() {
    window.location.href = 'sorrows.html';
}

function thickOfIt() {
    window.location.href = 'thickofit.html';
}

function poeticJustice() {
    window.location.href = 'poeticjustice.html';
}

function sickoMode() {
    window.location.href = 'sickomode.html';
}

function noRoleModelz() {
    window.location.href = 'norolemodelz.html';
}

function shottaFlow() {
    window.location.href = 'shottaflow.html';
}

function inhliziyo() {
    window.location.href = 'inhliziyo.html';
}

function songCry() {
    window.location.href = 'songcry.html';
}

function biriMarung() {
    window.location.href = 'birimarung.html';
}

function liyoshona() {
    window.location.href = 'liyoshona.html';
}

function jola() {
    window.location.href = 'jola.html';
}

function still() {
    window.location.href = 'still.html';
}

function weDanceAgain() {
    window.location.href = 'wedanceagain.html';
}

function loveSong28() {
    window.location.href = 'lovesong28.html';
}

function heavenlySent() {
    window.location.href = 'heavenlysent.html';
}
function pluto() {
    window.location.href = 'pluto.html';
}