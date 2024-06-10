document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var score = 0;
    var answers = ['q1a', 'q2b', 'q3c', 'q4b', 'q5a']; // Правильные ответы
    var resultDisplay = document.getElementById('result');

    // Проверяем ответы
    for (var i = 1; i <= answers.length; i++) {
      var radios = document.getElementsByName('q' + i);
      var answered = false;
      for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked) {
          answered = true;
          if (radios[j].id === answers[i - 1]) {
            score++;
          }
          break;
        }
      }
      if (!answered) {
        resultDisplay.innerHTML = 'Please answer all questions.';
        return;
      }
    }

    // Выводим результат
    resultDisplay.innerHTML = 'Your score is ' + score + ' out of ' + answers.length + '. Congratulations, you have completed the quiz!';
  });
});
