/*document.body.onclick = function (){ 
    if (document.getElementById("id-nav-list").style.display === "block"){
        document.getElementById("id-nav-list").style.display="none"
    }
};*/


window.addEventListener('load', function(){

const buttonBurger = this.document.getElementById('id-burg')
const imageListt = ["./assets/img/burger.svg", "./assets/img/cross.svg"]
let isOpenedN = false

const ibutton = document.getElementById('icon-button')
const imenu = document.getElementById('icon-menu')
let isOpenedI = false

const nav = document.getElementById("id-nav-list")

buttonBurger.onclick = () => {
    if (nav.style.display === "block") {
        nav.style.display = "none"
        isOpenedN = false
        document.getElementById('id-burg').src = imageListt[0]
    } 
    else {
        nav.style.display = "block"
        isOpenedN = true
        document.getElementById('id-burg').src = imageListt[1]
    }

    if((isOpenedI === true) && (isOpenedN === true)) {
        imenu.classList.add('hide-profile')
        imenu.classList.remove('show-profile')
        isOpenedI = false
    }
}


const imagesBigWindowAmount = 3
const imagesSmallWindowAmount = 5
const images = ["./assets/img/image 1.jpg", "./assets/img/image 2.jpg", "./assets/img/image 3.jpg", "./assets/img/image 4.jpg", "./assets/img/image 5.jpg"]
const imgs = document.querySelectorAll('.about-img')
const buttons = document.querySelectorAll(".point")
const arrows = document.querySelectorAll('.arr')
let clickedButton = 0
buttons[0].classList.add('point-special')
const bigWindow = () =>{
    if(this.window.innerWidth >= 1440){
        for(let i = 0; i < imagesBigWindowAmount; i++){
            buttons[i].onclick = () => {
                imgs[0].src = images[i]
                imgs[1].src = images[i+1]
                imgs[2].src = images[i+2]
                clickedButton = i
                for(let j = 0; j < imagesBigWindowAmount; j++){
                    buttons[j].classList.remove('point-special')
                }
                buttons[clickedButton].classList.add('point-special')
            }

        }
    }
}
const smallWindow = () =>{
    if(this.window.innerWidth < 1440){
        for(let i = 0; i < imagesSmallWindowAmount; i++){
            buttons[i].onclick = () => {
                imgs[0].src = images[i]
                clickedButton = i
                for(let j = 0; j < imagesSmallWindowAmount; j++){
                    buttons[j].classList.remove('point-special')
                }
                buttons[clickedButton].classList.add('point-special')
            }
        }

        arrows[0].onclick = () => {
            if(clickedButton === 0){
                clickedButton = 1
            }
            clickedButton--
            imgs[0].src = images[clickedButton]
            for(let k = 0; k < imagesSmallWindowAmount; k++){
                buttons[k].classList.remove('point-special')
            }
            buttons[clickedButton].classList.add('point-special')
        }
        arrows[1].onclick = () => {
            if(clickedButton === imagesSmallWindowAmount - 1){
                clickedButton = 3
            }
            clickedButton++
            imgs[0].src = images[clickedButton]
            for(let k = 0; k < imagesSmallWindowAmount; k++){
                buttons[k].classList.remove('point-special')
            }
            buttons[clickedButton].classList.add('point-special')
        }
    }
}
bigWindow()
smallWindow()
window.addEventListener('resize', function(){
    imgs[0].src = images[0]
    imgs[1].src = images[1]
    imgs[2].src = images[2]
    for(let j = 0; j < imagesSmallWindowAmount; j++){
        buttons[j].classList.remove('point-special')
    }
    buttons[0].classList.add('point-special')

    bigWindow()
    smallWindow()
});



const radios = this.document.querySelectorAll('.radio-season')
const cards = this.document.querySelectorAll('.cards')
let changed = 0

function list() {

}

let clicked = false

for(let i = 0; i < radios.length; i++){
    radios[i].onchange = () => {
        if (clicked === true){
            for(let k = 0; k < radios.length; k++){
                radios[k].checked = false
            }
            radios[changed].checked = true
            return
        }
        clicked = true
        this.setTimeout(() => {
            clicked = false
        }, 1040)
        changed = i
        for(let j = 0; j < cards.length; j++){
            cards[j].classList.add('active')
            this.setTimeout(() => {
                cards[j].classList.remove('cards-show')
                cards[j].classList.add('cards-hide')
            }, 500)
        }
        
        this.setTimeout(() => {
            cards[changed].classList.remove('cards-hide')
            cards[changed].classList.add('cards-show')
            }, 500)
        this.setTimeout(() => {
            cards[changed].classList.remove('active')
        }, 540)
    }
}

ibutton.onclick = () => {
    if(imenu.classList[1] === 'hide-profile') {
        isOpenedI = true
        imenu.classList.add('show-profile')
        imenu.classList.remove('hide-profile')
    }
    else {
        isOpenedI = false
        imenu.classList.add('hide-profile')
        imenu.classList.remove('show-profile')
    }
    if((isOpenedI === true) && (isOpenedN === true)) {
        nav.style.display = "none"
        isOpenedN = false
    }

}

window.addEventListener('click', e => {
    if(isOpenedI === true){
        let target = e.target
        if (!target.closest('.profile-head') && !target.closest('.h-img')) {
            imenu.classList.add('hide-profile')
            imenu.classList.remove('show-profile')
        }
    }
})

const register = this.document.getElementById('register')
const registerWrap = this.document.querySelector('.modal-register-wrap')
const srossBtn = this.document.getElementById('srossBtn')
const bodyConst = this.document.getElementById('bodyId')
const libraryCardsButton = this.document.querySelector('.digital-b')

register.onclick = () => {
    registerWrap.classList.toggle('hide-modal-register-wrap')
    bodyConst.classList.toggle('body-overflow')
}
srossBtn.onclick = () => {
    registerWrap.classList.toggle('hide-modal-register-wrap')
    bodyConst.classList.toggle('body-overflow')
}

libraryCardsButton.onclick = () => {
    registerWrap.classList.toggle('hide-modal-register-wrap')
    bodyConst.classList.toggle('body-overflow')
}

registerWrap.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-register-wrap')){
        registerWrap.classList.toggle('hide-modal-register-wrap')
        bodyConst.classList.toggle('body-overflow')
    }
} )

const inputFirstName = this.document.querySelector('.inputFirstName')
const inputLastName = this.document.querySelector('.inputLastName')
const inputEmail = this.document.querySelector('.inputEmail')
const inputPassword = this.document.querySelector('.inputPassword')
const buttonSign = this.document.querySelector('.button-sign')
const login = this.document.getElementById('login')
const loginWrap = this.document.querySelector('.modal-login-wrap')
const srossBtnLogin = this.document.getElementById('srossBtnLogin')
const libraryCardsButtonLogin = this.document.querySelector('.digital-b-login')
const masCh = ['A', 'B', 'C', 'D', 'E', 'F']
let dataArr = []
let sixR = ''
//let userN = 0
if(localStorage.getItem('Keys') === null){
    let userKeys = [0]
    localStorage.setItem('Keys', JSON.stringify(userKeys))
}


let LSKeys = localStorage.getItem('Keys')
LSKeys = JSON.parse(LSKeys)
let takenData = 0

const iconImage = this.document.querySelector('.icon-image')
let iconText = document.querySelector('.icon-text')
let isEnter = false
const buttonsBuy = this.document.querySelectorAll('.buttonsBuy')
const buyWrap = this.document.querySelector('.modal-buy-wrap')
const srossBtnbuy = this.document.getElementById('srossBtnBuy')

const profileWrap = this.document.querySelector('.modal-profile-wrap')
const srossBtnProfile = this.document.getElementById('srossBtnProfile')
const myProfile = this.document.getElementById('myprofile')
const logOut = this.document.getElementById('logout')
const headButtons = this.document.querySelectorAll('.head-button')
const copyButton = this.document.querySelector('.copy')
let textForCopy = ''
myProfile.onclick = () => {
    profileWrap.classList.toggle('hide-modal-profile-wrap')
    bodyConst.classList.toggle('body-overflow')
}
srossBtnProfile.onclick = () => {
    profileWrap.classList.toggle('hide-modal-profile-wrap')
    bodyConst.classList.toggle('body-overflow')
}

profileWrap.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-profile-wrap')){
        profileWrap.classList.toggle('hide-modal-profile-wrap')
        bodyConst.classList.toggle('body-overflow')
    }
} )

copyButton.onclick = () => {
    textForCopy = this.document.querySelector('.card-number').textContent
    navigator.clipboard.writeText(textForCopy)
}

srossBtnbuy.onclick = () => {
    buyWrap.classList.toggle('hide-modal-buy-wrap')
    bodyConst.classList.toggle('body-overflow')
}

buyWrap.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-buy-wrap')){
        buyWrap.classList.toggle('hide-modal-buy-wrap')
        bodyConst.classList.toggle('body-overflow')
    }
} )


let showBuyOrLogin = () => {
    if(isEnter === true) {
        for(let i = 0; i < buttonsBuy.length; i++) {
            buttonsBuy[i].onclick = () => {
                buyWrap.classList.toggle('hide-modal-buy-wrap')
                bodyConst.classList.toggle('body-overflow')
            }
        }
    }
    else {
        for(let i = 0; i < buttonsBuy.length; i++) {
            buttonsBuy[i].onclick = () => {
                loginWrap.classList.toggle('hide-modal-login-wrap')
                bodyConst.classList.toggle('body-overflow')
            }
        }
    }
    
}

logOut.onclick = () => {
    iconText.textContent = ''
    iconText.setAttribute('title', '')
    iconText.classList.toggle('icon-text-hide')
    iconImage.classList.toggle('icon-text-hide')
    for(let i = 0; i < 4; i++){
        headButtons[i].classList.toggle('hide-def-button')
    }
    showBuyOrLogin()
}

const profileShort = this.document.querySelector('.rectangle-profile')
const profileLong = this.document.querySelector('.name-profile')
const profileCardNumber = this.document.querySelector('.card-number')
const profileVisits = this.document.querySelector('.profile-visits')
let amountSign = 1
buttonSign.onclick = () => {
    if(inputEmail.value.indexOf('@') != -1 && inputPassword.value.length > 7 && inputFirstName.value.length > 0 && inputLastName.value.length > 0){

        for(let i = 0; i < 9; i++){
            let randonI = Math.floor(Math.random() * (15-0) + 0)
            if(randonI>9) {
                randonI = masCh[randonI - 10]
            }
            sixR += randonI
        }


        dataArr.push(inputFirstName.value)
        dataArr.push(inputLastName.value)
        dataArr.push(inputEmail.value)
        dataArr.push(inputPassword.value)
        dataArr.push(dataArr[0][0] + dataArr[1][0])
        dataArr.push(sixR)
        dataArr.push(amountSign)
        sixR = ''
        inputFirstName.value = ''
        inputLastName.value = ''
        inputEmail.value = ''
        inputPassword.value = ''


        if(LSKeys.length != 1){
            LSKeys = localStorage.getItem('Keys')
            LSKeys = JSON.parse(LSKeys)
        }


        LSKeys.push(LSKeys.length)
        localStorage.setItem('Keys', JSON.stringify(LSKeys))
        let takenLSKeys = localStorage.getItem('Keys')
        takenLSKeys = JSON.parse(takenLSKeys)

        localStorage.setItem(LSKeys.length-1, JSON.stringify(dataArr))

        takenData = localStorage.getItem(LSKeys[LSKeys.length-1])
        takenData = JSON.parse(takenData)
        //Show text
        iconText.textContent = takenData[4]
        iconText.setAttribute('title', takenData[0] + ' ' + takenData[1])
        iconText.classList.toggle('icon-text-hide')
        iconImage.classList.toggle('icon-text-hide')
        for(let i = 0; i < 4; i++){
            headButtons[i].classList.toggle('hide-def-button')
        }


        profileShort.textContent = takenData[4]
        profileLong.textContent = takenData[0] + ' ' + takenData[1]
        profileCardNumber.textContent = takenData[5]
        profileVisits.textContent = takenData[6]
        dataArr = []
        isEnter = true
        showBuyOrLogin()
        
    }
}







login.onclick = () => {
    loginWrap.classList.toggle('hide-modal-login-wrap')
    bodyConst.classList.toggle('body-overflow')
}
srossBtnLogin.onclick = () => {
    loginWrap.classList.toggle('hide-modal-login-wrap')
    bodyConst.classList.toggle('body-overflow')
}

libraryCardsButtonLogin.onclick = () => {
    loginWrap.classList.toggle('hide-modal-login-wrap')
    bodyConst.classList.toggle('body-overflow')
}

loginWrap.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-login-wrap')){
        loginWrap.classList.toggle('hide-modal-login-wrap')
        bodyConst.classList.toggle('body-overflow')
    }
} )



const buttonLogin = this.document.querySelector('.button-login')
const inputEmailLogin = this.document.querySelector('.inputEmailLogin')
const inputPasswordLogin = this.document.querySelector('.inputPasswordLogin')
let dataArrLogin = []
let emailOrCardPosition = 0
let keysInput = 0
let usersData = 0
buttonLogin.onclick = () => {
    if(inputEmailLogin.value.length > 0 && inputPasswordLogin.value.length > 7){
        dataArrLogin.push(inputEmailLogin.value)
        dataArrLogin.push(inputPasswordLogin.value)
        if(inputEmailLogin.value.indexOf('@') != -1){
            emailOrCardPosition = 2
        }
        else {
            emailOrCardPosition = 5
        }
        keysInput = localStorage.getItem('Keys')
        keysInput = JSON.parse(keysInput)
        for(let i = 1; i < keysInput.length; i++){
            usersData = localStorage.getItem(i)
            usersData = JSON.parse(usersData)
            /*console.log(usersData[3])
            console.log(dataArrLogin[1])
            console.log(usersData[3] === dataArrLogin[1])
            console.log(usersData[emailOrCardPosition])
            console.log(dataArrLogin[0])
            console.log(usersData[emailOrCardPosition] === dataArrLogin[0])*/
            if(usersData[3] === dataArrLogin[1] && usersData[emailOrCardPosition] === dataArrLogin[0]){
                usersData[6]++
                localStorage.setItem(i, JSON.stringify(usersData))
                console.log('I found!')
                isEnter = true
                showBuyOrLogin()
                iconText.textContent = usersData[4]
                iconText.setAttribute('title', usersData[0] + ' ' + usersData[1])
                iconText.classList.toggle('icon-text-hide')
                iconImage.classList.toggle('icon-text-hide')
                profileShort.textContent = usersData[4]
                profileLong.textContent = usersData[0] + ' ' + usersData[1]
                profileCardNumber.textContent = usersData[5]
                profileVisits.textContent = usersData[6]
                for(let i = 0; i < 4; i++){
                    headButtons[i].classList.toggle('hide-def-button')
                }
                
                break
            }
        }

        inputEmailLogin.value = ''
        inputPasswordLogin.value = ''


        //let dataLSLogin = 'dataLogin'
        //localStorage.setItem(dataLSLogin, JSON.stringify(dataArrLogin))
        dataArrLogin = []



        //let changedLSLogin = localStorage.getItem(dataLSLogin)
        //changedLSLogin = JSON.parse(changedLSLogin)
        //console.log(changedLSLogin, 'changedLSLogin')
    }
}




showBuyOrLogin()

//iconText = document.querySelector('.icon-text')
//takenData = localStorage.getItem('2')
//takenData = JSON.parse(takenData)
//iconText.textContent = takenData[4]

})
