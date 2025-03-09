const express = require("express");
const cors = require("cors");
const coursesRoutes = require("C:/Users/usman/OneDrive/Desktop/awais/Heart2Heart_Courses/backend/server/routes/coursesRoutes.js"); // Use forward slashes
// Correct way
const app = express();
app.use(express.json());
app.use(cors());

// Use the courses routes
app.use("/api", coursesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
