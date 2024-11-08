document.getElementById("donorForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const donorData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        profilePic: document.getElementById("profilePic").files[0],
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        bloodType: document.getElementById("bloodType").value,
        contact: document.getElementById("contact").value,
        address: document.getElementById("address").value,
    };

    // Handle profile picture upload
    const formData = new FormData();
    formData.append("profilePic", donorData.profilePic);
    formData.append("username", donorData.username);
    formData.append("password", donorData.password);
    formData.append("name", donorData.name);
    formData.append("age", donorData.age);
    formData.append("bloodType", donorData.bloodType);
    formData.append("contact", donorData.contact);
    formData.append("address", donorData.address);

    try {
        const response = await fetch("http://localhost:3000/api/donors", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById("message").innerText = "Registration successful!";
            document.getElementById("message").style.color = "green";
            document.getElementById("message").style.display = "block";
            document.getElementById("donorForm").reset();
        } else {
            document.getElementById("message").innerText = "Registration failed.";
            document.getElementById("message").style.color = "red";
            document.getElementById("message").style.display = "block";
        }
    } catch (error) {
        document.getElementById("message").innerText = "Error occurred, please try again.";
        document.getElementById("message").style.color = "red";
        document.getElementById("message").style.display = "block";
        console.error("Error:", error);
    }
});
