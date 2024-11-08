// Define Donor Schema
const donorSchema = new mongoose.Schema({
    name: String,
    age: Number,
    bloodType: String,
    contact: String,
    address: String,
});

// Donor Model
const Donor = mongoose.model("Donor", donorSchema);

// Donor Registration API
app.post("/api/donors", async (req, res) => {
    try {
        const { name, age, bloodType, contact, address } = req.body;

        const donor = new Donor({
            name,
            age,
            bloodType,
            contact,
            address,
        });

        await donor.save();
        res.json({ success: true });
    } catch (error) {
        console.error("Error registering donor:", error);
        res.json({ success: false });
    }
});
