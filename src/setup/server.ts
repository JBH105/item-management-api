import express, { NextFunction, Request, Response } from "express";
import routes from "../routes";
import { AppConfig } from "../configs/app.config";
import { errorHandler, AppError } from "../shared/middleware/errorHandler";

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new AppError("Route not found", 404));
});

app.use(errorHandler);

app.listen(AppConfig.port, () => {
  console.log(`Server running on http://localhost:${AppConfig.port}`);
});
