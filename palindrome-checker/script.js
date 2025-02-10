const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkPalindrome = (input) => {
    const originalInput = input;

    if (input === '') {
        alert('Please input a value');
        return;
    }    
    resultDiv.replaceChildren();

    const formatedInput = originalInput.toLowerCase().replace(/[^a-z0-9]/g, '');    
    const reverseInput = formatedInput.split('').reverse().join('');

    if(formatedInput === reverseInput ) {
        resultDiv.innerText =  `${originalInput} is a palindrome`;
    } else {
        resultDiv.innerText = `${originalInput} is not a palindrome`
    }

}


checkPalindromeBtn.addEventListener('click', () => {
    checkPalindrome(userInput.value);
    userInput.value = '';
});

checkPalindromeBtn.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
    checkPalindrome(userInput.value);
    userInput.value = '';
    }
});