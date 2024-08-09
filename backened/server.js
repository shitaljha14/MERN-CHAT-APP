const express = require("express");
const dotenv = require("dotenv");
const { chats }=require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes.js"); 
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get('/',(req,res) => {
res.send("API is Running Succesfully");
}); 

app.use('/api/user',userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT =process.env.PORT||8000;
app.listen(8000, 
console.log(`Server started on PORT ${PORT}`));

