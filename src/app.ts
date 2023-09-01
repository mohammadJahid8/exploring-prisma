import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/users/user.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRoutes);

export default app;
