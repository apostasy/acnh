import bodyParser from "body-parser";
import express from "express";
// import model from "./api/models/cupcakeCommerceModel"; // created model loading here
import routes from "./api/routes/cupcakeCommerceRoutes"; // importing route

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); // register the route

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
