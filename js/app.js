var addBtn = document.getElementById('numberAddBtn');
var results = document.getElementById('results');

var numbers = [];

addBtn.addEventListener('click', function() {
    var numInput = document.getElementById('number');
    var num = numInput.value;

    if(!isNaN(num) && numbers.length < 5) {
        numbers.push(num);
        updateResults();
    }
    if(numbers.length == 5) {
        addBtn.setAttribute('disabled', 'disabled');
        numInput.setAttribute('disabled', 'disabled');
    }
    numInput.value = '';
});

function updateResults() {
    var allNumsResult = results.getElementsByClassName('all-nums')[0].firstElementChild;
    allNumsResult.textContent = numbers.join(', ');

    var minResult = results.getElementsByClassName('min')[0].firstElementChild;
    minResult.textContent = Math.min(...numbers);

    var maxResult = results.getElementsByClassName('max')[0].firstElementChild;
    maxResult.textContent = Math.max(...numbers);

    var sumResult = results.getElementsByClassName('sum')[0].firstElementChild;
    var sum = 0;
    numbers.forEach(function(n){
        sum += +n;
    });
    sumResult.textContent = sum;
}