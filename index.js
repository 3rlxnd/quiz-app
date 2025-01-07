const answers = document.querySelectorAll('.answer')
const bookmarks = document.querySelectorAll('.card-bookmark-button')

answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
        let selectedAnswer = event.target
        let card = event.target.closest('.card')
        let correctAnswer = card.querySelector('.correct-answer')

        if (selectedAnswer.textContent === correctAnswer.textContent) {
            selectedAnswer.style.background = 'green'
            setTimeout(() => {
                card.remove()
            }, 1500)
        } else {
            selectedAnswer.classList.add('shake');
            selectedAnswer.addEventListener('animationend', () => {
                selectedAnswer.classList.remove('shake');
            }, { once: true });
        }
    })
})

bookmarks.forEach((bookmark) => {
    let icon = bookmark.querySelector('i')
    icon.addEventListener('click', () => {
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('fa-regular');
    })
})