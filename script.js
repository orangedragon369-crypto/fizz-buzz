let btn = document.getElementById(fizzBuzzer);

function fizz (num) {
    if ((num % 3) === 0){
        return "Fizz";
    } else {
        return "";
    }
}

function buzz (num) {
    if ((num % 5) === 0){
        return "Buzz";
    } else {
        return "";
    }
}

function fizz_buzz () {
    for (let i = 1; i <= 100; i++) {
        if (fizz(i) || buzz(i)) {
            console.log(fizz(i) + buzz(i));
        } else {
            console.log(i);
        }
    }
};