import * as express from "express";
import * as userController from "../controllers/userController";

export default function(app: express.Application) {

    const jwt = require("express-jwt");
    const jwksRsa = require("jwks-rsa");

/*     // Authentication middleware. When used, the
    // Access Token must exist and be verified against
    // the Auth0 JSON Web Key Set
    const checkJwt = jwt({
        algorithms: ["RS256"],
        // Validate the issuer.
        issuer: `https://cupcake-commerce.auth0.com/`,
        // Dynamically provide a signing key
        // based on the kid in the header and
        // the signing keys provided by the JWKS endpoint.
        secret: jwksRsa.expressJwtSecret({
            cache: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://cupcake-commerce.auth0.com/.well-known/jwks.json`,
            rateLimit: true,
        }),
    }); */

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Authorization,Origin,X-Requested-With,Content-Type,Accept,content-type,application/json");
        next();
    });

    app.route("/user")
        // .get(checkJwt, productController.getProducts);
        .get(userController.read_a_user);
}
