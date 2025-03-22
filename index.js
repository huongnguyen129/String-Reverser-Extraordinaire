document.addEventListener('DOMContentLoaded', function() {
    const inputString = document.getElementById('inputString');
    const reverseButton = document.getElementById('reverseButton');
    const outputResult = document.getElementById('outputResult');
    const funFactElement = document.getElementById('funFact');
    const funFacts = [
        "Fun fact: 'stressed' spelled backwards is 'desserts'!",
        "Fun fact: 'madam' spelled backwards is still 'madam'.",
        "Fun fact: The word 'palindrome' comes from Greek 'palin' (again) and 'dromos' (way, direction).",
        "Fun fact: In programming, reversing strings is a common interview question!",
    ]; 

    reverseButton.addEventListener('click', reverseString);
    inputString.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            reverseString();
        }
    });
    exampleButtons.forEach(button => {
        button.addEventListener('click', function() {
            inputString.value = this.getAttribute('data-text');
            reverseString();
        });
    });

    function reverseString() {  
        const input = inputString.value;  
        if (!input.trim()) {
            outputResult.textContent = "Please enter something first.";
            outputResult.style.color = "#ff6584";
            return;
        }
        outputResult.style.color = "";
        outputResult.style.fontWeight = "";
        const reversed = input.split('').reverse().join('');
        outputResult.textContent = reversed;
        
        showRandomFunFact(); }  
    function showRandomFunFact() {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFactElement.innerHTML = `<i class="fas fa-lightbulb"></i> ${randomFact}`;
        funFactElement.style.animation = 'none';
        setTimeout(() => {
            funFactElement.style.animation = 'fadeIn 0.5s';
        }, 10);
    }

});