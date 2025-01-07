const form = document.querySelector('[data-js="add-card-form"]');
const cardPreview = document.querySelector('[data-js="card-preview"]')
const addAnswerInput = document.querySelector('[data-js="answer-input"]');
const addAnswerButton = document.querySelector('[data-js="add-answer-button"]');
const answerButtons = document.querySelector('[data-js="answers"]');
const answerSelector = document.querySelector('[data-js="answer-selector"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');
const questionCount = document.querySelector('[data-js="char-count"]');

const answers = []

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)

    answers.length < 2 ? addAnswerInput.style.border = 'solid 0.5px red' :  addAnswerInput.style.border = 'none' 
    
    data.question.trim() === '' ? questionInput.style.border = 'solid 0.5px red' :  questionInput.style.border = 'none' 

    if (answers.length > 1 && data.question.trim() !== '') {

        let card = `<p class="card-bookmark-button">
            <i class="fa-regular fa-bookmark fa-xl bookmark" alt="Bookmark Button" role="button" aria-label="Bookmark Question" aria-pressed="false"></i>
          </p>
          <div class="card-title-wrapper" aria-label="Difficulty Level">
            <i class="fa-solid fa-star fa-xl thumbnail" aria-hidden="true"></i>
            <h2 class="card-difficulty">${data.difficultySelector}</h2>
          </div>
          <h2 class="card-title">${data.question}</h2>
          <ul class="card-answers" data-js="card-answers"></ul>
          <div class="tags-wrapper" aria-label="Tags">
          <p class="tag">#${data.tag}</p>
          </div>
          <p class="correct-answer">Australia</p>`

        cardPreview.innerHTML = card
        let answersList = document.querySelector('[data-js="card-answers"]')
        answers.forEach(element => {
            let item = document.createElement('li')
            item.classList.add('answer')
            item.textContent = element
            answersList.append(item)
        })

        console.log(`Saved new Question: "${data.question}"`);
    }
});

addAnswerButton.addEventListener('click', () => {
    let answer = document.createElement('li')
    let option = document.createElement('option')

    answer.textContent = addAnswerInput.value
    answer.classList.add('answer')
    option.textContent = addAnswerInput.value

    if (addAnswerInput.value && answers.length <= 3) {
        answerButtons.style.display = 'flex'
        answerButtons.append(answer)
        answerSelector.append(option)
        answers.push(addAnswerInput.value)
        addAnswerInput.style.border = 'none'      
    } else {
        addAnswerInput.style.border = 'solid 0.5px red'
    }

    addAnswerInput.value = null
})

let maxChar = 50
questionCount.textContent = maxChar + '/' + maxChar

questionInput.addEventListener('input', (event) => {
    questionInput.setAttribute('maxlength', maxChar)
    questionCount.textContent = `${maxChar - event.target.value.length + '/' + maxChar}`
})