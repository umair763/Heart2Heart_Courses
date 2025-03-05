import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../../services/firestore"; // Updated import path
import AuthContext from "../context/AuthContext";

function PersonalDashboard() {
    const navigate = useNavigate();
    const { isAuthenticated, setIsAuthenticated, setUser, user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    // Redirect if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/Signin", { replace: true });
        }
    }, [isAuthenticated, navigate]);

    // Fetch all courses
    useEffect(() => {
        console.log("Fetching courses...");
        getAllCourses()
            .then((data) => {
                console.log("Data from Firestore:", data); // Log the fetched data
                setCourses(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
                setLoading(false);
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
        navigate("/signin");
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <p>Manage your personal courses and settings here.</p>

            <div className="mt-4">
                <p>Welcome, {user?.email ? user.email : "Guest"}!</p>
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold">Available Courses</h3>
                {loading ? (
                    <p>Loading courses...</p>
                ) : courses.length > 0 ? (
                    <ul>
                        {courses.map((course) => (
                            <li key={course.id} className="mt-2 p-2 border rounded">
                                <h4 className="font-semibold">{course?.title || "No Title"}</h4>
                                <p>{course?.description || "No Description"}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No courses available.</p>
                )}
            </div>

            <div className="mt-6">
                <h3 className="text-lg font-semibold">Settings</h3>
                <p>Change Profile information here</p>
            </div>

            <button
                onClick={handleLogout}
                className="mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Logout
            </button>
        </div>
    );
}

export default PersonalDashboard;