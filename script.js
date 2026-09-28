let passwordField = document.getElementById('user-password');
let toggleCheckbox = document.getElementById('show-pass-btn');

toggleCheckbox.onclick = function() {
    if (toggleCheckbox.checked === true) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
};


let form = document.getElementById('login-form');
let nameInput = document.getElementById('user-name');
let popup = document.getElementById('popup');
let animatedName = document.getElementById('animated-name');
let closeBtn = document.getElementById('close-popup');

form.onsubmit = function(event) {
    
    event.preventDefault();
    
    popup.classList.remove('hidden');
    
    animatedName.textContent = '';
    
    let text = nameInput.value;
    
    let i = 0;
    
    let timer = setInterval(function() {
        
        if (i < text.length) {
            animatedName.textContent += text[i];
            i++;
        } else {
            clearInterval(timer);
        }
        
    }, 120);
};

closeBtn.onclick = function() {
    popup.classList.add('hidden');
};