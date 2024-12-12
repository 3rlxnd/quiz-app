const questions = [
  {
    question: "Which planet is the second closest to the Sun?",
    answers: ["Venus", "Mercury", "Earth", "Mars"],
    correctAnswer: "Venus",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "Who painted the Starry Night?",
    answers: ["Van Gogh", "Da Vinci", "Monet", "Picasso"],
    correctAnswer: "Van Gogh",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Art", "History"],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Oceans"],
  },
  {
    question: "Which animal is known as the king of the jungle?",
    answers: ["Lion", "Elephant", "Tiger", "Leopard"],
    correctAnswer: "Lion",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Animals", "Biology"],
  },
  {
    question: "Which currency is used in Japan?",
    answers: ["Yen", "Dollar", "Euro", "Pound"],
    correctAnswer: "Yen",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Economy", "Japan"],
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Vatican City", "Monaco", "Malta", "San Marino"],
    correctAnswer: "Vatican City",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Countries"],
  },
  {
    question: "Which element is used in batteries?",
    answers: ["Lithium", "Iron", "Cobalt", "Calcium"],
    correctAnswer: "Lithium",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Electricity"],
  },
  {
    question: "Which artist is known for creating the sculpture 'David'?",
    answers: ["Michelangelo", "Donatello", "Leonardo", "Raphael"],
    correctAnswer: "Michelangelo",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Art", "Sculpture"],
  },
  {
    question: "What is the chemical symbol for iron?",
    answers: ["Fe", "Ir", "In", "Is"],
    correctAnswer: "Fe",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "Which river is the longest in Africa?",
    answers: ["Nile", "Congo", "Zambezi", "Niger"],
    correctAnswer: "Nile",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Africa"],
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Biology", "Animals"],
  },
  {
    question: "Which element has the atomic number 29?",
    answers: ["Copper", "Zinc", "Nickel", "Iron"],
    correctAnswer: "Copper",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "What is the largest desert by area?",
    answers: [
      "Sahara Desert",
      "Arabian Desert",
      "Gobi Desert",
      "Kalahari Desert",
    ],
    correctAnswer: "Sahara Desert",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Deserts"],
  },
  {
    question: "Which country is known for its pyramids?",
    answers: ["Egypt", "Mexico", "Peru", "Sudan"],
    correctAnswer: "Egypt",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "History"],
  },
  {
    question: "Who is known as the father of computers?",
    answers: [
      "Alan Turing",
      "Charles Babbage",
      "Ada Lovelace",
      "John von Neumann",
    ],
    correctAnswer: "Charles Babbage",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Technology", "History"],
  },
  {
    question: "Which is the tallest mountain in the world?",
    answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Mountains"],
  },
  {
    question: "Which organ in the human body regulates blood sugar levels?",
    answers: ["Pancreas", "Liver", "Kidney", "Heart"],
    correctAnswer: "Pancreas",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Biology", "Human Body"],
  },
  {
    question: "What is the smallest prime number?",
    answers: ["2", "3", "5", "7"],
    correctAnswer: "2",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Mathematics", "Numbers"],
  },
  {
    question: "Which animal is known for having the longest lifespan?",
    answers: ["Tortoise", "Elephant", "Whale", "Shark"],
    correctAnswer: "Tortoise",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Biology", "Animals"],
  },
  {
    question: "Which element is the heaviest?",
    answers: ["Uranium", "Plutonium", "Gold", "Tungsten"],
    correctAnswer: "Uranium",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "Which planet has the most moons?",
    answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Jupiter",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "Which currency is used in Australia?",
    answers: ["Dollar", "Euro", "Pound", "Yen"],
    correctAnswer: "Dollar",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Economy", "Australia"],
  },
  {
    question: "What is the chemical formula for water?",
    answers: ["H2O", "O2", "CO2", "CH4"],
    correctAnswer: "H2O",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Science"],
  },
  {
    question:
      "Which planet is known for having the largest storm, the Great Red Spot?",
    answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctAnswer: "Jupiter",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Europe"],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Art", "History"],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ["Oxygen", "Gold", "Octanium", "Osmium"],
    correctAnswer: "Oxygen",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "What is the largest animal on Earth?",
    answers: ["Blue Whale", "Elephant", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Biology", "Animals"],
  },
  {
    question: "Which is the longest river in the world?",
    answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Amazon",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "South America"],
  },
  {
    question: "What is the smallest planet in our Solar System?",
    answers: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: "Mercury",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "Which country is known for producing the most coffee?",
    answers: ["Brazil", "Colombia", "Ethiopia", "Viet Nam"],
    correctAnswer: "Brazil",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Food"],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: ["Einstein", "Newton", "Galileo", "Hawking"],
    correctAnswer: "Einstein",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Science", "Physics"],
  },
  {
    question: "Which element is a noble gas?",
    answers: ["Neon", "Oxygen", "Hydrogen", "Carbon"],
    correctAnswer: "Neon",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "What is the largest mammal?",
    answers: ["Blue Whale", "Elephant", "Giraffe", "Shark"],
    correctAnswer: "Blue Whale",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Biology", "Animals"],
  },
  {
    question: "Which element has the highest atomic number?",
    answers: ["Uranium", "Plutonium", "Oganesson", "Gold"],
    correctAnswer: "Oganesson",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Chemistry", "Periodic Table"],
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["Skin", "Liver", "Heart", "Lungs"],
    correctAnswer: "Skin",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Biology", "Human Body"],
  },
  {
    question: "Who was the first president of the United States?",
    answers: [
      "George Washington",
      "Thomas Jefferson",
      "Abraham Lincoln",
      "John Adams",
    ],
    correctAnswer: "George Washington",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["History", "Politics"],
  },
  {
    question: "Which planet is the hottest?",
    answers: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "What is the largest desert in the world?",
    answers: ["Sahara", "Antarctica", "Arctic", "Gobi"],
    correctAnswer: "Antarctica",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Science"],
  },
  {
    question: "Which fruit is also a color?",
    answers: ["Orange", "Apple", "Banana", "Grapes"],
    correctAnswer: "Orange",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Food", "Colors"],
  },
  {
    question: "What is the smallest prime number?",
    answers: ["2", "3", "5", "7"],
    correctAnswer: "2",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Math", "Numbers"],
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Biology", "Environment"],
  },
  {
    question: "Who invented the telephone?",
    answers: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "Graham Bell",
    ],
    correctAnswer: "Alexander Graham Bell",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["History", "Inventions"],
  },
  {
    question: "Which element is the most abundant in the Earth's crust?",
    answers: ["Oxygen", "Silicon", "Aluminum", "Iron"],
    correctAnswer: "Oxygen",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geology", "Chemistry"],
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
    isBookmarked: false,
    difficulty: "easy",
    tags: ["Geography", "Oceans"],
  },
  {
    question: "What is the capital city of Canada?",
    answers: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
    correctAnswer: "Ottawa",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Geography", "Countries"],
  },
  {
    question: "Which scientist is credited with the discovery of penicillin?",
    answers: [
      "Alexander Fleming",
      "Marie Curie",
      "Louis Pasteur",
      "Gregor Mendel",
    ],
    correctAnswer: "Alexander Fleming",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Science", "History"],
  },
  {
    question: "Which Shakespeare play features the character Prospero?",
    answers: ["The Tempest", "Hamlet", "Macbeth", "Othello"],
    correctAnswer: "The Tempest",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Literature", "Plays"],
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: ["Diamond", "Quartz", "Graphite", "Topaz"],
    correctAnswer: "Diamond",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Science", "Earth"],
  },
  {
    question: "In which year did the Titanic sink?",
    answers: ["1912", "1905", "1920", "1918"],
    correctAnswer: "1912",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["History", "Events"],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Pb", "Fe"],
    correctAnswer: "Au",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "Which planet in our solar system is the hottest?",
    answers: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "Which artist painted 'Guernica'?",
    answers: [
      "Pablo Picasso",
      "Salvador Dalí",
      "Henri Matisse",
      "Vincent van Gogh",
    ],
    correctAnswer: "Pablo Picasso",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Art", "History"],
  },
  {
    question: "What is the primary ingredient in the Japanese dish miso soup?",
    answers: ["Soybeans", "Rice", "Seaweed", "Tofu"],
    correctAnswer: "Soybeans",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Food", "Japan"],
  },
  {
    question: "Who wrote 'Pride and Prejudice'?",
    answers: [
      "Jane Austen",
      "Charlotte Brontë",
      "George Eliot",
      "Virginia Woolf",
    ],
    correctAnswer: "Jane Austen",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Literature", "Books"],
  },
  {
    question: "What is the currency of Brazil?",
    answers: ["Real", "Peso", "Dollar", "Euro"],
    correctAnswer: "Real",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Economy", "Brazil"],
  },
  {
    question: "What is the main component of natural gas?",
    answers: ["Methane", "Propane", "Butane", "Ethane"],
    correctAnswer: "Methane",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Chemistry", "Energy"],
  },
  {
    question: "Which country hosted the first modern Olympics?",
    answers: ["Greece", "France", "United Kingdom", "United States"],
    correctAnswer: "Greece",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Sports", "History"],
  },
  {
    question: "Which U.S. state is known as the 'Sunshine State'?",
    answers: ["Florida", "California", "Nevada", "Hawaii"],
    correctAnswer: "Florida",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Geography", "USA"],
  },
  {
    question: "What is the name of the galaxy that contains our solar system?",
    answers: ["Milky Way", "Andromeda", "Triangulum", "Large Magellanic Cloud"],
    correctAnswer: "Milky Way",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Astronomy", "Space"],
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    answers: [
      "Margaret Thatcher",
      "Theresa May",
      "Angela Merkel",
      "Indira Gandhi",
    ],
    correctAnswer: "Margaret Thatcher",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Politics", "History"],
  },
  {
    question: "Which river is the longest in the world?",
    answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Geography", "Rivers"],
  },
  {
    question: "Which element is the most abundant in the Earth's crust?",
    answers: ["Oxygen", "Silicon", "Iron", "Aluminum"],
    correctAnswer: "Oxygen",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Science", "Earth"],
  },
  {
    question: "What is the tallest waterfall in the world?",
    answers: ["Angel Falls", "Niagara Falls", "Victoria Falls", "Iguazu Falls"],
    correctAnswer: "Angel Falls",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Geography", "Nature"],
  },
  {
    question: "Who is the author of the Harry Potter series?",
    answers: [
      "J.K. Rowling",
      "Suzanne Collins",
      "Stephen King",
      "George R.R. Martin",
    ],
    correctAnswer: "J.K. Rowling",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Literature", "Books"],
  },
  {
    question: "What is the smallest planet in our solar system?",
    answers: ["Mercury", "Mars", "Venus", "Pluto"],
    correctAnswer: "Mercury",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Astronomy", "Space"],
  },
  {
    question:
      "Which war was fought between the North and South regions in the United States?",
    answers: ["Civil War", "Revolutionary War", "World War I", "Vietnam War"],
    correctAnswer: "Civil War",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["History", "Wars"],
  },
  {
    question: "Which composer is known for the 'Moonlight Sonata'?",
    answers: ["Beethoven", "Mozart", "Bach", "Chopin"],
    correctAnswer: "Beethoven",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Music", "Classical"],
  },
  {
    question: "What is the term for animals that only eat plants?",
    answers: ["Herbivores", "Carnivores", "Omnivores", "Insectivores"],
    correctAnswer: "Herbivores",
    isBookmarked: false,
    difficulty: "medium",
    tags: ["Biology", "Animals"],
  },
];

function showQuestions() {
  const container = document.querySelector("main");
  container.innerHTML = "";
  questions.forEach((item) => {
    const card = document.createElement("section");
    card.className = "card";
    card.innerHTML = `
        <p class="card-bookmark-button">
        <i class="fa-${
          item.isBookmarked ? "solid" : "regular"
        } fa-bookmark fa-xl bookmark"></i>
        </p>
        <div class="card-title-wrapper">
        <i class="fa-solid fa-star fa-xl thumbnail"></i>
        <h2 class="card-difficulty">${item.difficulty}</h2>
        </div>
        <h2 class="card-title">${item.question}</h2>
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

showQuestions();
