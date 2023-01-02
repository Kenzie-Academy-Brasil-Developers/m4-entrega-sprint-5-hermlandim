import "reflect-metadata";
import "express-async-errors";
import express from "express";
import sessionRoutes from "./routes/session.routes";
import usersRoutes from "./routes/users.routes";
import handleError from "./errors/handleError";
import { categoriesRoutes } from "./routes/categories.routes";
import { addressesRoutes } from "./routes/addresses.routes";
import { propertiesRoutes } from "./routes/properties.routes";
import { schedulesRoutes } from "./routes/schedules.routes";

const app = express();
app.use(express.json());

app.use("/login", sessionRoutes);
app.use("/users", usersRoutes);
app.use("/categories", categoriesRoutes);
app.use("/addresses", addressesRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleError);

export default app;
