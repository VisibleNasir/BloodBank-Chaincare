document.getElementById('donorLoginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (!username || !password) {
        document.getElementById('message').textContent = 'Username and password are required.';
        document.getElementById('message').style.display = 'block';
    } else {
        // Normally here, you'd send the data to the backend for validation.
        console.log('Username:', username);
        console.log('Password:', password);
        
        // Clear the message after submitting
        document.getElementById('message').style.display = 'none';
        
        // Simulate successful login
        alert('Login successful!');
    }
});
