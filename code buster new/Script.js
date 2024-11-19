const questions = [
	{
		question: "Which of the following statements correctly describes the microcomputer disk drive?",
		options: ["A disk drive is used to transfer data to and from disks.", "The two types of disk drives are hard disks and flexible disks.", "Hard disks are permanent storage devices.", "All of these"],
		correct: "All of these"
	},
	{
		question: "RAM chips",
		options: ["Store data indefinitely unless you delete it", "Allow the computer to store data electronically", "Are always measured in thousands of bytes", "All of these"],
		correct: "Allow the computer to store data electronically"
	},
	{
		question: "The CPU and memory are located on the",
		options: ["Keyboard", "Graphics board", "Sound board", "Motherboard"],
		correct: "Motherboard"
	},
	{
		question: "Which of the following manages computer resources?",
		options: ["BUS", "ALU", "I/O unit", "Control unit"],
		correct: "Control unit"
	},
	{
		question: "Speed of processor is measured in:",
		options: ["Hertz", "Pathom", "Byte", "Bit"],
		correct: "Hertz"
	},
	{
		question: "Intel Pentium CPU is a ______ based processor.",
		options: ["LISC", "MISC", "RISC", "CISC"],
		correct: "RISC"
	},
	{
		question: "Which one is the first high level programming language?",
		options: ["C", "C++", "COBOL", "FORTRAN"],
		correct: "FORTRAN"
	},
	{
		question: "Which one is the first word processor application?",
		options: ["MS OFFICE", "Apple I work", "WordStar", "Sun StarOffice"],
		correct: "WordStar"
	},
	{
		question: "Who developed Java programming language?",
		options: ["James Gosling", "Edmund Clarke", "James Foley", "Bjarne Stroustrup"],
		correct: "James Gosling"
	},
	{
		question: "1 TB equals to?",
		options: ["1028 MB", "1024 GB", "1028 KB", "1000 GB"],
		correct: "1024 GB"
	},
	{
		question: "Who developed Linus Operating System?",
		options: ["Peter James", "Steve Jobs", "Linus Torvalds", "Andy Rubin"],
		correct: "Linus Torvalds"
	},
	{
		question: "Which one is the first search engine?",
		options: ["Google", "Archie", "WAIS", "Alta Vista"],
		correct: "Archie"
	},
	{
		question: "How many bits are there in IPv6 address?",
		options: ["32", "64", "128", "256"],
		correct: "128"
	},
	{
		question: "First computer virus is known as?",
		options: ["Rabbit", "Creeper virus", "Trojan Horse", "SCA virus"],
		correct: "Creeper virus"
	},
	{
		question: "Which protocol is used to receive e-mail?",
		options: ["SMTP", "POP3", "HTTP", "FTP"],
		correct: "POP3"
	},
	{
		question: "Which of the following computer language is used for artificial intelligence?",
		options: ["PROLOG", "FORTRAN", "C", "COBOL"],
		correct: "PROLOG"
	},
	{
		question: "The preferred method of data transfer when link establishment takes a long time, and data size is little is:",
		options: ["Circuit switching", "Packet switching", "Time-division multiplexing", "None of the above"],
		correct: "Time-division multiplexing"
	},
	{
		question: "What is the full form of OCR?",
		options: ["Optical Character Reader", "Optical Central Reader", "Optimized Character Reader", "Optical Character Response"],
		correct: "Optical Character Reader"
	},
	{
		question: "How many layers are there in TCP/IP?",
		options: ["2", "4", "5", "7"],
		correct: "4"
	},
	{
		question: "Which of the following is an example of connectionless protocol?",
		options: ["TCP", "UDP", "Frame Relay", "SPX"],
		correct: "UDP"
	},
	
	{
			question: "Which of the following is a popular front-end framework for building user interfaces in JavaScript?",
			options: ["Django", "Angular", "Flask", "Node.js"],
			correct: "Angular"
		},
		{
			question: "What application can one create even before the introduction of HTML5?",
			options: ["Forms", "Browser based games", "Web applications", "Mobile applications"],
			correct: "Forms"
		},
		{
			question: "What is DOM?",
			options: ["Application programming interface", "Hierarchy of objects in ASP.NET", "Convention for representing and interacting with objects in HTML documents", "None of the mentioned"],
			correct: "Convention for representing and interacting with objects in HTML documents"
		},
		{
			question: "What does <td> stand for?",
			options: ["Table database", "Table data", "Table directory", "Table direct row"],
			correct: "Table data"
		},
		{
			question: "Which HTML tag is used to create an ordered list in a webpage?",
			options: ["<ol>", "<ul>", "<li>", "<ol> and <ul>"],
			correct: "<ol>"
		},
		{
			question: "What is the purpose of JavaScript in web development?",
			options: ["To define the structure and content of web pages", "To add interactivity and behavior to web pages", "To style and format web pages", "To manage server-side data and databases"],
			correct: "To add interactivity and behavior to web pages"
		},
		{
			question: "What is the JavaScript keyword used to define a function?",
			options: ["var", "function", "let", "const"],
			correct: "function"
		},
		{
			question: "What does MIME stand for?",
			options: ["Multipurpose Internet Mail Extra", "Multi Internet Mail End", "Multipurpose Internet Mail Email", "Multipurpose Internet Mail Extension"],
			correct: "Multipurpose Internet Mail Extension"
		},
		{
			question: "Which of the following attribute is used for merging two or more adjacent columns?",
			options: ["ROWSPAN", "CELLSPACING", "COLSPAN", "CELLPADDING"],
			correct: "COLSPAN"
		},
		{
			question: "Why were cookies designed?",
			options: ["for server-side programming", "For client-side programming", "both a and b", "None"],
			correct: "For client-side programming"
		}

	
];


  let currentQUestionIndex = 0
  let score = 0;
  let timer; 
  let timeLeft = 30;

function showRules(){
	var rulebox = document.getElementById('rulebox');
	var startbutton = document.getElementById('startbutton')
	rulebox.style.display = 'block';
	startbutton.style.display='none';

}
function startQuiz(){
	var rulebox = document.getElementById('rulebox');
	var quizContainer = document.getElementById('quizContainer')
	rulebox.style.display = 'none';
	quizContainer.style.display = 'block';
	
	loadQuestion();
	startTimer();
}
function loadQuestion(){
	// timer
	quizTimer.style.display = 'block';
	resetTimer();
	const question = questions[currentQUestionIndex];	
	const questiontext = document.getElementById('questiontext');
	const options = document.querySelectorAll('.quiz-option');

	questiontext.textContent = question.question;

	options.forEach((option,index)=> {
		option.textContent = question.options[index];
	
	});
}

function startTimer() {

	const timerDisplay = document.getElementById('quizTimer');
	timeLeft = 30;
	clearInterval(timer);
	timer = setInterval(() => {
		timeLeft=timeLeft-1;
		timerDisplay.textContent = `Time left: ${timeLeft}s`;

		if (timeLeft <= 0) {
			clearInterval(timer); // Stop timer
			moveToNextQuestion();
		}
	}, 1000); // Decrease time every second
}
function resetTimer() {
	clearInterval(timer); // Clear any existing timer
	startTimer(); // Start a new timer
}

function moveToNextQuestion() {
	currentQUestionIndex++;

	if (currentQUestionIndex < questions.length) {
		loadQuestion();
	} else {
		showScore();
	}
} 
// Add event listeners to the options
document.querySelectorAll('.quiz-option').forEach(option => {
	option.addEventListener('click', function() {
	  const selectedAnswer = this.textContent;
	  const question = questions[currentQUestionIndex];

	  // Check if the selected answer is correct
	  if (selectedAnswer === question.correct) {
		score++;
	  }

	  // Move to the next question
	  clearInterval(timer);
	 moveToNextQuestion();
	});
  });

  // Function to display the final score
  function showScore() {
	var quizContainer = document.getElementById('quizContainer');
	var scoreContainer = document.getElementById('scoreContainer');
	var scoreDisplay = document.getElementById('score');
	quizTimer.style.display = 'none';
	// Hide the quiz container and show the score
	quizContainer.style.display = 'none';
	scoreContainer.style.display = 'block';
	
	// Display the score
	scoreDisplay.textContent = score + ' out of ' + questions.length;
  }	
