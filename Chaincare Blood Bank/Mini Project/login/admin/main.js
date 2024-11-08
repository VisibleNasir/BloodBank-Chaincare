// Sample data (for testing purpose)
const donors = [
    { name: "John Doe", bloodType: "A+", units: 2, status: "Pending" },
    { name: "Jane Smith", bloodType: "O-", units: 1, status: "Approved" },
];

// Function to render donor data in the table
function renderDonors() {
    const donorTableBody = document.getElementById("donorTableBody");
    donorTableBody.innerHTML = "";  // Clear existing content

    donors.forEach((donor, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${donor.name}</td>
            <td>${donor.bloodType}</td>
            <td>${donor.units}</td>
            <td>${donor.status}</td>
            <td>
                <button class="approve" onclick="approveDonor(${index})">Approve</button>
                <button class="delete" onclick="deleteDonor(${index})">Delete</button>
            </td>
        `;
        donorTableBody.appendChild(row);
    });
}

// Initialize dashboard data
function initializeDashboard() {
    document.getElementById("totalDonors").querySelector("p").textContent = donors.length;
    document.getElementById("totalRequests").querySelector("p").textContent = donors.length;
    document.getElementById("approvedRequests").querySelector("p").textContent = donors.filter(d => d.status === "Approved").length;
    document.getElementById("totalBloodUnits").querySelector("p").textContent = donors.reduce((acc, donor) => acc + donor.units, 0);
}

// Function to switch sections
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
        section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.add("active");
}

// Initialize the dashboard and render donors on page load
document.addEventListener("DOMContentLoaded", () => {
    initializeDashboard();
    renderDonors();
    showSection("dashboard");  // Show dashboard by default
});
