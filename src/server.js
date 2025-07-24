import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';

const PORT = process.env.PORT || 8000;

dotenv.config();

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

