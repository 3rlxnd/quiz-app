
const questions = [
    {
        "question": "Which potato dish is the most popular worldwide?",
        "answers": ["Mashed Potatoes", "French Fries", "Baked Potatoes", "Potato Salad"],
        "correctAnswer": "French Fries",
        "isBookmarked": false
    },
    {
        "question": "What is the largest type of potato grown?",
        "answers": ["Russet", "Sweet Potato", "King Edward", "Yukon Gold"],
        "correctAnswer": "Sweet Potato",
        "isBookmarked": false
    },
    {
        "question": "Which country consumes the most potatoes per person?",
        "answers": ["China", "Poland", "Ireland", "Germany"],
        "correctAnswer": "Poland",
        "isBookmarked": false
    },
    {
        "question": "How many varieties of potatoes exist worldwide?",
        "answers": ["500", "1000", "2000", "4000"],
        "correctAnswer": "4000",
        "isBookmarked": false
    },
    {
        "question": "What year were potatoes first cultivated?",
        "answers": ["500 BC", "8000 BC", "2000 AD", "1200 BC"],
        "correctAnswer": "8000 BC",
        "isBookmarked": false
    },
    {
        "question": "Which potato-based snack was invented by accident?",
        "answers": ["Potato Chips", "French Fries", "Tater Tots", "Potato Wedges"],
        "correctAnswer": "Potato Chips",
        "isBookmarked": false
    },
    {
        "question": "Which part of the potato plant is poisonous?",
        "answers": ["Stem", "Leaves", "Flowers", "All of the above"],
        "correctAnswer": "All of the above",
        "isBookmarked": false
    },
    {
        "question": "What is the scientific name of the potato plant?",
        "answers": ["Solanum tuberosum", "Capsicum annum", "Allium cepa", "Daucus carota"],
        "correctAnswer": "Solanum tuberosum",
        "isBookmarked": false
    },
    {
        "question": "In which country did the potato originate?",
        "answers": ["Peru", "Ireland", "China", "United States"],
        "correctAnswer": "Peru",
        "isBookmarked": false
    },
    {
        "question": "What percentage of a potato is water?",
        "answers": ["20%", "50%", "80%", "90%"],
        "correctAnswer": "80%",
        "isBookmarked": false
    }
];

function showQuestions() {
    const container = document.querySelector("main")
    container.innerHTML = ""
    questions.forEach(item => {
        const card = document.createElement("section");
        card.className = "card"
        card.innerHTML = `<h2 class="card-title">${item.question}</h2>
                  <p class="card-bookmark-button">
                      <i class="fa-${item.isBookmarked ? "solid" : "regular"} fa-bookmark fa-2x" style="color: #ffffff;"></i>
                  </p>
                  <ul class="card-answers">
                      <li class="answer">${item.answers[0]}</li>
                      <li class="answer">${item.answers[1]}</li>
                      <li class="answer">${item.answers[2]}</li>
                      <li class="answer">${item.answers[3]}</li>
                  </ul>
                  <p class="correct-answer">Both White and Purple</p>`;
        container.appendChild(card);
    });
}

showQuestions()
