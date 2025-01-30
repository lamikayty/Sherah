document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
    
    if (name && email) {
        document.getElementById("response-message").textContent = `Thank you, ${name}! You've successfully signed up to support Sherah Outreach.`;
        document.getElementById("signup-form").reset();
    }
});