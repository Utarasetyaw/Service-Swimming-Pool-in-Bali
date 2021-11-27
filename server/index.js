import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import db from "./config/database.js";
import productRoutes from "./router/product.js"
import blogRoutes from "./router/blog.js"


const app = express();

// // parse application/json
// app.use(bodyParser.json())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));


app.use(cors())


try {
    await db.authenticate();
    console.log('connect')
} catch (error) {
    console.error('connect error ', error);
}

app.use('/Product',productRoutes)
app.use('/blog',blogRoutes)

app.listen(5000, () => console.log("server conect"))