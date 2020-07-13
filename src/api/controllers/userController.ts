import auth0, {AppMetadata, User, UserMetadata} from "auth0";
import {Request, Response} from "express";
import generator from "generate-password";
import jwt from "jsonwebtoken";
import pool from "../../db/pg_pool";
import * as API from "../models/apiModel";



export async function read_a_user(req: Request, res: Response) {
    let user = {
        id: 1,
        name: "a name"
    } as User;

    res.status(200).json(user);
}