const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const db = mysql.createConnection({
  host: 'localhost',
  port: '4306',
  user: 'akshat',
  password: '1234567',
  database: 'yummyatra'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Serve static files from the uploads directory
app.use('/uploads', express.static(uploadDir));

app.get('/', (req, res) => {
  return res.json("From Backend Side");
});

app.get('/users', (req, res) => {
  const sql = "SELECT * FROM vloggers";
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json(err);
    }
    return res.json(result);
  });
});

app.post('/insertvalues', upload.single('image'), (req, res) => {
  const { name, channel, description } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !channel || !description || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const sql = "INSERT INTO vloggers (`name`, `image`, `description`, `channel`) VALUES (?, ?, ?, ?)";
  const values = [name, image, description, channel];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to insert data' });
    }
    return res.json({ message: 'Data inserted successfully', data });
  });
});

app.listen(8082, () => {
  console.log("Listening on port 8082");
});
