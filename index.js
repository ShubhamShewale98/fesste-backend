const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./routes/userRoutes');
const Blog = require('./routes/blogRoutes');
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{

    res.send("server able to respond : Hellow User");
})
app.use('/api/users',User );
app.use('/api/blogs', Blog);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
