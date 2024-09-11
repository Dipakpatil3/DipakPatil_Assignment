document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('responseMessage').textContent = '';

    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    
    let isValid = true;
    if (!username || !validateEmail(username)) {
        document.getElementById('usernameError').textContent = 'Please enter a valid email.';
        isValid = false;
    }
    if (!password || password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    if (isValid) {
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            
            document.getElementById('responseMessage').textContent = 'Login successful!';
        })
        .catch(error => {
            
            document.getElementById('responseMessage').textContent = 'Login failed. Please try again.';
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
