addEventListener('DOMContentLoaded', (event) => {
  const songs = ["./assets/audio/beyonce.mp3", "./assets/audio/dontstartnow.mp3"]
  const avas = ["./assets/img/lemonade.png", "./assets/img/dontstartnow.png"]
  const authors = ["Beyonce", "Dua Lipa"]
  const songNames  = ["Dont't Hurt Yourself", "Don't Start Now"]
  const songsLength = ['3:53', '3:23']
  const downloads = ["beyonce.mp3", "dontstartnow.mp3"]
  const downloadLink = document.querySelector('.download-link')
  const playPauseBtn = document.querySelector('.play-button')
  const audio = document.querySelector('.audio')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  const avaImg = document.querySelector('.ava-img')
  const avaBGI = document.querySelector('.ava-bgi')
  const authorText = document.querySelector('.author-text')
  const songName = document.querySelector('.song-name')
  const songLength = document.querySelector('.song-length')
  const progressWrap = document.querySelector('.progress-wrap')
  const progressInner = document.querySelector('.progress-inner')
  const currentTime = document.querySelector('.current-time')
  let audioDuration = 0
  let isPlaying = false
  let numSongAndAva = 0
  console.log(downloadLink)
  const convertToTime = (n) => {
    let s = parseInt(n)
    let m = parseInt(s / 60)
    let h = parseInt(m / 60)
    s -= m*60
    m -= h*60

    if (h === 0) {
      return String(m) + ':' + String(s).padStart(2, 0)
    }

    return String(h).padStart(2, 0) + m + String(s).padStart(2, 0)
  }


  audio.addEventListener("loadeddata", function() {
    audioDuration = this.duration
  })

  progressWrap.addEventListener('click', e => {
    const progressWith = window.getComputedStyle(progressWrap).width
    const timeClick = e.offsetX / parseInt(progressWith) * audioDuration
    audio.currentTime = timeClick
    console.log('w')
  }, false)

  setInterval(() => {
    progressInner.style.width = audio.currentTime / audioDuration * 100 + '%'
    currentTime.textContent = convertToTime(audio.currentTime)
    if(convertToTime(audio.currentTime) === songsLength[numSongAndAva]){
      next()
    }
  }, 500)

  console.log(audioDuration)
  songLength.textContent = songsLength[0]
  const play = () => {
    audio.play()
    isPlaying = true
    playPauseBtn.classList.toggle('pause-button')
  }

  const pause = () => {
    audio.pause()
    isPlaying = false
    playPauseBtn.classList.toggle('pause-button')
  }

  const next = () => {
    if(numSongAndAva === songs.length - 1){
      numSongAndAva = 0
    }
    else {
      numSongAndAva++
    }
    audio.src = songs[numSongAndAva]
    avaImg.src = avas[numSongAndAva]
    avaBGI.src = avas[numSongAndAva]
    songLength.textContent = songsLength[numSongAndAva]
    authorText.textContent = authors[numSongAndAva]
    songName.textContent = songNames[numSongAndAva]
    downloadLink.href = songs[numSongAndAva]
    downloadLink.download = downloads[numSongAndAva]
    audio.play()
    if(isPlaying === false) {
      isPlaying = true
      playPauseBtn.classList.toggle('pause-button')
    }
  }

  const prev = () => {
    if(numSongAndAva === 0){
      numSongAndAva = songs.length - 1
    }
    else {
      numSongAndAva--
    }
    audio.src = songs[numSongAndAva]
    avaImg.src = avas[numSongAndAva]
    avaBGI.src = avas[numSongAndAva]
    songLength.textContent = songsLength[numSongAndAva]
    authorText.textContent = authors[numSongAndAva]
    songName.textContent = songNames[numSongAndAva]
    downloadLink.href = songs[numSongAndAva]
    downloadLink.download = downloads[numSongAndAva]
    audio.play()
    if(isPlaying === false) {
      isPlaying = true
      playPauseBtn.classList.toggle('pause-button')
    }
  }


  playPauseBtn.onclick = () => {
    if(isPlaying === false){
      play()
    }
    else{
      pause()
    }
  }

  prevBtn.onclick = () => {
    prev()
  }

  nextBtn.onclick = () => {
    next()
  }
})