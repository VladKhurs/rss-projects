addEventListener('DOMContentLoaded', (event) => {
  const imgsPage = document.querySelectorAll('.imgs-page')
  const searchBtn = document.querySelector('.search-btn')
  const photoTopic = document.querySelector('.photo-topic')
  const urlFirstPart = 'https://api.unsplash.com/search/photos?query=';
  let urlCenterPart = 'dog'
  const urlLastPart = '&client_id=3MuNdTqUeyKU5e9O7f5v1tQ2lQzDen43yqAKv-KVLsE'
  const crossImg = document.querySelector('.cross-img')
  let finalUrl = '' //urlFirstPart + urlCenterPart + urlLastPart
  let foundImgs = []
  photoTopic.focus()
  photoTopic.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
      urlCenterPart = photoTopic.value
      setImgs()
      console.log('q')
    }
  })
  crossImg.addEventListener('click', () => {
    photoTopic.focus()
    photoTopic.value = ''
  })
  setImgs()
  searchBtn.addEventListener('click', async () => {
    urlCenterPart = photoTopic.value
    setImgs()
  })

  async function findImgs() {
    const res = await fetch(finalUrl)
    const data = await res.json();
    return data.results
    }

  async function setImgs() {
    if(urlCenterPart !== ''){
      photoTopic.placeholder = 'Enter the photo topic'
      finalUrl = urlFirstPart + urlCenterPart + urlLastPart
      foundImgs = await findImgs();
      console.log(foundImgs, 'erwer')
      for(let i = 0; i < 10; i++){
        imgsPage[i].src = foundImgs[i].urls.regular
      }
    }
    else {
      photoTopic.placeholder = "Don't keep me blank"
    }
  }
})