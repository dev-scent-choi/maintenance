const express = require('express');
const { Pool } = require('pg');
const app = express();
const cors = require('cors');

const port = 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: 'maintenance',
  host: 'localhost',
  database: 'maintenancedb',
  password: 'maintenance',
  port: 5432,
});

app.post('/login', async (req, res) => {
  const { userId, userPw } = req.body;
  
  try {
    const result = await pool.query('SELECT * FROM maint_users WHERE user_id = $1 AND user_password = $2', [userId, userPw]);
    if (result.rows.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: '아이디, 비밀번호를 확인해 주세요.' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: `오류가 발생하였습니다. 관리자에게 문의해주세요.` });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});