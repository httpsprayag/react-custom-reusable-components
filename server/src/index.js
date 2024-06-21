const { connectDB } = require("./_db/connectDb");
const app = require("./routes/routes");
const PORT = 5000 || process.env.PORT;

require("dotenv").config();

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server started on PORT: ${PORT}`);
  } catch (error) {
    console.log("Server Error:", error.message);
  }
});
