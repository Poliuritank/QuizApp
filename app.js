/*

Цей код створює тест із варіантами відповідей за допомогою JavaScript і HTML. Тест складається з кількох запитань із чотирма варіантами відповідей.

Перший розділ коду створює клас Quiz і клас Question за допомогою функцій об’єктно-орієнтованого програмування JavaScript. Клас вікторини відстежує результати тесту, питання та індекс поточного запитання. Клас Question зберігає текст запитання, варіанти та правильну відповідь.

Наступний розділ коду відображає запитання вікторини на веб-сторінці за допомогою HTML і JavaScript. Функція displayQuestion() відповідає за відображення поточного запитання та варіантів відповідей на сторінці. Це робиться шляхом оновлення елементів HTML відповідною інформацією за допомогою методу quiz.getQuestionIndex(), щоб отримати поточний об’єкт запитання та його властивості.

Функція guess() викликається, коли користувач натискає варіант відповіді. Він перевіряє, чи є вибір користувача правильною відповіддю, і відповідно оновлює оцінку. Функція showScores() викликається після завершення тесту, і вона відображає оцінку користувача на сторінці.

Функція showProgress() показує поточний хід тесту, показуючи поточний номер запитання та загальну кількість запитань.

Останній розділ коду додає до тесту таймер зворотного відліку. Функція startCountdown() встановлює інтервальний таймер, який оновлює таймер зворотного відліку на сторінці щосекунди. Коли таймер досягає нуля, тест завершується, і функція showScores() викликається для відображення результатів користувача.




class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
Конструктор класу Quiz приймає масив об’єктів Question як параметр і ініціалізує оцінку вікторини, список запитань і поточний індекс запитання.

Метод getQuestionIndex() повертає поточний об’єкт Question на основі поточного індексу запитання.

Метод guess() приймає варіант відповіді як параметр і перевіряє, чи є він правильною відповіддю на поточне запитання. Якщо він правильний, він оновлює оцінку вікторини. Потім він збільшує індекс питання, щоб перейти до наступного запитання.

Метод isEnded() перевіряє, чи вікторина досягла кінця списку запитань, вказуючи, що вікторина завершена.

Конструктор класу Question приймає як параметри текст запитання, масив варіантів відповідей і правильну відповідь.

Метод isCorrectAnswer() приймає варіант відповіді як параметр і перевіряє, чи це правильна відповідь на запитання.


function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};


Цей розділ коду відповідає за відображення запитань вікторини на веб-сторінці.

Функція displayQuestion() спочатку перевіряє, чи завершився тест за допомогою методу isEnded() класу Quiz. Якщо тест закінчився, він викликає функцію showScores(), щоб відобразити оцінку користувача. В іншому випадку він оновлює елементи HTML на сторінці поточним текстом запитання та варіантами відповідей.

Він отримує поточний об’єкт запитання за допомогою методу getQuestionIndex() класу Quiz. Потім він оновлює текст елемента запитання на сторінці текстом запитання.

Він також переглядає варіанти відповідей на поточне запитання, оновлює текст відповідного елемента HTML варіантом відповіді та викликає функцію guess(), коли користувач натискає кнопку вибору відповіді.

І нарешті, він викликає функцію showProgress(), щоб оновити індикатор прогресу на сторінці.



*/

// CREATE A QUIZ CLASS
class Quiz {
	constructor(questions) {
		this.score = 0;
		this.questions = questions;
		this.questionIndex = 0;
	}

	getQuestionIndex() {
		return this.questions[this.questionIndex];
	}

	guess(answer) {
		if (this.getQuestionIndex().isCorrectAnswer(answer)) {
			this.score++;
		}
		this.questionIndex++;
	}

	isEnded() {
		return this.questionIndex === this.questions.length;
	}
}

// Create a question Class
class Question {
	constructor(text, choices, answer) {
		this.text = text;
		this.choices = choices;
		this.answer = answer;
	}

	isCorrectAnswer(choice) {
		return this.answer === choice;
	}
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		// show question
		let questionElement = document.getElementById('question');
		questionElement.innerHTML = quiz.getQuestionIndex().text;

		// show options
		let choices = quiz.getQuestionIndex().choices;
		for (let i = 0; i < choices.length; i++) {
			let choiceElement = document.getElementById('choice' + i);
			choiceElement.innerHTML = choices[i];
			guess('btn' + i, choices[i]);
		}

		showProgress();
	}
}

// GUESS ANSWER
function guess(id, guess) {
	let button = document.getElementById(id);
	button.onclick = function () {
		quiz.guess(guess);
		displayQuestion();
	};
}

// SHOW QUIZ PROGRESS
function showProgress() {
	let currentQuestionNumber = quiz.questionIndex + 1;
	let ProgressElement = document.getElementById('progress');
	ProgressElement.innerHTML = `${currentQuestionNumber} країна із ${quiz.questions.length}`;
}

// SHOW SCORES
function showScores() {
	let quizEndHTML = `
    <h1>Вікторина закінчена</h1>
    <h2 id='score'> Правильних відповідей: ${quiz.score} з ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Ще раз?</a>
    </div>
    `;
	let quizElement = document.getElementById('quiz');
	quizElement.innerHTML = quizEndHTML;
}

// create questions here
let questions = [
	new Question(
		'Столиця України',
		['Полтава', 'Київ', 'Харків', 'Львів'],
		'Київ'
	),
	new Question(
		'Столиця Сполучених Штатів Америки',
		['Даллас', 'Лос_Анжелес', 'Нью Йорк', 'Вашингтон'],
		'Вашингтон'
	),
	new Question(
		'Столиця Німеччини',
		['Кельн', 'Гамбург', 'Берлін', 'Мюнхен'],
		'Берлін'
	),
	new Question(
		'Столиця Франції',
		['Марсель', 'Париж', 'Ліон', 'Тулуза'],
		'Париж'
	),
	new Question(
		'Столиця Норвегії',
		['Осло', 'Ставангер', 'Тромсе', 'Берген'],
		'Осло'
	),
	new Question(
		'Столиця Фінляндії',
		['Турку', 'Ювяскюля', 'Оулу', 'Гельсінкі'],
		'Гельсінкі'
	),
	new Question(
		'Столиця Канади',
		['Торонто', 'Квебек', 'Оттава', 'Монреаль'],
		'Оттава'
	),

	new Question(
		'Столиця Алжира',
		['Ель-Уед', 'Алжир', 'Константина', 'Оран'],
		'Алжир'
	),
	new Question(
		'Столиця Молдови',
		['Бендери', 'Бєльці', 'Кишинів', 'Оргіїв'],
		'Кишинів'
	),
	new Question(
		'Столиця Хорватії',
		['Спліт', 'Дубровнік', 'Пула', 'Загреб'],
		'Загреб'
	),
	new Question(
		'Столиця Афганістану',
		['Кабул', 'Кандагар', 'Джелалабад', 'Газні'],
		'Кабул'
	),
	new Question(
		'Столиця Ямайки',
		['Монтего-Бей', 'Кінгстон', 'Мей-Пен', 'Саванна-Ла-Мар'],
		'Кінгстон'
	),
	new Question('Столиця Єгипту', ['Гіза', 'Луксор', 'Каїр', 'Хургада'], 'Каїр'),
	new Question(
		'Столиця Японії',
		['Кіото', 'Осака', 'Йокогама', 'Токіо'],
		'Токіо'
	),
	new Question(
		'Столиця Китаю',
		['Пекін', 'Шанхай', 'Ухань', 'Шеньян'],
		'Пекін'
	),
	new Question(
		'Столиця Пуерто-Рико',
		['Сан-хуан', 'Понсе', 'Агуаділья', 'Кароліна'],
		'Сан-Хуан'
	),
	new Question(
		'Столиця Бразилії',
		['Ріо-де-Жанейро', 'Сан-Паулу', 'Манаус', 'Бразилія'],
		'Бразилія'
	),
	new Question(
		'Столиця Австралії',
		['Сідней', 'Канберра', 'Мельбурн', 'Аделаїда'],
		'Канберра'
	),
	new Question(
		'Столиця Індії',
		['Джайпур', 'Мумбаї', 'Нью-Делі', 'Агра'],
		'Нью-Делі'
	),
	new Question(
		'Столиця Аргентини',
		['Буенос-Айрес', 'Мендоса', 'Формоза', 'Посадас'],
		'Буенос-Айрес'
	),
	new Question(
		'Столиця Казахстану',
		['Алмати', 'Актобе', 'Атирау', 'Астана'],
		'Астана'
	),
	new Question(
		'Столиця Данії',
		['Копенгаген', 'Сківе', 'Хадерслев', 'Рандерс'],
		'Копенгаген'
	),
	new Question(
		'Столиця Великобританії',
		['Лондон', 'Йорк', 'Ліверпуль', 'Кембрідж'],
		'Лондон'
	),
	new Question(
		'Столиця Фарерських Островів',
		['Клаксквік', 'Гойвік', 'Рунавік', 'Торсгавн'],
		'Торсгавн'
	),
	new Question(
		'Столиця Мексики',
		['Сан-Луїс-Потосі', 'Мерида', 'Акапулько-де-Хуарес', 'Мехіко'],
		'Мехіко'
	),
	new Question(
		'Столиця Індонезії',
		['Джакарта', 'Сурабая', 'Макасар', 'Медан'],
		'Джакарта'
	),
	new Question(
		'Столиця Судану',
		['Хартум', 'Порт-Судан', 'Ель-Фашир', 'Ель-Убаї'],
		'Хартум'
	),
	new Question(
		'Столиця Іспанії',
		['Барселона', 'Мадрид', 'Валенсія', 'Сантьяго-де-Компостела'],
		'Мадрид'
	),
	new Question(
		'Столиця Тайланду',
		['Пхукет', 'Паттайя', 'Бангкок', 'Сонгкхла'],
		'Бангкок'
	),
	new Question(
		'Столиця Мадагаскару',
		['Махадзанга', 'Антананаріву', 'Фіанаранцуа', 'Туамасіна'],
		'Антананаріву'
	),
	new Question(
		'Столиця Швеції',
		['Гетеборг', 'Уппсала', 'Стокгольм', 'Вестерос'],
		'Стокгольм'
	),
	new Question(
		'Столиця Швейцарії',
		['Цюрих', 'Женева', 'Базель', 'Берн'],
		'Берн'
	),
	new Question(
		'Столиця Польщі',
		['Краків', 'Гданськ', 'Вроцлав', 'Варшава'],
		'Варшава'
	),
	new Question(
		'Столиця Італії',
		['Рим', 'Венеція', 'Флоренція', 'Мілан'],
		'Рим'
	),
	new Question(
		'Столиця Румцнії',
		['Бухарест', 'Брашов', 'Констанца', 'Сіная'],
		'Бухарест'
	),
	new Question('Столиця Греції', ['Волос', 'Родос', 'Афіни', 'Пірей'], 'Афіни'),
	new Question(
		'Столиця Гренади',
		['Сент-Джорджес', 'Сент-Дейвідс', 'Гоуяве', 'Гренівлль'],
		'Сент-Джорджес'
	),
	new Question(
		'Столиця Парагвай',
		['Консепсьйон', 'Енкарнасьйон', 'Асунсьйон', 'Сьюдад-дель-Есте'],
		'Асунсьйон'
	),
	new Question(
		'Столиця Південної Кореї',
		['Бусан', 'Сеул', 'Інчхон', 'Чханвон'],
		'Сеул'
	),
	new Question(
		'Столиця Гватемали',
		['Чікімула', 'Халапа', 'Гватемала', 'Антигуа'],
		'Гватемала'
	),
	new Question(
		'Столиця Ісландії',
		['Акурейрі', 'Рейкьянесбаїр', 'Рейкьявік', 'Коупавогур'],
		'Рейкьявік'
	),
	new Question(
		'Столиця Австрії',
		['Зальцбург', 'Лінц', 'Грац', 'Відень'],
		'Відень'
	),
	new Question('Столиця Латвії', ['Рига', 'Юрмала', 'Огре', 'Цесіс'], 'Рига'),
	new Question(
		'Столиця Литви',
		['Вільнюс', 'Дукштас', 'Вянта', 'Каунас'],
		'Вільнюс'
	),
	new Question(
		'Столиця Шрі-Ланки',
		['Коломбо', 'Галле', 'Негомбо', 'Шрі-Джаяварденепура-Котте'],
		'Шрі-Джаяварденепура-Котте'
	),
	new Question(
		'Столиця Гвінеї-Бісау',
		['Бісау', 'Бафата', 'Габу', 'Мансоа'],
		'Бісау'
	),
	new Question(
		'Столиця Бельгії',
		['Брюгге', 'Брюссель', 'Монс', 'Кортрейк'],
		'Брюссель'
	),
	new Question(
		'Столиця Сальвадору',
		['Сан-Мігель', 'Сан-Сальвадор', 'Санта-Ана', 'Сан-Вісенте'],
		'Сан-Сальвадор'
	),
	new Question(
		'Столиця Гаїті',
		['Ле-Ке', 'Пор-де-Пе', 'Гонаїв', 'Порт-о-Пренс'],
		'Порт-о-Пренс'
	),
	new Question(
		'Столиця Чорногорії',
		['Будва', 'Подгориця', 'Котор', 'Тиват'],
		'Подгориця'
	),
	new Question(
		'Столиця Грузії',
		['Батумі', 'Кутаїсі', 'Тбілісі', 'Зугдіді'],
		'Тбілісі'
	),
	new Question(
		'Столиця Кюрасао',
		['Віллемстад', 'Синт-Мікаель', 'Синт-Вілліброрвгі', 'Дорп-Сото'],
		'Віллемстад'
	),
	new Question(
		'Столиця Словаччини',
		['Кошице', 'Тренчин', 'Пряшів', 'Братислава'],
		'Братислава'
	),
	new Question(
		'Столиця Чехії',
		['Прага', 'Ліберец', 'Карлові-Вари', 'Брно'],
		'Прага'
	),
	new Question(
		'Столиця Куби',
		['Трінідад', 'Пінар-дель-Ріо', 'Гавана', 'Сантьяго-де-Куба'],
		'Гавана'
	),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();

// Add A CountDown for the Quiz
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById('count-down');

function startCountdown() {
	let quizTimer = setInterval(function () {
		if (quizTime <= 0) {
			clearInterval(quizTimer);
			showScores();
		} else {
			quizTime--;
			let sec = Math.floor(quizTime % 60);
			let min = Math.floor(quizTime / 60) % 60;
			counting.innerHTML = `"${min} : ${sec}"`;
		}
	}, 1000);
}

startCountdown();
