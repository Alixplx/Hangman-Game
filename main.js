// Letters
const letters = "abcdefghijklmnopqrstuvwxyz"

// get Array From Letters
let lettersArr = Array.from(letters)

// Select Letters Container
let lettersContainers = document.querySelector(".letters")

// Generate Letters
lettersArr.forEach(letter => {

    // Create Span
    let span = document.createElement("span")

    // Create Letter Text Node
    let theLetter = document.createTextNode(letter)

    // Append The Letter To Span
    span.appendChild(theLetter)

    // Add Class On Span
    span.className = "letter-box"

    // Append Span To The Letters Container
    lettersContainers.appendChild(span)

})

const words = {

    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

let allKeys = Object.keys(words)

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length)

// Category
let randomPropName = allKeys[randomPropNumber]

// Category Words
let randomPropValue = words[randomPropName]

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber]

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName



// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess")

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue)

// Create Span Depend On Word
lettersAndSpace.forEach(letter => {

    // Create Empty Span
    let emptySpan = document.createElement("span")


    // if Letter is Space

    if (letter === ' ') {

        // Add Class To The Span
        emptySpan.className = 'with-space'
    }

    // Append Span To The Letters Guess Container
    lettersGuessContainer.appendChild(emptySpan)

})

// Select Guess Spans
let guessSpan = document.querySelectorAll(".letters-guess span")

// Set Wrong Attempts
let wrongAttempts = 0

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw")

// Handle Clicking On Letters
document.addEventListener("click", (event) => {

    // Set The Choose Status
    let status = false

    if (event.target.className === `letter-box`) {

        event.target.classList.add("clicked")

        // Get Clicked Letter
        let clickedLetter = event.target.innerHTML.toLowerCase()

        // The Chosen Word
        let chosenWord = Array.from(randomValueValue.toLowerCase())


        chosenWord.forEach((wordLetter, wordIndex) => {

            // If The Clicked Letter Equal To One Of The Chosen Word Letter
            if (clickedLetter == wordLetter) {

                // Set Status To Correct
                status = true

                // Loop On All Guess Spans
                guessSpan.forEach((span, spanIndex) => {

                    if (wordIndex === spanIndex) {

                        span.innerHTML = clickedLetter
                    }

                })


            }

        })

        // Outside Loop

        // If Letter Is Wrong
        if (status !== true) {

            // Increase The Wrong Attempts
            wrongAttempts++

            // Add Class Wrong On The Draw Element
            theDraw.classList.add(`wrong-${wrongAttempts}`)

            // Play Fail Sound
            document.getElementById("fail").play()

            if (wrongAttempts === 8) {

                endGame()

                lettersContainers.classList.add("finished")
            }

        } else {

            // Play Success Sound
            document.getElementById("success").play()

        }

    }

})

// End Game Function
function endGame() {

    // Create Popup Div
    let div = document.createElement("div")

    // Create Text
    let divText = document.createTextNode(`Game Over, The Word is ${randomValueValue}`)

    // Append Text To Div
    div.appendChild(divText)

    // Add Class On Div
    div.className = `popup`

    // Append To The Body
    document.body.appendChild(div)
}