// Mendapatkan elemen audio, ikon play/pause, dan elemen slider
const audioPlayer = document.getElementById('audioPlayer');
const playPauseIcon = document.getElementById('playPauseIcon');
const seekSlider = document.querySelector('.seek_slider');
const currentTimeDisplay = document.querySelector('.current-time');
const totalDurationDisplay = document.querySelector('.total-duration');

// Status audio
let isPlaying = false;

// Fungsi untuk memainkan atau menjeda audio
function playpauseTrack() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseIcon.classList.remove('fa-pause-circle');
        playPauseIcon.classList.add('fa-play-circle');
    } else {
        audioPlayer.play();
        playPauseIcon.classList.remove('fa-play-circle');
        playPauseIcon.classList.add('fa-pause-circle');
    }
    isPlaying = !isPlaying;
}

// Fungsi untuk melompat ke posisi tertentu dalam audio
function seekTo() {
    const seekValue = seekSlider.value;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (seekValue / 100) * duration;
}

// Event listener untuk memperbarui slider dan waktu audio
audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    // Update seek slider
    const value = (currentTime / duration) * 100;
    seekSlider.value = value;

    // Update current time display
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

    // Update total duration display
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    totalDurationDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
});
