function generateRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;    
}
let userChoose = document.querySelector('#odd-or-even');
let userNum = document.querySelector('#user-number');
let btnOddEven = document.querySelector('.odd-even');
let stampOddEven = document.querySelector('.risultato');

btnOddEven.addEventListener('click', function(){
    stampOddEven.innerHTML = ''
    let userChooseValue = userChoose.value;
    let userNumValue = parseInt(userNum.value);
    if (userNumValue < 1 || userNumValue > 5) {
        stampOddEven.innerHTML = 'un numero da 1 a 5'
    } else {
    let sum = userNumValue + generateRandomNum(5, 1);
        if (sum % 2 == 0 && userChooseValue == 'pari') {
            stampOddEven.innerHTML = 'la somma è ' + sum + '...pari dunque... hai vinto!'
        } else if (sum % 2 == 1 && userChooseValue == 'dispari') {
            stampOddEven.innerHTML = 'la somma è ' + sum + '...dispari dunque... hai vinto!'
        } else if (sum % 2 == 0 && userChooseValue == 'dispari') {
            stampOddEven.innerHTML = 'la somma è ' + sum + '...pari dunque... hai perso!'
        } else if (sum % 2 == 1 && userChooseValue == 'pari') {
            stampOddEven.innerHTML = 'la somma è ' + sum + '...dispari dunque... hai perso!'
        }
    }
})


