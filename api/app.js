import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
