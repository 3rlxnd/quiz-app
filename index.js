let questions = [
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
  {
    question: "What is the approximate age of the universe?",
    answers: [
      "13.8 billion years",
      "10 billion years",
      "15 billion years",
      "20 billion years",
    ],
    correctAnswer: "13.8 billion years",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Science", "Cosmology", "Space"],
  },
  {
    question:
      "Which mathematical conjecture remained unsolved for over 350 years until 1994?",
    answers: [
      "Goldbach's Conjecture",
      "Fermat's Last Theorem",
      "Riemann Hypothesis",
      "P vs NP Problem",
    ],
    correctAnswer: "Fermat's Last Theorem",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Mathematics", "History", "Science"],
  },
  {
    question: "What is the name of the longest river in the world?",
    answers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: "Amazon",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Geography", "Rivers"],
  },
  {
    question: "Who wrote the philosophical work *Critique of Pure Reason*?",
    answers: ["Immanuel Kant", "Friedrich Nietzsche", "Plato", "Aristotle"],
    correctAnswer: "Immanuel Kant",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Philosophy", "History"],
  },
  {
    question:
      "Which physicist developed the theory of quantum electrodynamics?",
    answers: ["Richard Feynman", "Albert Einstein", "Niels Bohr", "Max Planck"],
    correctAnswer: "Richard Feynman",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Physics", "Science"],
  },
  {
    question: "In what year did the Chernobyl nuclear disaster occur?",
    answers: ["1986", "1984", "1991", "1979"],
    correctAnswer: "1986",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["History", "Nuclear Energy"],
  },
  {
    question: "What is the largest known star in the universe by radius?",
    answers: ["UY Scuti", "Betelgeuse", "VY Canis Majoris", "Aldebaran"],
    correctAnswer: "UY Scuti",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Astronomy", "Space"],
  },
  {
    question:
      "What is the term for a three-line poem with a 5-7-5 syllable structure?",
    answers: ["Haiku", "Sonnet", "Limerick", "Tanka"],
    correctAnswer: "Haiku",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Literature", "Poetry"],
  },
  {
    question: "Which element has the highest melting point?",
    answers: ["Tungsten", "Carbon", "Osmium", "Iron"],
    correctAnswer: "Tungsten",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "Who painted *The Garden of Earthly Delights*?",
    answers: [
      "Hieronymus Bosch",
      "Michelangelo",
      "Leonardo da Vinci",
      "Caravaggio",
    ],
    correctAnswer: "Hieronymus Bosch",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Art", "History"],
  },
  {
    question: "What was the name of the first artificial Earth satellite?",
    answers: ["Sputnik 1", "Explorer 1", "Vanguard 1", "Luna 1"],
    correctAnswer: "Sputnik 1",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Space", "Technology", "History"],
  },
  {
    question:
      "Which battle marked the turning point of World War II in the Pacific?",
    answers: [
      "Battle of Midway",
      "Battle of Guadalcanal",
      "Battle of Coral Sea",
      "Battle of Iwo Jima",
    ],
    correctAnswer: "Battle of Midway",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["History", "World War II"],
  },
  {
    question: "Who developed the general theory of relativity?",
    answers: [
      "Albert Einstein",
      "Isaac Newton",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    correctAnswer: "Albert Einstein",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Physics", "Science"],
  },
  {
    question: "What is the capital city of Bhutan?",
    answers: ["Thimphu", "Paro", "Punakha", "Trongsa"],
    correctAnswer: "Thimphu",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Geography", "Asia"],
  },
  {
    question: "In which year was the United Nations established?",
    answers: ["1945", "1939", "1919", "1950"],
    correctAnswer: "1945",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["History", "Politics"],
  },
  {
    question:
      "What is the name of the main antagonist in the epic *The Mahabharata*?",
    answers: ["Duryodhana", "Karna", "Shakuni", "Ravana"],
    correctAnswer: "Duryodhana",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Mythology", "Literature"],
  },
  {
    question: "What is the study of fungi called?",
    answers: ["Mycology", "Bryology", "Bacteriology", "Phycology"],
    correctAnswer: "Mycology",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Biology", "Science"],
  },
  {
    question: "Which explorer discovered the Hawaiian Islands?",
    answers: [
      "James Cook",
      "Christopher Columbus",
      "Ferdinand Magellan",
      "Marco Polo",
    ],
    correctAnswer: "James Cook",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["History", "Exploration"],
  },
  {
    question: "Which subatomic particle was discovered by J.J. Thomson?",
    answers: ["Electron", "Proton", "Neutron", "Quark"],
    correctAnswer: "Electron",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Physics", "Science"],
  },
  {
    question: "What is the name of the deepest point in the Earth's oceans?",
    answers: [
      "Challenger Deep",
      "Mariana Trench",
      "Java Trench",
      "Puerto Rico Trench",
    ],
    correctAnswer: "Challenger Deep",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Geography", "Oceans"],
  },
  {
    question: "Which is the oldest written language still in use today?",
    answers: ["Chinese", "Latin", "Greek", "Sanskrit"],
    correctAnswer: "Chinese",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Linguistics", "History"],
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    answers: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    correctAnswer: "Nitrogen",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Science", "Earth"],
  },
  {
    question: "Which country has won the most FIFA World Cup titles?",
    answers: ["Brazil", "Germany", "Italy", "Argentina"],
    correctAnswer: "Brazil",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Sports", "Football"],
  },
  {
    question:
      "What was the code name for the Allied invasion of Normandy in World War II?",
    answers: [
      "Operation Overlord",
      "Operation Torch",
      "Operation Market Garden",
      "Operation Barbarossa",
    ],
    correctAnswer: "Operation Overlord",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["History", "World War II"],
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    answers: [
      "Marie Curie",
      "Rosalind Franklin",
      "Ada Lovelace",
      "Florence Nightingale",
    ],
    correctAnswer: "Marie Curie",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Science", "History"],
  },
  {
    question: "Which element is represented by the symbol 'Sn'?",
    answers: ["Tin", "Silver", "Sodium", "Strontium"],
    correctAnswer: "Tin",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Chemistry", "Elements"],
  },
  {
    question: "What is the main ingredient of the Japanese dish *miso soup*?",
    answers: ["Fermented Soybeans", "Seaweed", "Rice", "Fish Stock"],
    correctAnswer: "Fermented Soybeans",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Cuisine", "Asia"],
  },
  {
    question: "Which scientist is credited with the discovery of penicillin?",
    answers: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Joseph Lister",
      "Edward Jenner",
    ],
    correctAnswer: "Alexander Fleming",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Biology", "History"],
  },
  {
    question: "What is the second-highest mountain in the world?",
    answers: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    correctAnswer: "K2",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Geography", "Mountains"],
  },
  {
    question: "In what year did the Berlin Wall fall?",
    answers: ["1989", "1990", "1987", "1991"],
    correctAnswer: "1989",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["History", "Politics"],
  },
  {
    question:
      "Which painting is considered Leonardo da Vinci's last major work?",
    answers: [
      "St. John the Baptist",
      "The Last Supper",
      "Mona Lisa",
      "Vitruvian Man",
    ],
    correctAnswer: "St. John the Baptist",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Art", "History"],
  },
  {
    question:
      "What is the name of the process plants use to convert sunlight into energy?",
    answers: ["Photosynthesis", "Respiration", "Transpiration", "Osmosis"],
    correctAnswer: "Photosynthesis",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Biology", "Science"],
  },
  {
    question: "Which composer wrote *The Rite of Spring*?",
    answers: [
      "Igor Stravinsky",
      "Ludwig van Beethoven",
      "Johann Sebastian Bach",
      "Wolfgang Amadeus Mozart",
    ],
    correctAnswer: "Igor Stravinsky",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Music", "Arts"],
  },
  {
    question: "What is the chemical formula for table salt?",
    answers: ["NaCl", "KCl", "CaCO3", "MgSO4"],
    correctAnswer: "NaCl",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Chemistry", "Science"],
  },
  {
    question:
      "Which ancient city was home to the Hanging Gardens, one of the Seven Wonders of the Ancient World?",
    answers: ["Babylon", "Athens", "Alexandria", "Rome"],
    correctAnswer: "Babylon",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["History", "Architecture"],
  },
  {
    question: "What is the speed of light in a vacuum?",
    answers: [
      "299,792 km/s",
      "150,000 km/s",
      "1,080,000 km/h",
      "670,616,629 mph",
    ],
    correctAnswer: "299,792 km/s",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Physics", "Science"],
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    answers: ["Australia", "Indonesia", "Philippines", "New Zealand"],
    correctAnswer: "Australia",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Geography", "Nature"],
  },
  {
    question: "Who is considered the father of modern philosophy?",
    answers: ["René Descartes", "Socrates", "Immanuel Kant", "John Locke"],
    correctAnswer: "René Descartes",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Philosophy", "History"],
  },
  {
    question: "Which poet wrote *The Divine Comedy*?",
    answers: [
      "Dante Alighieri",
      "Geoffrey Chaucer",
      "William Shakespeare",
      "Homer",
    ],
    correctAnswer: "Dante Alighieri",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Literature", "Poetry"],
  },
  {
    question: "What is the largest desert in the world?",
    answers: [
      "Antarctic Desert",
      "Sahara Desert",
      "Arctic Desert",
      "Gobi Desert",
    ],
    correctAnswer: "Antarctic Desert",
    isBookmarked: false,
    difficulty: "hard",
    tags: ["Geography", "Nature"],
  },
];

function showQuestions() {
  shuffleArray(questions)
  const container = document.querySelector("main");
  container.innerHTML = "";
  questions.forEach((item, index) => {
    shuffleArray(item.answers)
    const card = document.createElement("section");
    card.className = "card";
    card.dataset.index = index;
    card.innerHTML = `
      <p class="card-bookmark-button">
        <i class="fa-${item.isBookmarked ? "solid" : "regular"} fa-bookmark fa-xl bookmark"></i>
      </p>
      <div class="card-title-wrapper">
        <i class="fa-solid fa-star fa-xl thumbnail"></i>
        <h2 class="card-difficulty">${item.difficulty}</h2>
      </div>
      <h2 class="card-title">${item.question}</h2>
      <ul class="card-answers">
        ${item.answers
          .map((answer) => `<li class="answer" aria-label="Answer">${answer}</li>`)
          .join("")}
      </ul>
      <div class="tags-wrapper">
        ${item.tags.map((tag) => `<p class="tag">#${tag}</p>`).join("")}
      </div>
      <p class="correct-answer">${item.correctAnswer}</p>`;
    container.appendChild(card);
  });

  attachEventListeners(); 
}

function attachEventListeners() {
  // Answer click logic
  let answers = document.querySelectorAll(".answer");
  answers.forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".card"); // Get the parent card
      const index = parseInt(card.dataset.index); // Retrieve the question index
      const item = questions[index]; // Get the corresponding item object
      const answerElement = event.target;
      const correctAnswerElement = card.querySelector(".correct-answer");

      const correctAnswer = correctAnswerElement.textContent.trim().toLowerCase();
      const answer = answerElement.textContent.trim().toLowerCase();

      if (answer === correctAnswer) {
        console.log(`Item solved ${item.solved} times:`, item);
        answerElement.style.backgroundColor = "green";
        setTimeout(() => {
          questions.splice(index, 1);
          showQuestions()}, 1000
      )
      } else {
        answerElement.style.backgroundColor = "red";
        setTimeout(() => {
          answerElement.style.backgroundColor = "var(rgb(30, 30, 30))";
          showQuestions()
        }, 1000);

      }
    });
  });

  let bookmarks = document.querySelectorAll(".card-bookmark-button i");
  bookmarks.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      const index = parseInt(card.dataset.index);
      const item = questions[index];

      // Toggle the bookmark state
      item.isBookmarked = !item.isBookmarked;
      console.log(`Item bookmarked: ${item.isBookmarked}`, item);

      // Update the UI
      event.target.className = `fa-${item.isBookmarked ? "solid" : "regular"} fa-bookmark fa-xl bookmark`;
    });
  });
}

// Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

showQuestions();
