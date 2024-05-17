window.addEventListener('load', function(){

    let body = document.querySelector('.body')
    let par = document.createElement('p')
    let divMain = document.createElement('div')
    let divLeft = document.createElement('div')
    let divRight = document.createElement('div')
    let divImg = document.createElement('div')

    let man = document.createElement('div')
    let topMan = document.createElement('div')
    let cenMan = document.createElement('div')
    let butMan = document.createElement('div')
    let lefHen = document.createElement('div')
    let rigHen = document.createElement('div')
    let lefLeg = document.createElement('div')
    let rigLeg = document.createElement('div')
    let pen = document.createElement('div')
    par.innerText = 'HANGMAN GAME'
    body.appendChild(divMain)
    divMain.appendChild(divLeft)
    divMain.appendChild(divRight)

    divLeft.appendChild(par)
    divLeft.appendChild(divImg)
    divLeft.appendChild(man)
    man.appendChild(topMan)
    man.appendChild(cenMan)
    man.appendChild(butMan)
    cenMan.appendChild(lefHen)
    cenMan.appendChild(pen)
    cenMan.appendChild(rigHen)
    butMan.appendChild(lefLeg)
    butMan.appendChild(rigLeg)

    par.classList.add('par')
    divMain.classList.add('div-main')
    divLeft.classList.add('div-left')
    divRight.classList.add('div-right')
    divImg.classList.add('div-img')

    man.classList.add('man')
    topMan.classList.add('top-man')
    cenMan.classList.add('cen-man')
    butMan.classList.add('but-man')
    lefHen.classList.add('lef-hen')
    pen.classList.add('pen')
    rigHen.classList.add('rig-hen')
    lefLeg.classList.add('lef-leg')
    rigLeg.classList.add('rig-leg')

    topMan.classList.add('body-part')
    lefHen.classList.add('body-part')
    pen.classList.add('body-part')
    rigHen.classList.add('body-part')
    lefLeg.classList.add('body-part')
    rigLeg.classList.add('body-part')

    let bodyParts = document.querySelectorAll('.body-part')
    for (let i = 0; i < bodyParts.length; i += 1) {
        bodyParts[i].classList.add('hide')
    }

    let word = document.createElement('div')
    let letter1 = document.createElement('div')
    let letter2 = document.createElement('div')
    let letter3 = document.createElement('div')
    let letter4 = document.createElement('div')
    let letter5 = document.createElement('div')
    let letter6 = document.createElement('div')
    let letter7 = document.createElement('div')
    let letter8 = document.createElement('div')
    let letter9 = document.createElement('div')
    let letter10 = document.createElement('div')
    let task = document.createElement('div')
    let taskLef = document.createElement('div')
    let taskRig = document.createElement('div')
    let keyboard = document.createElement('div')

    let taskTop = document.createElement('div')
    let taskBut = document.createElement('div')
    let scoreText = document.createElement('div')
    let score = document.createElement('div')
    let scoreLef = document.createElement('div')
    let scoreCen = document.createElement('div')
    let scoreRig = document.createElement('div')

    divRight.appendChild(word)
    divRight.appendChild(task)
    divRight.appendChild(keyboard)
    keyboard.classList.add('keyboard')

    task.appendChild(taskTop)
    taskTop.appendChild(taskLef)
    taskTop.appendChild(taskRig)

    task.appendChild(taskBut)
    taskBut.appendChild(scoreText)
    taskBut.appendChild(score)
    score.appendChild(scoreLef)
    score.appendChild(scoreCen)
    score.appendChild(scoreRig)


    word.appendChild(letter1)
    word.appendChild(letter2)
    word.appendChild(letter3)
    word.appendChild(letter4)
    word.appendChild(letter5)
    word.appendChild(letter6)
    word.appendChild(letter7)
    word.appendChild(letter8)
    word.appendChild(letter9)
    word.appendChild(letter10)

    taskLef.innerText = 'Hint: '
    taskRig.innerText = 'A human'
    scoreText.innerText = 'Incorrect guesses: '
    scoreLef.innerText = '0'
    scoreCen.innerText = '/'
    scoreRig.innerText = '6'

    score.classList.add('score')
    taskBut.classList.add('task-but')
    taskTop.classList.add('task-top')


    word.classList.add('word')
    letter1.classList.add('letter')
    letter2.classList.add('letter')
    letter3.classList.add('letter')
    letter4.classList.add('letter')
    letter5.classList.add('letter')
    letter6.classList.add('letter')
    letter7.classList.add('letter')
    letter8.classList.add('letter')
    letter9.classList.add('letter')
    letter10.classList.add('letter')

    const letters = document.querySelectorAll('.letter')
    for (let i = 0; i < letters.length; i += 1) {
        letters[i].classList.add('hide')
        letters[i].classList.add('letter-start')
    }

    let key1 = document.createElement('div')
    let key2 = document.createElement('div')
    let key3 = document.createElement('div')
    let key4 = document.createElement('div')
    let key5 = document.createElement('div')
    let key6 = document.createElement('div')
    let key7 = document.createElement('div')
    let key8 = document.createElement('div')
    let key9 = document.createElement('div')
    let key10 = document.createElement('div')
    let key11 = document.createElement('div')
    let key12 = document.createElement('div')
    let key13 = document.createElement('div')
    let key14 = document.createElement('div')
    let key15 = document.createElement('div')
    let key16 = document.createElement('div')
    let key17 = document.createElement('div')
    let key18 = document.createElement('div')
    let key19 = document.createElement('div')
    let key20 = document.createElement('div')
    let key21 = document.createElement('div')
    let key22 = document.createElement('div')
    let key23 = document.createElement('div')
    let key24 = document.createElement('div')
    let key25 = document.createElement('div')
    let key26 = document.createElement('div')



    keyboard.appendChild(key1)
    keyboard.appendChild(key2)
    keyboard.appendChild(key3)
    keyboard.appendChild(key4)
    keyboard.appendChild(key5)
    keyboard.appendChild(key6)
    keyboard.appendChild(key7)
    keyboard.appendChild(key8)
    keyboard.appendChild(key9)
    keyboard.appendChild(key10)
    keyboard.appendChild(key11)
    keyboard.appendChild(key12)
    keyboard.appendChild(key13)
    keyboard.appendChild(key14)
    keyboard.appendChild(key15)
    keyboard.appendChild(key16)
    keyboard.appendChild(key17)
    keyboard.appendChild(key18)
    keyboard.appendChild(key19)
    keyboard.appendChild(key20)
    keyboard.appendChild(key21)
    keyboard.appendChild(key22)
    keyboard.appendChild(key23)
    keyboard.appendChild(key24)
    keyboard.appendChild(key25)
    keyboard.appendChild(key26)


    key1.classList.add('key')
    key2.classList.add('key')
    key3.classList.add('key')
    key4.classList.add('key')
    key5.classList.add('key')
    key6.classList.add('key')
    key7.classList.add('key')
    key8.classList.add('key')
    key9.classList.add('key')
    key10.classList.add('key')
    key11.classList.add('key')
    key12.classList.add('key')
    key13.classList.add('key')
    key14.classList.add('key')
    key15.classList.add('key')
    key16.classList.add('key')
    key17.classList.add('key')
    key18.classList.add('key')
    key19.classList.add('key')
    key20.classList.add('key')
    key21.classList.add('key')
    key22.classList.add('key')
    key23.classList.add('key')
    key24.classList.add('key')
    key25.classList.add('key')
    key26.classList.add('key')

    const alp = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    const keys = document.querySelectorAll('.key')

    const words = [
        {
            "ans": "BANANAS",
            "hint": "Monkeys like it.",
        },
        {
            "ans": "CARROT",
            "hint": "Orange long vegetable.",
        },
        {
            "ans": "MICROPHONE",
            "hint": "You can record the sound using it.",
        },
        {
            "ans": "CAMERA",
            "hint": " You can take a photo using it.",
        },
        {
            "ans": "HTML",
            "hint": "Abbreviation for hyper text markup language.",
        },
        {
            "ans": "CSS",
            "hint": "Abbreviation for cascading style sheets.",
        },
        {
            "ans": "JS",
            "hint": "Abbreviation for java script.",
        },
        {
            "ans": "FOR",
            "hint": "You use it to create loop in programming.",
        },
        {
            "ans": "BUTTON",
            "hint": "Big red thing that you can press.",
        },
        {
            "ans": "CALCULATOR",
            "hint": "You can multiply and divide numbers using it.",
        },
    ]

    let wordNum = -1
    let gameResult = -1

    let incorret = 0
    let countCorrect = 0


    let modalWrap = document.createElement('div')
    let modal = document.createElement('div')

    let modalResult = document.createElement('div')
    let modalWord = document.createElement('div')
    let modalButton = document.createElement('div')
    let modalWordLeft = document.createElement('div')
    let modalWordRight = document.createElement('div')

    body.appendChild(modalWrap)
    modalWrap.appendChild(modal)

    modal.appendChild(modalResult)
    modal.appendChild(modalWord)
    modalWord.appendChild(modalWordLeft)
    modalWord.appendChild(modalWordRight)
    modal.appendChild(modalButton)

    modal.classList.add('modal')
    modalWrap.classList.add('modal-wrap')
    modalResult.classList.add('modal-result')
    modalWord.classList.add('modal-word')
    modalButton.classList.add('modal-button')
    modalWordLeft.classList.add('modal-word-left')
    modalWordRight.classList.add('modal-word-right')

    modalWordLeft.innerText = 'The secret word is: '
    modalButton.innerText = 'Play again'
    let prewWordNum = -1

    const generateWord = () => {
        while (prewWordNum === wordNum) {
            wordNum = Math.floor(Math.random() * words.length)
        }
        prewWordNum = wordNum
        taskRig.innerText = words[wordNum].hint
        for (let i = 0; i < words[wordNum].ans.length; i += 1) {
            letters[i].classList.remove('hide')
        }
        modalWrap.classList.add('hide')
    }
    generateWord()

    modalButton.addEventListener('click', function() {
        countCorrect = 0
        modalWrap.classList.add('hide')
        for (let i = 0; i < keys.length; i += 1) {
            keys[i].classList.remove('pressed')
        }

        for (let i = 0; i < letters.length; i += 1) {
            letters[i].classList.add('letter-start')
            letters[i].classList.add('hide')
            letters[i].innerText = ''
            incorret = 0
            scoreLef.innerText = incorret
        }
        for (let i = 0; i < bodyParts.length; i += 1) {
            bodyParts[i].classList.add('hide')
        }
        gameResult = -1
        generateWord()
    })

    function snowModal() {
        modalResult.innerText = gameResult
        modalWordRight.innerText = words[wordNum].ans
        modalWrap.classList.remove('hide')
        gameResult = 0
    }

    function makeKeyboard(i) {
        if (keys[i].classList.contains('pressed') === false) {
            let numsArr = []
            for (let j = 0; j < words[wordNum].ans.length; j += 1) {
                if (words[wordNum].ans[j] === alp[i]) {
                    numsArr.push(j)
                }
            }

            if (numsArr.length !== 0) {
                for (let k = 0; k < numsArr.length; k += 1) {
                    letters[numsArr[k]].classList.remove('letter-start')
                    letters[numsArr[k]].innerText = alp[i]
                }
                countCorrect += numsArr.length
            }

            if (numsArr.length === 0) {
                incorret = incorret + 1
                scoreLef.innerText = incorret
                if (incorret === 2) {
                    bodyParts[incorret].classList.remove('hide')
                    bodyParts[incorret].classList.add('pen-margin')
                } else if (incorret === 3) {
                    bodyParts[incorret - 2].classList.remove('hide')
                    bodyParts[incorret - 1].classList.remove('pen-margin')
                } else {
                    bodyParts[incorret - 1].classList.remove('hide')
                }
            }

            if (incorret === 6 && numsArr.length === 0) {
                gameResult = 'YOU LOOSE'
                snowModal()
            }

            keys[i].classList.add('pressed')

            if (countCorrect === words[wordNum].ans.length) {
                gameResult = 'YOU WIN! CONGRATULATIONS!'
                snowModal()
            }
        }
    }

    for (let i = 0; i < keys.length; i += 1) {
        keys[i].innerText = alp[i]
        keys[i].addEventListener('click', function() {
            makeKeyboard(i)
        })
    }

    document.addEventListener('keydown', (e) => {
        if (gameResult === -1) {
            let i = alp.indexOf(e.code[3])
            if (i !== -1) {
                makeKeyboard(i)
            }
        }
    })
})
