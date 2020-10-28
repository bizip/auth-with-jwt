import express from "express";
import morgan from "morgan";
const app = express();   
app.use(morgan("dev")); // line 5
const PORT = process.env.PORT || 7000; //line 7
app.listen(PORT, () => {
 console.log(`server listen at port ${PORT}`);
});