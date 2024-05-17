window.addEventListener('load', function(){
    const body = document.querySelector('.body')
    const divMain = document.createElement('div')
    const divMainTop = document.createElement('div')
    const title = document.createElement('div')
    const currentPictureDiv = document.createElement('div')
    const currentPictureText = document.createElement('div')
    const currentPicture = document.createElement('div')
    const watch = document.createElement('div')
    const nonogram = document.createElement('div')
    const nonogramTop = document.createElement('div')
    const nonogramBot = document.createElement('div')
    const nonogramBotLef = document.createElement('div')
    const nonogramTable = document.createElement('div')
    const chooseMenu = document.createElement('div')
    const chooseMenuText = document.createElement('div')
    const chooseMenuButtons = document.createElement('div')
    const winResults = document.createElement('div')
    const winResultsText = document.createElement('div')
    const winResultsTable = document.createElement('div')
    const winTableTop = document.createElement('div')
    const winTableBot = document.createElement('div')
    const winTableLef = document.createElement('div')
    const winTableRig = document.createElement('div')
    const gameMenu = document.createElement('div')
    const gameMenuText = document.createElement('div')
    const gameModesMenu = document.createElement('div')
    const modesText = document.createElement('div')
    const themeButton = document.createElement('div')
    const resetButton = document.createElement('div')
    const saveButton = document.createElement('div')
    const continueButton = document.createElement('div')
    const randomButton = document.createElement('div')
    const solutionButton = document.createElement('div')
    const divCapabilities = document.createElement('div')
    const soundButton = document.createElement('div')
    title.innerText = 'RSS Nonograms'
    soundButton.innerText = 'On/Off sound'
    gameMenuText.innerText = 'Game capabilities'
    modesText.innerText = 'Choose levels of difficulty in the game'
    watch.innerText = '00:00'
    themeButton.innerText = 'Set dark/light theme'
    resetButton.innerText = 'Reset game'
    saveButton.innerText = 'Save game'
    continueButton.innerText = 'Continue game'
    randomButton.innerText = 'Random game'
    solutionButton.innerText = 'Solution'
    winResultsText.innerText = 'The latest 5 win results'
    currentPictureText.innerText = 'Current picture is:'
    currentPicture.innerText = 'CHESS BOARD'

    body.appendChild(divMain)
    body.appendChild(divCapabilities)
    divCapabilities.appendChild(gameMenu)
    divCapabilities.appendChild(gameModesMenu)
    divCapabilities.appendChild(chooseMenu)
    body.appendChild(winResults)
    winResults.appendChild(winResultsText)
    winResults.appendChild(winResultsTable)
    winResultsTable.appendChild(winTableTop)
    winResultsTable.appendChild(winTableBot)
    winTableBot.appendChild(winTableLef)
    winTableBot.appendChild(winTableRig)
    gameModesMenu.appendChild(modesText)
    gameMenu.appendChild(gameMenuText)
    gameMenu.appendChild(themeButton)
    gameMenu.appendChild(soundButton)
    gameMenu.appendChild(resetButton)
    gameMenu.appendChild(saveButton)
    gameMenu.appendChild(continueButton)
    gameMenu.appendChild(randomButton)
    gameMenu.appendChild(solutionButton)
    chooseMenu.appendChild(chooseMenuText)
    chooseMenuText.innerText = 'Choose the picture you wish to solve'
    chooseMenu.appendChild(chooseMenuButtons)
    divMain.appendChild(divMainTop)
    divMain.appendChild(nonogram)
    divMainTop.appendChild(title)
    divMainTop.appendChild(currentPictureDiv)
    divMainTop.appendChild(watch)
    currentPictureDiv.appendChild(currentPictureText)
    currentPictureDiv.appendChild(currentPicture)
    nonogram.appendChild(nonogramTop)
    nonogram.appendChild(nonogramBot)
    nonogramBot.appendChild(nonogramBotLef)
    nonogramBot.appendChild(nonogramTable)
    divCapabilities.classList.add('div-capabilities')
    currentPicture.classList.add('current-picture')
    currentPictureText.classList.add('current-picture-text')
    currentPictureDiv.classList.add('current-picture-div')
    winTableTop.classList.add('win-table-top')
    winTableBot.classList.add('win-table-bot')
    winTableLef.classList.add('win-table-lef')
    winTableRig.classList.add('win-table-rig')
    title.classList.add('title')
    watch.classList.add('watch')
    divMain.classList.add('div-main')
    divMainTop.classList.add('div-main-top')
    winResults.classList.add('win-results')
    winResultsText.classList.add('win-results-text')
    winResultsTable.classList.add('win-results-table')
    nonogram.classList.add('nonogram')
    nonogramTop.classList.add('nonogram-top')
    nonogramBot.classList.add('nonogram-bot')
    nonogramBotLef.classList.add('nonogram-bot-lef')
    nonogramTable.classList.add('nonogram-table')
    chooseMenu.classList.add('choose-menu')
    chooseMenuText.classList.add('choose-menu-text')
    chooseMenuButtons.classList.add('choose-menu-buttons')
    gameMenu.classList.add('game-menu')
    gameModesMenu.classList.add('game-modes-menu')
    gameMenuText.classList.add('game-menu-text')
    soundButton.classList.add('choose-button')
    themeButton.classList.add('choose-button')
    resetButton.classList.add('choose-button')
    saveButton.classList.add('choose-button')
    continueButton.classList.add('choose-button')
    randomButton.classList.add('choose-button')
    solutionButton.classList.add('choose-button')
    modesText.classList.add('modes-text')

    const tasks = [
        {
            "name": "TOWER",
            "ans": [
                ['#', '.', '#', '.', '#'],
                ['#', '#', '#', '#', '#'],
                ['.', '#', '#', '#', '.'],
                ['.', '#', '.', '#', '.'],
                ['.', '#', '#', '#', '.'],
            ],
            "topNumbers": [
                ['', '', '3', '', ''],
                ['2', '4', '1', '4', '2'],
            ],
            "leftNumbers": [
                ['', '', '', '', '1'],
                ['', '1', '', '', '1'],
                ['3', '1', '3', '5', '1'],
            ],
        },
        {
            "name": "CUBIC HEAD",
            "ans": [
                ['#', '#', '#', '#', '#'],
                ['#', '.', '#', '.', '#'],
                ['#', '#', '#', '.', '#'],
                ['#', '.', '#', '.', '#'],
                ['#', '#', '#', '#', '#'],
            ],
            "topNumbers": [
                ['', '1', '', '', ''],
                ['', '1', '', '1', ''],
                ['5', '1', '5', '1', '5'],
            ],
            "leftNumbers": [
                ['', 1, '', '1', ''],
                ['', '1', '3', '1', ''],
                ['5', '1', '1', '1', '5'],
            ],
        },
        {
            "name": "CAR",
            "ans": [
                ['.', '.', '.', '.', '.'],
                ['.', '#', '#', '#', '.'],
                ['#', '#', '#', '#', '#'],
                ['#', '#', '#', '#', '#'],
                ['.', '#', '.', '#', '.'],
            ],
            "topNumbers": [
                ['2', '4', '3', '4', '2'],
            ],
            "leftNumbers": [
                ['1', '', '', '', ''],
                ['1', '5', '5', '3', ''],
            ],
        },
        {
            "name": "FLOWER",
            "ans": [
                ['.', '#', '#', '#', '.'],
                ['#', '#', '#', '#', '#'],
                ['#', '#', '.', '#', '#'],
                ['#', '#', '#', '#', '#'],
                ['.', '#', '#', '#', '.'],
            ],
            "topNumbers": [
                ['', '', '2', '', ''],
                ['3', '5', '2', '5', '3'],
            ],
            "leftNumbers": [
                ['', '', '2', '', ''],
                ['3', '5', '2', '5', '3'],
            ],
        },
        {
            "name": "CHESS BOARD",
            "ans": [
                ['#', '.', '#', '.', '#'],
                ['.', '#', '.', '#', '.'],
                ['#', '.', '#', '.', '#'],
                ['.', '#', '.', '#', '.'],
                ['#', '.', '#', '.', '#'],
            ],
            "topNumbers": [
                [1, '', '1', '', 1],
                ['1', '1', '1', '1', '1'],
                ['1', '1', '1', '1', '1'],
            ],
            "leftNumbers": [
                [1, '', 1, '', 1],
                ['1', '1', '1', '1', '1'],
                ['1', '1', '1', '1', '1'],
            ],
        },
        {
            "name": "APPLE",
            "ans": [
                ['.', '.', '#', '#', '.', '.', '.', '.', '.', '.'],
                ['.', '#', '#', '#', '#', '.', '#', '.', '.', '.'],
                ['#', '.', '.', '.', '.', '#', '.', '.', '.', '.'],
                ['.', '.', '#', '#', '.', '#', '.', '#', '#', '.'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '.', '#'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['.', '#', '#', '#', '#', '#', '#', '.', '#', '#'],
                ['.', '.', '#', '#', '#', '#', '.', '#', '#', '.'],
                ['.', '.', '.', '#', '#', '#', '#', '#', '.', '.'],
            ],
            "topNumbers": [
                ['', '', '', '', '', '', '1', '', '', '',],
                ['', '1', '2', '2', '1', '', '4', '4', '2', '',],
                ['1', '4', '6', '7', '6', '8', '1', '2', '3', '4',],
            ],
            "leftNumbers": [
                ['', '', '', '', '', '', '2', '', '', '',],
                ['', '4', '6', '', '7', '', '1', '1', '4', '',],
                ['5', '2', '2', '9', '1', '9', '2', '1', '1', '2',],
            ],
        },
        {
            "name": "HEART",
            "ans": [
                ['.', '.', '#', '.', '.', '.', '.', '#', '.', '.'],
                ['.', '#', '#', '#', '.', '.', '#', '#', '#', '.'],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['#', '#', '.', '#', '#', '#', '#', '#', '#', '#'],
                ['#', '#', '.', '#', '#', '#', '#', '#', '#', '#'],
                ['.', '#', '#', '.', '#', '#', '#', '#', '#', '.'],
                ['.', '.', '#', '#', '.', '#', '#', '#', '.', '.'],
                ['.', '.', '.', '#', '#', '#', '#', '.', '.', '.'],
                ['.', '.', '.', '.', '#', '#', '.', '.', '.', '.'],
            ],
            "topNumbers": [
                ['', '', '4', '5', '5', '', '', '', '', '',],
                ['4', '6', '2', '2', '2', '8', '8', '8', '6', '4',],
            ],
            "leftNumbers": [
                ['', '', '2', '2', '2', '2', '', '', '3', '1',],
                ['2', '4', '3', '5', '7', '7', '10', '10', '3', '1',],
            ],
        },
        {
            "name": "QUESTION MARK",
            "ans": [
                ['.', '.', '#', '#', '#', '#', '#', '#', '.', '.'],
                ['.', '#', '#', '.', '.', '.', '.', '#', '#', '.'],
                ['.', '#', '#', '.', '.', '.', '.', '#', '#', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '#', '#', '.'],
                ['.', '.', '.', '.', '.', '.', '#', '#', '#', '.'],
                ['.', '.', '.', '.', '#', '#', '#', '#', '.', '.'],
                ['.', '.', '.', '.', '#', '#', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '#', '#', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '#', '#', '.', '.', '.', '.'],
            ],
            "topNumbers": [
                ['', '', '', '', '1', '1', '', '', '', '',],
                ['', '', '', '', '2', '2', '1', '', '', '',],
                ['', '2', '3', '1', '2', '2', '2', '6', '4', '',],
            ],
            "leftNumbers": [
                ['', '', '', '', '', '', '', '2', '2', '',],
                ['2', '2', '', '2', '4', '3', '2', '2', '2', '6',],
            ],
        },
        {
            "name": "CUP",
            "ans": [
                ['.', '.', '#', '.', '#', '.', '#', '.', '.', '.'],
                ['.', '.', '#', '.', '#', '.', '#', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '.', '.'],
                ['.', '#', '#', '.', '#', '#', '#', '#', '#', '#'],
                ['.', '#', '#', '.', '#', '#', '#', '#', '.', '#'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '#', '.'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '.', '.'],
                ['#', '.', '#', '#', '#', '#', '#', '.', '.', '#'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '#', '.'],
            ],
            "topNumbers": [
                ['', '', '', '', '', '', '', '', '1', '',],
                ['', '5', '2', '1', '2', '', '2', '5', '1', '2',],
                ['1', '1', '7', '4', '7', '7', '7', '1', '1', '1',],
            ],
            "leftNumbers": [
                ['', '1', '', '', '2', '', '', '', '1', '1',],
                ['', '5', '', '', '4', '2', '', '', '1', '1',],
                ['8', '1', '7', '8', '1', '6', '7', '', '1', '1',],
            ],
        },
        {
            "name": "HOUSE",
            "ans": [
                ['.', '.', '.', '.', '#', '#', '.', '.', '.', '.'],
                ['.', '.', '.', '#', '#', '#', '#', '.', '.', '.'],
                ['.', '.', '#', '#', '#', '#', '#', '#', '.', '.'],
                ['.', '#', '#', '#', '#', '#', '#', '#', '#', '.'],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['#', '#', '#', '#', '.', '.', '#', '#', '#', '#'],
                ['#', '#', '#', '#', '.', '.', '#', '#', '#', '#'],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
            ],
            "topNumbers": [
                ['', '', '', '', '6', '6', '', '', '', '',],
                ['6', '7', '8', '9', '3', '3', '9', '8', '7', '6',],
            ],
            "leftNumbers": [
                ['', '', '', '4', '4', '', '', '', '', '',],
                ['10', '10', '10', '4', '4', '10', '8', '6', '4', '2',],
            ],
        },
        {
            "name": "AXE",
            "ans": [
                ['.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '.', '.', '.', '.', '.', ],
                ['.', '.', '.', '.', '.', '#', '#', '.', '#', '#', '.', '.', '#', '#', '.', ],
                ['.', '.', '.', '.', '#', '#', '.', '#', '#', '#', '.', '#', '#', '#', '.', ],
                ['.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '#', '#', '.', '#', '#', '#', '.', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '.', '.', '#', '#', '#', '#', '#', '#', '#', ],
                ['.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '.', '#', '#', '#', '#', ],
                ['.', '.', '.', '.', '.', '.', '#', '#', '#', '.', '#', '#', '#', '#', '#', ],
                ['.', '.', '.', '.', '.', '#', '#', '#', '.', '.', '#', '#', '#', '#', '#', ],
                ['.', '.', '.', '.', '#', '#', '#', '.', '.', '#', '#', '#', '#', '#', '.', ],
                ['.', '.', '.', '#', '#', '#', '.', '.', '.', '#', '#', '#', '#', '.', '.', ],
                ['.', '.', '#', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ],
                ['.', '#', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ],
                ['#', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ],
                ['#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ],
            ],


            "topNumbers": [
                ['', '', '', '', '4', '5', '2', '3', '4', '7', '3', '', '3', '2', '', ],
                ['2', '3', '3', '3', '3', '3', '3', '3', '3', '2', '4', '9', '6', '5', '4', ],
            ],
            "leftNumbers": [
                ['', '', '', '', '', '', '', '', '', '', '', '', '2', '2', '', ],
                ['', '', '', '', '3', '3', '3', '3', '3', '2', '4', '', '3', '2', '', ],
                ['2', '3', '3', '3', '4', '5', '5', '5', '4', '7', '3', '9', '3', '2', '4', ],
            ],
        },
        {
            "name": "DUCK",
            "ans": [
                ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '.', '.', '.', ],
                ['.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '.', '.', ],
                ['.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '.', '#', '#', '#', ],
                ['.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '.', ],
                ['.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '.', '.', ],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '.', '.', '.', ],
                ['.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '.', '.', ],
                ['#', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '.', ],
                ['#', '#', '#', '.', '.', '#', '#', '#', '.', '.', '.', '#', '#', '#', '.', ],
                ['#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '#', '.', '#', '#', '.', ],
                ['.', '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '.', '#', '#', '.', ],
                ['.', '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', '#', '#', '.', '.', ],
                ['.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '.', '#', '#', '#', '.', '.', '.', '.', '.', ],
                ['.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '.', '.', '.', ],
            ],
            "topNumbers": [
                ['', '', '', '', '', '', '', '', '', '', '8', '2', '', '', '', ],
                ['', '', '', '', '', '', '3', '2', '4', '8', '2', '6', '', '', '', ],
                ['', '', '', '', '', '', '2', '2', '2', '2', '1', '2', '4', '2', '', ],
                ['3', '4', '5', '4', '5', '6', '1', '5', '6', '3', '1', '1', '6', '4', '1', ],
            ],
            "leftNumbers": [
                ['', '', '', '', '5', '7', '3', '', '', '', '', '', '', '', '', ],
                ['', '2', '', '8', '4', '3', '3', '1', '', '', '', '', '4', '', '', ],
                ['6', '3', '10', '2', '2', '2', '3', '8', '5', '3', '5', '7', '3', '5', '3',],
            ],
        },
        {
            "name": "CLOVER",
            "ans": [
                ['.', '.', '.', '.', '.', '#', '#', '.', '#', '#', '.', '.', '.', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', '.', ],
                ['.', '#', '#', '#', '.', '#', '#', '#', '#', '#', '.', '#', '#', '#', '.', ],
                ['#', '#', '#', '#', '#', '.', '#', '#', '#', '.', '#', '#', '#', '#', '#', ],
                ['#', '#', '#', '#', '#', '#', '.', '#', '.', '#', '#', '#', '#', '#', '#', ],
                ['.', '#', '#', '#', '#', '#', '#', '.', '#', '#', '#', '#', '#', '#', '.', ],
                ['#', '#', '#', '#', '#', '#', '.', '#', '.', '#', '#', '#', '#', '#', '#', ],
                ['#', '#', '#', '#', '#', '.', '.', '#', '.', '.', '#', '#', '#', '#', '#', ],
                ['.', '#', '#', '#', '.', '.', '.', '#', '.', '.', '.', '#', '#', '#', '.', ],
                ['.', '.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', ],
                ['.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', ],
                ['.', '.', '#', '#', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', ],
                ['.', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ],
            ],
            "topNumbers": [
                ['', '', '', '', '3', '5', '6', '', '', '', '', '', '', '', '', ],
                ['2', '', '7', '7', '5', '3', '1', '6', '6', '5', '3', '', '', '', '2', ],
                ['2', '7', '2', '2', '1', '2', '2', '4', '1', '3', '5', '7', '7', '7', '2', ],
            ],
            "leftNumbers": [
                ['', '', '', '', '3', '5', '6', '', '6', '5', '3', '', '', '', '', ],
                ['', '', '', '', '1', '1', '1', '6', '1', '3', '5', '', '', '', '2', ],
                ['2', '4', '2', '2', '3', '5', '6', '6', '6', '5', '3', '7', '7', '7', '2', ],
            ],
        },
        {
            "name": "ROOSTER",
            "ans": [
                ['.', '.', '#', '#', '#', '.', '#', '#', '.', '.', '.', '.', '.', '.', '.', ],
                ['.', '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', '.', '.', '.', ],
                ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', '.', '.', '.', '.', ],
                ['#', '#', '#', '#', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '.', ],
                ['.', '#', '#', '.', '#', '#', '#', '#', '.', '.', '.', '.', '.', '.', '.', ],
                ['.', '.', '.', '#', '#', '#', '#', '.', '#', '#', '.', '.', '.', '.', '.', ],
                ['.', '#', '#', '#', '#', '.', '#', '#', '.', '#', '#', '.', '.', '.', '.', ],
                ['#', '#', '#', '#', '#', '#', '#', '#', '.', '#', '#', '#', '.', '.', '.', ],
                ['.', '.', '.', '#', '#', '#', '#', '.', '.', '#', '#', '#', '.', '.', '.', ],
                ['.', '.', '#', '#', '#', '#', '.', '.', '#', '#', '#', '#', '#', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '.', '#', '#', '#', '#', '#', '#', '.', '.', ],
                ['.', '.', '.', '.', '#', '#', '.', '#', '#', '#', '#', '#', '#', '#', '.', ],
                ['.', '.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '.', ],
                ['.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '.', ],
                ['.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', ],
            ],
            "topNumbers": [
                ['', '', '', '', '', '2', '', '3', '', '', '', '', '', '', '', ],
                ['', '', '5', '', '', '2', '3', '1', '3', '', '', '', '', '', '', ],
                ['2', '4', '2', '4', '3', '5', '5', '2', '1', '2', '', '', '', '', '', ],
                ['1', '2', '1', '5', '8', '2', '3', '5', '6', '10', '9', '8', '6', '4', '1', ],
            ],
            "leftNumbers": [
                ['', '', '', '', '', '', '', '', '4', '', '', '', '', '', '', ],
                ['', '', '', '2', '2', '4', '4', '8', '2', '4', '2', '4', '', '', '3', ],
                ['10', '9', '8', '7', '6', '5', '3', '3', '2', '2', '4', '2', '10', '8', '2', ],
            ],
        },
        {
            "name": "RAT",
            "ans": [
                ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '#', '#', '#', ],
                ['.', '.', '.', '.', '.', '#', '#', '#', '#', '.', '.', '#', '#', '.', '#', ],
                ['.', '.', '.', '#', '#', '#', '.', '.', '#', '.', '.', '#', '.', '#', '.', ],
                ['#', '#', '#', '.', '#', '.', '.', '#', '#', '.', '.', '#', '.', '.', '.', ],
                ['#', '#', '.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '#', '.', '.', ],
                ['.', '#', '#', '#', '#', '.', '.', '#', '#', '.', '.', '.', '#', '#', '.', ],
                ['.', '.', '.', '.', '#', '#', '.', '.', '#', '#', '.', '.', '.', '#', '#', ],
                ['.', '.', '.', '.', '.', '#', '.', '.', '.', '#', '#', '#', '.', '.', '#', ],
                ['.', '.', '.', '.', '.', '#', '#', '.', '.', '.', '.', '#', '#', '.', '#', ],
                ['.', '.', '.', '#', '#', '#', '#', '.', '.', '.', '.', '.', '#', '#', '#', ],
                ['.', '.', '.', '#', '.', '#', '.', '.', '#', '#', '.', '.', '.', '#', '#', ],
                ['.', '.', '.', '.', '.', '#', '.', '.', '#', '.', '.', '.', '.', '#', '.', ],
                ['.', '.', '.', '.', '.', '.', '#', '.', '#', '.', '.', '.', '.', '#', '.', ],
                ['.', '.', '.', '.', '.', '#', '#', '#', '#', '#', '.', '.', '#', '#', '.', ],
                ['.', '.', '.', '#', '#', '#', '.', '#', '#', '.', '#', '#', '#', '.', '.', ],
            ],
            "topNumbers": [
                ['', '', '', '1', '2', '', '', '', '', '', '', '', '2', '1', '', ],
                ['', '', '', '1', '2', '2', '1', '1', '3', '2', '', '4', '2', '1', '', ],
                ['', '', '1', '2', '1', '6', '2', '3', '2', '1', '1', '2', '2', '2', '2', ],
                ['2', '3', '1', '1', '1', '2', '2', '2', '5', '1', '1', '1', '2', '5', '5', ],
            ],
            "leftNumbers": [
                ['', '', '', '', '1', '', '', '', '', '', '', '3', '3', '', '', ],
                ['3', '', '1', '1', '1', '', '2', '1', '2', '4', '2', '1', '1', '4', '', ],
                ['2', '5', '1', '1', '2', '4', '2', '3', '2', '2', '1', '2', '1', '2', '', ],
                ['3', '2', '1', '1', '2', '3', '1', '1', '2', '2', '2', '1', '1', '1', '3', ],
            ],
        },
    ]

    let themeNow = 'light'
    const pressAud = new Audio()
    pressAud.src ="./assets/press.mp3"
    const crossAud = new Audio()
    crossAud.src ="./assets/cross.mp3"
    const unpressAud = new Audio()
    unpressAud.src ="./assets/unpress.mp3"
    const victoryAud = new Audio()
    victoryAud.src ="./assets/victory.mp3"
    let winsData = []
    const winColumnNames = ['Puzzle name', 'Difficulty', 'Stop-watch result']
    const winRowsAmount = 5
    for (let i = 0; i < winColumnNames.length; i += 1) {
        const winColumnName = document.createElement('div')
        winColumnName.innerText = winColumnNames[i]
        winColumnName.classList.add('win-column-name')
        winColumnName.classList.add('cell-another')
        winTableTop.appendChild(winColumnName)
    }
    for (let i = 0; i < winRowsAmount; i += 1) {
        const winRowName = document.createElement('div')
        winRowName.innerText = i + 1
        winRowName.classList.add('win-row-name')
        winRowName.classList.add('cell-another')
        winTableLef.appendChild(winRowName)
    }

    let currentTime = 0
    let watchInterval

    const startWatch = () => {
        clearInterval(watchInterval);
        watchInterval = setInterval(updateWatch, 10);
    }

    function updateWatch () {
        currentTime++;
        let ms = currentTime
        let s = parseInt(ms / 100)
        ms -= s * 100
        watch.innerHTML = String(s) + ':' + String(ms).padStart(2, 0)
    }
    const templates = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14]]
    const nonogramModes = [5, 10, 15]
    const modesNames = ['Easy 5x5', 'Medium 10x10', 'Hard 15x15']
    const modesWidth = ['easy-width', 'medium-width', 'hard-width']
    let modeNumber = 0
    let currentNonogramMode = nonogramModes[modeNumber]
    let currentTemplateNumbers = templates[modeNumber]
    let currentTaskNum = currentTemplateNumbers[0]
    let pressedArr = []
    let isStarted = false
    let isSolved = false
    let isHaveSound = true
    const updateTheme = () => {
        const chooseButtons = document.querySelectorAll('.choose-button')
        const allCells = document.querySelectorAll('.cell')
        const anotherCells = document.querySelectorAll('.cell-another')
        const leftDigitCells = document.querySelectorAll('.left-table-cell')
        const topDigitCells = document.querySelectorAll('.top-table-cell')
        const cellsBorderRight = document.querySelectorAll('.cell-border-right')
        const cellsBorderBottom = document.querySelectorAll('.cell-border-bottom')
        nonogramTop.innerHTML = ''
        nonogramBotLef.innerHTML = ''
        createNonogram(currentTaskNum)
        if (themeNow === 'dark') {
            body.classList.add('body-dark')
        } else {
            body.classList.remove('body-dark')
        }
        for (let w = 0; w < cellsBorderRight.length; w += 1) {
            if (themeNow === 'dark') {
                cellsBorderRight[w].classList.add('cell-border-right-dark')
            } else {
                cellsBorderRight[w].classList.remove('cell-border-right-dark')
            }
        }
        for (let w = 0; w < cellsBorderBottom.length; w += 1) {
            if (themeNow === 'dark') {
                cellsBorderBottom[w].classList.add('cell-border-bottom-dark')
            } else {
                cellsBorderBottom[w].classList.remove('cell-border-bottom-dark')
            }
        }
        for (let w = 0; w < chooseButtons.length; w += 1) {
            if (themeNow === 'dark') {
                chooseButtons[w].classList.add('choose-button-dark')
            } else {
                chooseButtons[w].classList.remove('choose-button-dark')
            }
        }
        for (let w = 0; w < allCells.length; w += 1) {
            if (themeNow === 'dark') {
                allCells[w].classList.add('cell-dark')
            } else {
                allCells[w].classList.remove('cell-dark')
            }
        }
        for (let w = 0; w < anotherCells.length; w += 1) {
            if (themeNow === 'dark') {
                anotherCells[w].classList.add('cell-dark')
            } else {
                anotherCells[w].classList.remove('cell-dark')
            }
        }
        let pressedArrCopyTheme = []
        for (let d = 0; d < pressedArr.length; d += 1) {
            pressedArrCopyTheme[d] = new Array(pressedArr.length).fill('.')
        }
        for (let y = 0; y < pressedArr.length; y += 1) {
            for (let z = 0; z < pressedArr.length; z += 1) {
                pressedArrCopyTheme[y][z] = pressedArr[y][z]
            }
        }
        pressedArrCopyTheme = pressedArrCopyTheme.join().split(',')
        for (let k = 0; k < nonogramTable.children.length; k += 1) {
            if (pressedArrCopyTheme[k] === '#') {
                if (themeNow === 'dark') {
                    nonogramTable.children[k].classList.add('pressed-dark')
                } else {
                    nonogramTable.children[k].classList.remove('pressed-dark')
                }
            }
            if (nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 1] === ('crossed')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 2] === ('crossed')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 3] === ('crossed')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 4] === ('crossed')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 5] === ('crossed')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 6] === ('crossed')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 1] === ('crossed-dark')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 2] === ('crossed-dark')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 3] === ('crossed-dark')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 4] === ('crossed-dark')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 5] === ('crossed-dark')
                || nonogramTable.children[k].classList[nonogramTable.children[k].classList.length - 6] === ('crossed-dark')
            ) {
                if (themeNow === 'light') {
                    nonogramTable.children[k].classList.remove('crossed-dark')
                }
                else {
                    nonogramTable.children[k].classList.add('crossed-dark')
                }
            }
        }
        for (let i = 0; i < leftDigitCells.length; i += 1) {
            if (themeNow === 'light') {
                leftDigitCells[i].classList.remove('cell-dark')
                leftDigitCells[i].classList.add('cell')
            } else {
                leftDigitCells[i].classList.add('cell-dark')
                leftDigitCells[i].classList.remove('cell')
            }
        }
        for (let i = 0; i < topDigitCells.length; i += 1) {
            if (themeNow === 'light') {
                topDigitCells[i].classList.remove('cell-dark')
                topDigitCells[i].classList.add('cell')
            } else {
                topDigitCells[i].classList.add('cell-dark')
                topDigitCells[i].classList.remove('cell')
            }
        }
        if (themeNow === 'dark') {
            nonogramTable.classList.add('nonogram-table-dark')
            nonogramBotLef.classList.add('nonogram-bot-lef-dark')
            nonogramTop.classList.add('nonogram-top-dark')
        } else {
            nonogramTable.classList.remove('nonogram-table-dark')
            nonogramBotLef.classList.remove('nonogram-bot-lef-dark')
            nonogramTop.classList.remove('nonogram-top-dark')
        }
    }
    const createNonogram = (nonogramNum) => {
        currentPicture.innerText = tasks[currentTaskNum].name
        for (let i = 0; i < tasks[nonogramNum].topNumbers.length; i += 1) {
            const topTableRow = document.createElement('div')
            nonogramTop.appendChild(topTableRow)
            topTableRow.classList.add('top-table-row')
            for (let j = 0; j < tasks[nonogramNum].topNumbers[i].length; j += 1) {
                const topTableCell = document.createElement('div')
                topTableRow.appendChild(topTableCell)
                topTableCell.classList.add('top-table-cell')
                topTableCell.classList.add('cell')
                if ((j + 1) % 5 === 0) {
                    topTableCell.classList.add('cell-border-right')
                }
                topTableCell.classList.remove('cell-border-right-dark')
                topTableCell.classList.remove('cell-dark')
                if (themeNow === 'dark') {
                    topTableCell.classList.add('cell-dark')
                    if ((j + 1) % 5 === 0) {
                        topTableCell.classList.add('cell-border-right-dark')
                    }
                }
                topTableCell.innerText = tasks[nonogramNum].topNumbers[i][j]
            }
        }
        for (let i = 0; i < tasks[nonogramNum].leftNumbers.length; i += 1) {
            const leftTableRow = document.createElement('div')
            nonogramBotLef.appendChild(leftTableRow)
            leftTableRow.classList.add('left-table-row')
            for (let j = 0; j < tasks[nonogramNum].leftNumbers[i].length; j += 1) {
                const leftTableCell = document.createElement('div')
                leftTableRow.appendChild(leftTableCell)
                leftTableCell.classList.add('left-table-cell')
                leftTableCell.classList.add('cell')
                if ((j) % 5 === 0) {
                    leftTableCell.classList.add('cell-border-bottom')
                }
                leftTableCell.classList.remove('cell-border-bottom-dark')
                leftTableCell.classList.remove('cell-dark')
                if (themeNow === 'dark') {
                    leftTableCell.classList.add('cell-dark')
                    if ((j) % 5 === 0) {
                        leftTableCell.classList.add('cell-border-bottom-dark')
                    }
                }
                leftTableCell.innerText = tasks[nonogramNum].leftNumbers[i][j]
            }
        }
        nonogramTable.classList.remove(modesWidth[0])
        nonogramTable.classList.remove(modesWidth[1])
        nonogramTable.classList.remove(modesWidth[2])
        nonogramTable.classList.add(modesWidth[modeNumber])
    }
    createNonogram(currentTaskNum)

    const createTable = () => {
        isSolved = false
        currentPicture.innerText = tasks[currentTaskNum].name
        for (let i = 0; i < currentNonogramMode; i += 1) {
            pressedArr[i] = new Array(currentNonogramMode).fill('.')
            for (let j = 0; j < currentNonogramMode; j += 1) {
                const cell = document.createElement('div')
                nonogramTable.appendChild(cell)
                cell.classList.add('cell')
                cell.classList.add('cell-' + i + 'd' + j)
                if ((j + 1) % 5 === 0) {
                    cell.classList.add('cell-border-right')
                }
                if ((i + 1) % 5 === 0) {
                    cell.classList.add('cell-border-bottom')
                }
                cell.addEventListener('click', (event) => {
                    if (isSolved === false) {
                            cell.classList.toggle('pressed')
                        if (themeNow === 'dark') {
                            cell.classList.toggle('pressed-dark')
                        }
                        if (cell.classList[cell.classList.length - 1] === 'pressed'
                            || cell.classList[cell.classList.length - 2] === 'pressed'
                            || cell.classList[cell.classList.length - 3] === 'pressed'
                            || cell.classList[cell.classList.length - 4] === 'pressed'
                            || cell.classList[cell.classList.length - 5] === 'pressed'
                            || cell.classList[cell.classList.length - 6] === 'pressed') {
                            if (isHaveSound === true) {
                                pressAud.play()
                            }

                        } else {
                            if (isHaveSound === true) {
                                unpressAud.play()
                            }
                        }
                        cell.classList.remove('crossed')
                        cell.classList.remove('crossed-dark')
                        if (cell.classList[cell.classList.length - 1] === 'pressed'
                            || cell.classList[cell.classList.length - 2] === 'pressed'
                            || cell.classList[cell.classList.length - 3] === 'pressed'
                            || cell.classList[cell.classList.length - 4] === 'pressed'
                            || cell.classList[cell.classList.length - 5] === 'pressed'
                            || cell.classList[cell.classList.length - 6] === 'pressed') {
                            if (modeNumber !== 2) {
                                pressedArr[cell.classList[1][cell.classList[1].length - 3]]
                                    [cell.classList[1][cell.classList[1].length - 1]] = '#'
                            }
                            if (modeNumber === 2) {
                                let cellParts = cell.classList[1].split('-')
                                if (cellParts[1].length < 4) {
                                    pressedArr[cell.classList[1][cell.classList[1].length - 3]]
                                        [cell.classList[1][cell.classList[1].length - 1]] = '#'
                                } else {
                                    let positions = cellParts[1].split('d')
                                    pressedArr[positions[0]][positions[1]] = '#'
                                }
                            }
                        } else if (cell.classList[cell.classList.length - 1] !== 'pressed') {
                            if (cell.classList[cell.classList.length - 2] !== 'pressed'
                                && cell.classList[cell.classList.length - 3] !== 'pressed'
                                && cell.classList[cell.classList.length - 4] !== 'pressed'
                                && cell.classList[cell.classList.length - 5] !== 'pressed'
                                && cell.classList[cell.classList.length - 6] !== 'pressed') {

                                if (modeNumber !== 2) {
                                    pressedArr[cell.classList[1][cell.classList[1].length - 3]]
                                        [cell.classList[1][cell.classList[1].length - 1]] = '.'
                                }
                                if (modeNumber === 2) {
                                    let cellParts = cell.classList[1].split('-')
                                    if (cellParts[1].length < 4) {
                                        pressedArr[cell.classList[1][cell.classList[1].length - 3]]
                                            [cell.classList[1][cell.classList[1].length - 1]] = '.'
                                    } else {
                                        let positions = cellParts[1].split('d')
                                        pressedArr[positions[0]][positions[1]] = '.'
                                    }
                                }


                            }
                        }
                        if (!isStarted) {
                            startWatch()
                            isStarted = true
                        }
                        if (pressedArr.toString() === tasks[currentTaskNum].ans.toString()) {
                            clearInterval(watchInterval)
                            currentTime = 0
                            saveWinsData()
                            drawWins()
                            isSolved = true
                            setTimeout(function () {
                                if (isHaveSound === true) {
                                    victoryAud.play()
                                }
                            }, 20)
                            setTimeout(function () {
                                alert('Great! You have solved the nonogram in ' + (watch.innerText).toString().slice(0, watch.innerText.length - 3) + ' seconds!')
                            }, 80)
                        }
                    }
                })

                cell.addEventListener('contextmenu', (event) => {
                    if (isSolved === false) {
                        if (cell.classList[cell.classList.length - 1] === 'pressed'
                            || cell.classList[cell.classList.length - 2] === 'pressed'
                            || cell.classList[cell.classList.length - 3] === 'pressed'
                            || cell.classList[cell.classList.length - 4] === 'pressed'
                            || cell.classList[cell.classList.length - 5] === 'pressed'
                            || cell.classList[cell.classList.length - 6] === 'pressed') {
                            if (modeNumber !== 2) {
                                pressedArr[cell.classList[1][cell.classList[1].length - 3]]
                                    [cell.classList[1][cell.classList[1].length - 1]] = '.'
                            }
                            if (modeNumber === 2) {
                                let cellParts = cell.classList[1].split('-')
                                if (cellParts[1].length < 4) {
                                    pressedArr[cell.classList[1][cell.classList[1].length - 3]]
                                        [cell.classList[1][cell.classList[1].length - 1]] = '.'
                                } else {
                                    let positions = cellParts[1].split('d')
                                    pressedArr[positions[0]][positions[1]] = '.'
                                }
                            }

                        }
                    cell.classList.remove('pressed')
                    cell.classList.remove('pressed-dark')
                    cell.classList.toggle('crossed')
                    if (themeNow === 'dark') {
                        cell.classList.toggle('crossed-dark')
                    }
                    if (cell.classList[cell.classList.length - 1] === 'pressed'
                        || cell.classList[cell.classList.length - 2] === 'pressed'
                        || cell.classList[cell.classList.length - 3] === 'pressed'
                        || cell.classList[cell.classList.length - 4] === 'pressed'
                        || cell.classList[cell.classList.length - 5] === 'pressed'
                        || cell.classList[cell.classList.length - 6] === 'pressed') {
                        if (isHaveSound === true) {
                            pressAud.play()
                        }
                    } else if (cell.classList[cell.classList.length - 1] === 'crossed'
                        || cell.classList[cell.classList.length - 2] === 'crossed'
                        || cell.classList[cell.classList.length - 3] === 'crossed'
                        || cell.classList[cell.classList.length - 4] === 'crossed'
                        || cell.classList[cell.classList.length - 5] === 'crossed'
                        || cell.classList[cell.classList.length - 6] === 'crossed'
                        || cell.classList[cell.classList.length - 1] === 'crossed-dark'
                        || cell.classList[cell.classList.length - 2] === 'crossed-dark'
                        || cell.classList[cell.classList.length - 3] === 'crossed-dark'
                        || cell.classList[cell.classList.length - 4] === 'crossed-dark'
                        || cell.classList[cell.classList.length - 5] === 'crossed-dark'
                        || cell.classList[cell.classList.length - 6] === 'crossed-dark'
                    ) {
                        if (isHaveSound === true) {
                            crossAud.play()
                        }
                    } else {
                        if (isHaveSound === true) {
                            unpressAud.play()
                        }
                    }

                    if (!isStarted) {
                        startWatch()
                        isStarted = true
                    }

                    if (pressedArr.toString() === tasks[currentTaskNum].ans.toString()) {
                        clearInterval(watchInterval)
                        currentTime = 0
                        saveWinsData()
                        drawWins()
                        isSolved = true
                        setTimeout(function () {
                            if (isHaveSound === true) {
                                victoryAud.play()
                            }
                        }, 20)
                        setTimeout(function () {
                            alert('Great! You have solved the nonogram in ' + (watch.innerText).toString().slice(0, watch.innerText.length - 3) + ' seconds!')
                        }, 80)
                    }
                    event.preventDefault()
                    }
                })
            }
        }
        nonogramTable.classList.remove(modesWidth[0])
        nonogramTable.classList.remove(modesWidth[1])
        nonogramTable.classList.remove(modesWidth[2])
        nonogramTable.classList.add(modesWidth[modeNumber])
    }
    createTable()
    const createChoose = () => {
        for (let i = 0; i < currentTemplateNumbers.length; i += 1) {
            const chooseButton = document.createElement('div')
            chooseMenuButtons.appendChild(chooseButton)
            chooseButton.classList.add('choose-button')
            chooseButton.innerText = tasks[currentTemplateNumbers[i]].name
            chooseButton.addEventListener('click', function() {
                currentPicture.innerText = tasks[currentTemplateNumbers[i]].name
                currentTaskNum = currentTemplateNumbers[i]
                nonogramTop.innerHTML = ''
                nonogramBotLef.innerHTML = ''
                nonogramTable.innerHTML = ''
                createNonogram(currentTemplateNumbers[i])
                createTable()
                currentPicture.innerText = tasks[currentTaskNum].name
                isStarted = false
                clearInterval(watchInterval)
                watch.innerText = '00:00'
                currentTime = 0
                currentPicture.innerText = tasks[currentTaskNum].name
                for (let k = 0; k < nonogramTable.children.length; k += 1) {
                    nonogramTable.children[k].classList.remove('pressed')
                    nonogramTable.children[k].classList.remove('crossed')
                    nonogramTable.children[k].classList.remove('pressed-dark')
                    nonogramTable.children[k].classList.remove('crossed-dark')
                }
                pressedArr = []

                for (let f = 0; f < currentNonogramMode; f += 1) {
                    pressedArr[f] = new Array(currentNonogramMode).fill('.')
                }
                updateTheme()
            })
            updateTheme()
        }
    }
    createChoose()

    const createModes = () => {
        for (let i = 0; i < nonogramModes.length; i += 1) {
            const modeButton = document.createElement('div')
            gameModesMenu.appendChild(modeButton)
            modeButton.classList.add('choose-button')
            modeButton.innerText = modesNames[i]
            modeButton.addEventListener('click', function() {
                nonogramTable.classList.remove(modesWidth[0])
                nonogramTable.classList.remove(modesWidth[1])
                nonogramTable.classList.remove(modesWidth[2])
                nonogramTable.classList.add(modesWidth[i])
                currentTaskNum = templates[i][0]
                currentPicture.innerText = tasks[currentTaskNum].name
                nonogramTop.innerHTML = ''
                nonogramBotLef.innerHTML = ''
                nonogramTable.innerHTML = ''
                chooseMenuButtons.innerHTML = ''
                modeNumber = i
                currentNonogramMode = nonogramModes[modeNumber]
                currentTemplateNumbers = templates[modeNumber]
                currentTaskNum = currentTemplateNumbers[0]
                currentPicture.innerText = tasks[currentTaskNum].name
                isStarted = false
                createTable()
                createChoose()
                createNonogram(currentTaskNum)
                clearInterval(watchInterval)
                currentPicture.innerText = tasks[currentTaskNum].name

                watch.innerText = '00:00'
                currentTime = 0
                for (let k = 0; k < nonogramTable.children.length; k += 1) {
                    nonogramTable.children[k].classList.remove('pressed')
                    nonogramTable.children[k].classList.remove('crossed')
                    nonogramTable.children[k].classList.remove('pressed-dark')
                    nonogramTable.children[k].classList.remove('crossed-dark')
                }
                pressedArr = []
                for (let f = 0; f < currentNonogramMode; f += 1) {
                    pressedArr[f] = new Array(currentNonogramMode).fill('.')
                }
                updateTheme()
            })
        }
    }
    createModes()

    resetButton.addEventListener('click', function() {
        isSolved = false
        for (let k = 0; k < nonogramTable.children.length; k += 1) {
            nonogramTable.children[k].classList.remove('pressed')
            nonogramTable.children[k].classList.remove('crossed')
            nonogramTable.children[k].classList.remove('pressed-dark')
            nonogramTable.children[k].classList.remove('crossed-dark')
        }
        pressedArr = []
        for (let i = 0; i < currentNonogramMode; i += 1) {
            pressedArr[i] = new Array(currentNonogramMode).fill('.')
        }
        isStarted = false
        clearInterval(watchInterval)
        watch.innerText = '00:00'
        currentTime = 0
    })

    let sessionData = {}
    if (localStorage.getItem('localData') === null) {
        localStorage.setItem('localData', JSON.stringify(sessionData))
    }

    if (localStorage.getItem('localWins') === null) {
        localStorage.setItem('localWins', JSON.stringify(winsData))
    } else {
        winsData = localStorage.getItem('localWins')
        winsData = JSON.parse(winsData)
    }

    const saveWinsData = () => {
        winsData.unshift([tasks[currentTaskNum].name,
            modesNames[modeNumber],
            watch.innerText,
        ])
        if (winsData.length > 5) {
            winsData.pop()
        }
        localStorage.setItem('localWins', JSON.stringify(winsData))
    }

    for (let i = 0; i < winRowsAmount; i += 1) {
        const winRow = document.createElement('div')
        winRow.classList.add('win-row')
        winTableRig.appendChild(winRow)
        for (let j = 0; j < winColumnNames.length; j += 1) {
            const winCell = document.createElement('div')
            winCell.classList.add('win-cell')
            winCell.classList.add('cell-another')
            winCell.innerText = '- - -'
            winRow.appendChild(winCell)
        }
    }
    const drawWins = () => {
        let winsTime = []
        let winsTimeLocal = []
        for (let i = 0; i < winsData.length; i += 1) {
            let digitTime = parseInt(winsData[i][2].replace(':', ''))
            winsTime.push(digitTime)
            winsTimeLocal.push(digitTime)
        }
        winsTime.sort((a, b) => a - b)
        let winsIndexes = []
        let sortedWins = []
        for (let i = 0; i < winsData.length; i += 1) {
            winsIndexes.push(winsTimeLocal.indexOf(winsTime[i]))
        }
        for (let i = 0; i < winsData.length; i += 1) {
            sortedWins.push(
                winsData[winsIndexes[i]]
            )
        }
        for (let i = 0; i < sortedWins.length; i += 1) {
            for (let j = 0; j < winColumnNames.length; j += 1) {
                winTableRig.children[i].children[j].innerText = sortedWins[i][j]
            }
        }
    }
    drawWins()

    saveButton.addEventListener('click', function () {
        if (isSolved === false) {
            sessionData = {
                'localTaskNum': currentTaskNum,
                'localNonogramMode': modeNumber,
                'localPressedArr': pressedArr,
                'localTime': currentTime,
            }
            localStorage.setItem('localData', JSON.stringify(sessionData))
        }
    })

    continueButton.addEventListener('click', function () {
        isSolved = false
        if (localStorage.getItem('localData') === '{}') {
            alert("Press button 'Save game' to continue game")
        }
        else {
            isStarted = false
            clearInterval(watchInterval)

            let dataFromLocal = localStorage.getItem('localData')
            dataFromLocal = JSON.parse(dataFromLocal)
            currentTime = dataFromLocal.localTime
            watch.innerText = String(dataFromLocal.localTime).slice(0, String(dataFromLocal.localTime).length - 2) + ':' + String(dataFromLocal.localTime).slice(-2)
            nonogramTop.innerHTML = ''
            nonogramBotLef.innerHTML = ''
            nonogramTable.innerHTML = ''
            chooseMenuButtons.innerHTML = ''
            currentTaskNum = dataFromLocal.localTaskNum
            currentPicture.innerText = tasks[currentTaskNum].name
            modeNumber = dataFromLocal.localNonogramMode
            currentNonogramMode = nonogramModes[modeNumber]
            currentTemplateNumbers = templates[modeNumber]
            createNonogram(currentTaskNum)
            createTable()
            createChoose()
            currentPicture.innerText = tasks[currentTaskNum].name
            pressedArr = dataFromLocal.localPressedArr
            let pressedArrCopy = []
            for (let d = 0; d < pressedArr.length; d += 1) {
                pressedArrCopy[d] = new Array(pressedArr.length).fill('.')
            }
            for (let y = 0; y < pressedArr.length; y += 1) {
                for (let z = 0; z < pressedArr.length; z += 1) {
                    pressedArrCopy[y][z] = pressedArr[y][z]
                }
            }
            pressedArrCopy = pressedArrCopy.join().split(',')
            for (let k = 0; k < nonogramTable.children.length; k += 1) {
                if (pressedArrCopy[k] === '#') {
                    nonogramTable.children[k].classList.add('pressed')
                    if (themeNow === 'dark') {
                        nonogramTable.children[k].classList.add('pressed-dark')
                    }
                } else {
                    nonogramTable.children[k].classList.remove('pressed')
                    nonogramTable.children[k].classList.remove('pressed-dark')
                }
                nonogramTable.children[k].classList.remove('crossed')
                nonogramTable.children[k].classList.remove('crossed-dark')
            }
        }
        updateTheme()
    })

    themeButton.addEventListener('click', function () {
        if (themeNow === 'light') {
            themeNow = 'dark'
        } else {
            themeNow = 'light'
        }
        updateTheme()
    })

    soundButton.addEventListener('click', function () {
        if (isHaveSound === true) {
            isHaveSound = false
        } else {
            isHaveSound = true
        }
    })

    randomButton.addEventListener('click', function () {
        isSolved = false
        modeNumber = Math.floor(Math.random() * (nonogramModes.length));
        currentNonogramMode = nonogramModes[modeNumber]
        currentTemplateNumbers = templates[modeNumber]
        currentTaskNum = currentTemplateNumbers[
            Math.floor(Math.random() * (currentTemplateNumbers.length))
            ]
        pressedArr = []
        isStarted = false
        nonogramTop.innerHTML = ''
        nonogramBotLef.innerHTML = ''
        nonogramTable.innerHTML = ''
        chooseMenuButtons.innerHTML = ''
        currentPicture.innerText = tasks[currentTaskNum].name
        clearInterval(watchInterval)
        watch.innerText = '00:00'
        currentTime = 0
        createChoose()
        createTable()
        createNonogram(currentTaskNum)
        updateTheme()
    })

    solutionButton.addEventListener('click', function () {
        nonogramTable.innerHTML = ''
        clearInterval(watchInterval)
        watch.innerText = '00:00'
        currentTime = 0
        createTable()
        pressedArr = []
        let pressedArrCopy = []
        for (let d = 0; d < tasks[currentTaskNum].ans.length; d += 1) {
            pressedArr[d] = new Array(tasks[currentTaskNum].ans.length).fill('.')
            pressedArrCopy[d] = new Array(tasks[currentTaskNum].ans.length).fill('.')
        }
        for (let y = 0; y < tasks[currentTaskNum].ans.length; y += 1) {
            for (let z = 0; z < pressedArr.length; z += 1) {
                pressedArr[y][z] = tasks[currentTaskNum].ans[y][z]
                pressedArrCopy[y][z] = pressedArr[y][z]
            }
        }
        pressedArrCopy = pressedArrCopy.join().split(',')
        for (let k = 0; k < nonogramTable.children.length; k += 1) {
            if (pressedArrCopy[k] === '#') {
                nonogramTable.children[k].classList.add('pressed')
                if (themeNow === 'dark') {
                    nonogramTable.children[k].classList.add('pressed-dark')
                }
            } else {
                nonogramTable.children[k].classList.remove('pressed')
                nonogramTable.children[k].classList.remove('pressed-dark')
            }
            nonogramTable.children[k].classList.remove('crossed')
            nonogramTable.children[k].classList.remove('crossed-dark')
        }
        updateTheme()
        isSolved = true
    })
})