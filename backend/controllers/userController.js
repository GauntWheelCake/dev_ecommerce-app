import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/mysql.js"; // Anslutning till MySQL

const createToken = (id, isAdmin = false) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// ✅ Route for user login (MySQL)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length === 0) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user.id, user.isAdmin);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Route for user register (MySQL)
const registerUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin = false } = req.body;

        // Kontrollera om e-post redan finns
        const [exists] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (exists.length > 0) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validera e-post och lösenord
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hasha lösenordet
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Spara användare i MySQL
        await pool.query("INSERT INTO users (name, email, password, isAdmin) VALUES (?, ?, ?, ?)", [name, email, hashedPassword, isAdmin]);

        res.json({ success: true, message: "User registered successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Route for admin login (MySQL)
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Hämta admin från databasen
        const [admin] = await pool.query("SELECT * FROM users WHERE email = ? AND isAdmin = true", [email]);

        if (admin.length === 0) {
            return res.json({ success: false, message: "Admin not found" });
        }

        // Kontrollera lösenord
        const isMatch = await bcrypt.compare(password, admin[0].password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // Generera JWT-token
        const token = createToken(admin[0].id, true);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Route for fetching all users (MySQL)
const getAllUsers = async (req, res) => {
    try {
        const [users] = await pool.query("SELECT id, name, email, isAdmin FROM users");
        res.json({ success: true, users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching users", error: error.message });
    }
};

export { loginUser, registerUser, adminLogin, getAllUsers };
