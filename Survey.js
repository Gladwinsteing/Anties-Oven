function calculateRating() {
    var score = 0;
    var totalQuestions = 10; // Adjust this number if questions are added/removed

    // Loop through each radio button group and calculate score
    var formElements = document.forms['survey-form'].elements;
    for (var i = 0; i < formElements.length; i++) {
        var element = formElements[i];
        if (element.type === 'radio' && element.checked) {
            if (element.value === 'yes') {
                score += 1;
            } else if (element.value === 'no') {
                score += 0;
            } else if (element.value === 'uncertain') {
                score += 0.5;
            }
        }
    }

    // Calculate rating
    var percentage = (score / totalQuestions) * 100;
    var resultMessage = '';

    if (percentage >= 80) {
        resultMessage = 'Excellent! You are highly aware of online safety.';
    } else if (percentage >= 50) {
        resultMessage = 'Good job! You have a solid understanding of online safety, but there is room for improvement.';
    } else {
        resultMessage = 'Needs Improvement. Consider learning more about online safety.';
    }

    // Show result
    document.getElementById('result').innerHTML = 'Your score: ' + percentage.toFixed(2) + '% - ' + resultMessage;
}