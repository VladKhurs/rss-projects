/*response = await fetch('./products.json')
const prod = await response.json()
console.log(prod[0])*/
window.addEventListener('load', function(){
    const burgerButtons = document.querySelectorAll('.burger-action')
    const burgerPartTop = document.querySelector('.burger-part-top')
    const burgerPartEnd = document.querySelector('.burger-part-end')
    const burgerMenu = document.querySelector('.burger-menu')
    let isOpened = false
    let timeout = 2

    for(let i = 0; i < burgerButtons.length; i++) {
        burgerButtons[i].onclick = () => {
            if(isOpened === true){
                isOpened = false
                timeout = 250
            }
            else{
                isOpened = true
                timeout = 2
            }
            burgerPartTop.classList.toggle('burger-top-active')
            burgerPartEnd.classList.toggle('burger-end-active')
            if (isOpened === true) burgerMenu.classList.toggle('display-none')
            else burgerMenu.classList.toggle('burger-menu-active')
            setTimeout(() => {
                if (isOpened === true) burgerMenu.classList.toggle('burger-menu-active')
                else burgerMenu.classList.toggle('display-none')
            }, timeout)
        }
    }


    window.addEventListener('resize', function(){
        if(window.innerWidth > 768) {
            burgerMenu.classList.remove('burger-menu-active')
            burgerPartTop.classList.remove('burger-top-active')
            burgerPartEnd.classList.remove('burger-end-active')
            setTimeout(() => {
                burgerMenu.classList.add('display-none')
            }, 250)
        }
    });




    let currentSlide = 1;
    const sliderImages = 3;
    const slideZero = document.querySelector('.image0')
    const arrowRight = document.querySelector('.arrow-right')
    const arrowLeft = document.querySelector('.arrow-left')
    let slideTimeout = setInterval( toRightSlide, 5000);
    const pointers = document.querySelectorAll('.pointer')

    function toRightSlide() {

        slideZero.classList.remove('show3')
        slideZero.classList.remove('show1')
        slideZero.classList.remove('show2')
        if(currentSlide === 1){
            slideZero.classList.add('show2')
        }
        if(currentSlide === 2){
            slideZero.classList.add('show3')
        }
        if(currentSlide === 3){
            slideZero.classList.add('show1')
        }

        currentSlide += 1
        if (currentSlide > sliderImages) {currentSlide = 1}
        setPointers()
        clearTimeout(slideTimeout)
        slideTimeout = setInterval(toRightSlide, 5000)
    }
    function toLeftSlide() {

        slideZero.classList.remove('show3')
        slideZero.classList.remove('show1')
        slideZero.classList.remove('show2')
        if(currentSlide === 1){
            slideZero.classList.add('show3')
        }
        if(currentSlide === 2){
            slideZero.classList.add('show1')
        }
        if(currentSlide === 3){
            slideZero.classList.add('show2')
        }
        currentSlide -= 1
        if (currentSlide < 1) {currentSlide = 3}
        setPointers()
        clearTimeout(slideTimeout)
        slideTimeout = setInterval(toRightSlide, 5000)
    }
    arrowRight.addEventListener('click', toRightSlide)
    arrowLeft.addEventListener('click', toLeftSlide)
    const imagesWrap = document.querySelector('.images-wrap')
    imagesWrap.addEventListener('mouseover', function () {
        clearTimeout(slideTimeout)
    })

    imagesWrap.addEventListener('mouseout', function () {
        slideTimeout = setInterval(toRightSlide, 5000)
    })

    function setPointers () {
        for (let i = 0; i < pointers.length; i += 1) {
            pointers[i].classList.remove('pointer-current')
        }
        pointers[currentSlide-1].classList.add('pointer-current')
    }




    const slider = document.querySelector('.slider')

    let pointTouchStart;

    slider.addEventListener('touchstart', (e) => {
        pointTouchStart = e.changedTouches[0].clientX
    });

    slider.addEventListener('touchend', (e) =>{
        if(e.changedTouches[0].clientX - pointTouchStart < -50) {
            toRightSlide()
        }
        if(e.changedTouches[0].clientX - pointTouchStart > 50) {
            toLeftSlide()
        }
    });







})