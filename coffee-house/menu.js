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
            if(currentCard !== 1) {
                for(let i = 0; i < hideCards.length; i++) {
                    hideCards[i].style.display = 'flex'
                }
            }
            else {
                for(let i = 0; i < hideCards.length; i++) {
                    hideCards[i].style.display = 'none'
                }
            }

        }

        if(window.innerWidth < 768) {
            for(let r = 0; r < hideCards.length; r++) {
                hideCards[r].style.display = 'none'
            }
        }
    });







    const products = [
        {
            "name": "Irish coffee",
            "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
            "price": "7.00",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Kahlua coffee",
            "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
            "price": "7.00",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Honey raf",
            "description": "Espresso with frothed milk, cream and aromatic honey",
            "price": "5.50",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Ice cappuccino",
            "description": "Cappuccino with soft thick foam in summer version with ice",
            "price": "5.00",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Espresso",
            "description": "Classic black coffee",
            "price": "4.50",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Latte",
            "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
            "price": "5.50",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Latte macchiato",
            "description": "Espresso with frothed milk and chocolate",
            "price": "5.50",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Coffee with cognac",
            "description": "Fragrant black coffee with cognac and whipped cream",
            "price": "6.50",
            "category": "coffee",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Cinnamon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Moroccan",
            "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
            "price": "4.50",
            "category": "tea",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Lemon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Ginger",
            "description": "Original black tea with fresh ginger, lemon and honey",
            "price": "5.00",
            "category": "tea",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Lemon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Cranberry",
            "description": "Invigorating black tea with cranberry and honey",
            "price": "5.00",
            "category": "tea",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Lemon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Sea buckthorn",
            "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
            "price": "5.50",
            "category": "tea",
            "sizes": {
                "s": {
                    "size": "200 ml",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "300 ml",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "400 ml",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Sugar",
                    "add-price": "0.50"
                },
                {
                    "name": "Lemon",
                    "add-price": "0.50"
                },
                {
                    "name": "Syrup",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Marble cheesecake",
            "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
            "price": "3.50",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Red velvet",
            "description": "Layer cake with cream cheese frosting",
            "price": "4.00",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Cheesecakes",
            "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
            "price": "4.50",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Creme brulee",
            "description": "Delicate creamy dessert in a caramel basket with wild berries",
            "price": "4.00",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Pancakes",
            "description": "Tender pancakes with strawberry jam and fresh strawberries",
            "price": "4.50",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Honey cake",
            "description": "Classic honey cake with delicate custard",
            "price": "4.50",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Chocolate cake",
            "description": "Cake with hot chocolate filling and nuts with dried apricots",
            "price": "5.50",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        },

        {
            "name": "Black forest",
            "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
            "price": "6.50",
            "category": "dessert",
            "sizes": {
                "s": {
                    "size": "50 g",
                    "add-price": "0.00"
                },
                "m": {
                    "size": "100 g",
                    "add-price": "0.50"
                },
                "l": {
                    "size": "200 g",
                    "add-price": "1.00"
                }
            },
            "additives": [
                {
                    "name": "Berries",
                    "add-price": "0.50"
                },
                {
                    "name": "Nuts",
                    "add-price": "0.50"
                },
                {
                    "name": "Jam",
                    "add-price": "0.50"
                }
            ]
        }
    ]

    const coffeeImages = ["url('./assets/img/coffee-1.svg')", "url('./assets/img/coffee-2.svg')", "url('./assets/img/coffee-3.svg')", "url('./assets/img/coffee-4.svg')", "url('./assets/img/coffee-5.svg')", "url('./assets/img/coffee-6.svg')", "url('./assets/img/coffee-7.svg')", "url('./assets/img/coffee-8.svg')",
        "url('./assets/img/tea-1.svg')", "url('./assets/img/tea-2.svg')", "url('./assets/img/tea-3.svg')", "url('./assets/img/tea-4.svg')",
        "url('./assets/img/dessert-1.svg')", "url('./assets/img/dessert-2.svg')", "url('./assets/img/dessert-3.svg')", "url('./assets/img/dessert-4.svg')", "url('./assets/img/dessert-5.svg')", "url('./assets/img/dessert-6.svg')", "url('./assets/img/dessert-7.svg')", "url('./assets/img/dessert-8.svg')"
    ]
    const controls = document.querySelectorAll('.control')
    const cardNames = document.querySelectorAll('.card-nane')
    const cardDisc = document.querySelectorAll('.card-disc')
    const cardPrice = document.querySelectorAll('.card-price')
    const cardImgWrap = document.querySelectorAll('.card-img-wrap')
    const card = document.querySelectorAll('.card')
    const hideCards = document.querySelectorAll('.hide-card')
    const menuButtonDiv = document.querySelector('.menu-button-div')
    let productCategories = ['coffee', 'tea', 'dessert']
    let countCardNumber = -1
    let currentCard = -1

    const modalTitle = document.querySelector('.modal-title')
    const modalDescription = document.querySelector('.modal-description')
    const sizeS = document.querySelector('.size-s')
    const sizeM = document.querySelector('.size-m')
    const sizeL = document.querySelector('.size-l')
    const additive1 = document.querySelector('.additive-1')
    const additive2 = document.querySelector('.additive-2')
    const additive3 = document.querySelector('.additive-3')
    const modalSum = document.querySelector('.modal-sum')
    const modalCardLeft = document.querySelector('.modal-card-left')
    let currentCardNumber = -1

    for(let i = 0; i < products.length; i += 1) {
        if(products[i].category === productCategories[0]) {
            cardImgWrap[i].style.backgroundImage = coffeeImages[i]
            cardNames[i].textContent = products[i].name
            cardDisc[i].textContent = products[i].description
            cardPrice[i].textContent = products[i].price
            card[i].style.display = 'flex'

            card[i].onclick = () => {
                currentCardNumber = i
                modalCardLeft.style.backgroundImage = coffeeImages[i]
                modalTitle.textContent = products[i].name
                modalDescription.textContent = products[i].description
                sizeS.textContent = products[i].sizes.s.size
                sizeL.textContent = products[i].sizes.l.size
                sizeM.textContent = products[i].sizes.m.size
                additive1.textContent = products[i].additives[0].name
                additive2.textContent = products[i].additives[1].name
                additive3.textContent = products[i].additives[2].name
                modalSum.textContent = products[i].price


                modalCardWrap.classList.toggle('hide-modal-card-wrap')
                body.classList.toggle('body-overflow')
            }
        }
        if (window.innerWidth < 769) {
            for(let j = 0; j < hideCards.length; j++) {
                hideCards[j].style.display = 'none'
            }
        }
    }



    for(let i = 0; i < controls.length; i += 1){
        controls[i].onclick = () => {
            currentCard = i
            for (let k = 0; k < card.length; k += 1) {
                card[k].style.display = 'none'
            }

            for (let m = 0; m < controls.length; m += 1) {
                controls[m].classList.remove('control-spec')
            }
            controls[i].classList.add('control-spec')
            for(let j = 0; j < products.length; j += 1) {
                if(products[j].category === productCategories[i]) {
                    countCardNumber += 1
                    cardImgWrap[countCardNumber].style.backgroundImage = coffeeImages[j]
                    cardNames[countCardNumber].textContent = products[j].name
                    cardDisc[countCardNumber].textContent = products[j].description
                    cardPrice[countCardNumber].textContent = products[j].price
                    card[countCardNumber].style.display = 'flex'
                    let countCardNumberLayer = countCardNumber
                    card[countCardNumber].onclick = () => {
                        currentCardNumber  = countCardNumberLayer
                        for (let w = 0; w < products.length; w++) {
                            if (products[w].name ===  cardNames[countCardNumberLayer].textContent) {
                                modalCardLeft.style.backgroundImage = coffeeImages[w]
                                modalTitle.textContent = products[w].name
                                modalDescription.textContent = products[w].description
                                sizeS.textContent = products[w].sizes.s.size
                                sizeL.textContent = products[w].sizes.l.size
                                sizeM.textContent = products[w].sizes.m.size
                                additive1.textContent = products[w].additives[0].name
                                additive2.textContent = products[w].additives[1].name
                                additive3.textContent = products[w].additives[2].name
                                modalSum.textContent = products[w].price
                            }
                        }


                        modalCardWrap.classList.toggle('hide-modal-card-wrap')
                        body.classList.toggle('body-overflow')
                    }
                }
            }

            if (window.innerWidth < 769) {
                for(let p = 0; p < hideCards.length; p++) {
                    hideCards[p].style.display = 'none'
                }
            }

            if (countCardNumber < 5) {
                menuButtonDiv.style.display = 'none'
            }

            if (countCardNumber > 4) {
                menuButtonDiv.style.display = 'flex'
            }

            countCardNumber = -1
        }
    }


    menuButtonDiv.onclick = () => {
        for (let v = 3; v < card.length; v += 1) {
            card[v].style.display = 'flex'
        }
        menuButtonDiv.style.display = 'none'
    }


    const body = document.querySelector('.body')
    const modalCardWrap = document.querySelector('.modal-card-wrap')
    const card1 = document.querySelector('.card1')
    const closeButton = document.querySelector('.close-button')
    modalCardWrap.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-card-wrap')){
            modalCardWrap.classList.toggle('hide-modal-card-wrap')
            body.classList.toggle('body-overflow')

            for(let s = 0; s < choiceSizes.length; s += 1) {
                choiceSizes[s].classList.remove('modal-choice-special')
                choiceAdditives[s].classList.remove('modal-choice-special')
            }
            choiceSizes[0].classList.add('modal-choice-special')
        }
    })

    closeButton.onclick = () => {
        modalCardWrap.classList.toggle('hide-modal-card-wrap')
        body.classList.toggle('body-overflow')

        for(let z = 0; z < choiceSizes.length; z += 1) {
            choiceSizes[z].classList.remove('modal-choice-special')
            choiceAdditives[z].classList.remove('modal-choice-special')
        }
        choiceSizes[0].classList.add('modal-choice-special')
    }


    let isAddPressed = [false, false, false]
    let countIsAddPressed = 0
    const choiceAdditives = document.querySelectorAll('.choice-additives')
    for (let i = 0; i < choiceAdditives.length; i += 1) {
        choiceAdditives[i].onclick = () => {
            if(isAddPressed[i] === false) {
                choiceAdditives[i].classList.add('modal-choice-special')
                tempVar = Number(modalSum.textContent) + addPrices[1]
                modalSum.textContent = tempVar.toFixed(2)
                isAddPressed[i] = true
            }
            else if(isAddPressed[i] === true) {
                choiceAdditives[i].classList.remove('modal-choice-special')
                tempVar = Number(modalSum.textContent) - addPrices[1]
                modalSum.textContent = tempVar.toFixed(2)
                isAddPressed[i] = false
            }
        }
    }

    let tempVar = -1
    let pressedBefore = -1
    const addPrices = [0, 0.5, 1]
    const choiceSizes = document.querySelectorAll('.choice-size')
    for (let i = 0; i < choiceSizes.length; i += 1) {
        choiceSizes[i].onclick = () => {
            for(let j = 0; j < choiceSizes.length; j += 1) {
                choiceSizes[j].classList.remove('modal-choice-special')
                choiceAdditives[j].classList.remove('modal-choice-special')
            }
            choiceSizes[i].classList.add('modal-choice-special')
            for(let k = 0; k < isAddPressed; k++) {
                if (isAddPressed[k] === true) countIsAddPressed += 1
            }
            tempVar = Number(cardPrice[currentCardNumber].textContent) + addPrices[i] - (countIsAddPressed * addPrices[1])
            isAddPressed = [false, false, false]
            modalSum.textContent = tempVar.toFixed(2)

        }
    }

    for(var i = 0; i < 3; i++){
        setTimeout(function () {
            console.log(i)
        }, 100)
    }
})
