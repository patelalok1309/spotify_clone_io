console.log('welcome to spotify')

// initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs2/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterPlay2 = document.getElementById('masterPlay2');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songDuration = document.getElementById('duration');
let coverImg = document.getElementById('coverimg');
let myVolumeBar = document.getElementById('myVolumeBar');

let songs = [
    { songName: "Suit - suit", filePath: "songs2/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Dilwale Tukur Tukur", filePath: "songs2/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Anirudh feat yo yo honey singh", filePath: "songs2/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Tum hi hon - arijit singh", filePath: "songs2/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "bojhena se bojhena arijit ", filePath: "songs2/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Ban ja Rani Guru randhawa", filePath: "songs2/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Lahore Guru randhawa", filePath: "songs2/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Mika singh miss you ", filePath: "songs2/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Patola bolleywood", filePath: "songs2/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Rabgtari djmaza", filePath: "songs2/10.mp3", coverPath: "covers/2.jpg" },
    { songName: "Guru randhawa remix", filePath: "songs2/10.mp3", coverPath: "covers/1.jpg" },
    { songName: "Hum tere bin ab reh nahi sakte", filePath: "songs2/11.mp3", coverPath: "covers/4.jpg" },
    { songName: "Ranja Arijit singh", filePath: "songs2/12.mp3", coverPath: "covers/3.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("song-Name")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    console.log('master play working fine')
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterPlay2.classList.remove('fa-play');
        masterPlay2.classList.add('fa-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        masterPlay2.classList.remove('fa-pause');
        masterPlay2.classList.add('fa-play');
    }
})
masterPlay2.addEventListener('click', () => {
    console.log('master play working fine')
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay2.classList.remove('fa-play');
        masterPlay2.classList.add('fa-pause');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay2.classList.remove('fa-pause');
        masterPlay2.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    updateTime()
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


// Function to update the time
function updateTime() {
    let timeInSeconds = parseInt(audioElement.currentTime);
    if (!audioElement.paused) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        songDuration.textContent = formattedTime;
        timeInSeconds++;
    }
}

// Call the updateTime function every second
setInterval(updateTime, 1000);



function playSong(index) {
    songIndex = index;
    audioElement.src = `songs2/${songIndex}.mp3`;
    audioElement.play();
    masterSongName.innerText = songs[songIndex - 1].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    coverImg.src = songs[songIndex - 1].coverPath;
}


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 13) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs2/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    coverImg.src = songs[songIndex - 1].coverPath;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs2  /${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    coverImg.src = songs[songIndex - 1].coverPath;
})


document.getElementById('volume-icon').addEventListener('click', () => {
    console.log('volume working')
    // audioElement.muted = true;
    if (audioElement.muted) {
        audioElement.muted = false;
        document.getElementById('volume-icon').style.fill = 'white';
    } else {
        audioElement.muted = true;
        document.getElementById('volume-icon').style.fill = 'red';
    }
})

myVolumeBar.addEventListener('change', () => {
    console.log('my volume bar')
    console.log(audioElement.volume)
    console.log(myVolumeBar.value)
    audioElement.volume = myVolumeBar.value / 10;
})

const likedSongs = {}
totaladdedsongs = 0
function addtoliked(index) {
    console.log(index)
    document.getElementsByClassName('likeIcon')[index - 1].style.fill = 'red';
    
}


// To add responsiveness to songtable and player
window.addEventListener('resize' , function(){
    const screenWidth = window.innerWidth;
    
    const albumcells = this.document.querySelectorAll('.album-td');
    if(screenWidth <= 480){
        console.log(albumcells);
        albumcells.forEach(function(td){
            console.log('hello from for each')
            td.style.display = 'none';
        })
    }
    else{
        albumcells.forEach(function(td){
            console.log('hello from for each');
            td.style.display = '';
        })
    }

    const songIndexCells = this.document.querySelectorAll('.songIndex');
    const dateCells = this.document.querySelectorAll('.dateAdded');
    if(screenWidth<=380){
        dateCells.forEach(function(td){
            td.style.display = 'none';
        })

        songIndexCells.forEach(function(td){
            td.style.width = 'auto';
        })
    }else{
        dateCells.forEach(function(td){
            td.style.display = '';
        })
        songIndexCells.forEach(function(td){
            td.style.width = 'auto';
        })
    }
})