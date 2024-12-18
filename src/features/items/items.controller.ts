import { Request, RequestHandler, Response } from "express";
import { validateItem } from "../../libs/validation";
import { addItem, getItemsByType } from "./items.service";
import { AppError } from "../../shared/middleware/errorHandler";

export const createItem: RequestHandler = (req: Request, res: Response) => {
    const error = validateItem(req.body);
    if (error) {
        throw new AppError(error, 400);
    }
    const newItem = addItem(req.body);
    res.status(201).json(newItem);
};

export const getItems: RequestHandler = (_req: Request, res: Response) => {
    const categorizedItems = getItemsByType();
    res.json(categorizedItems);
};
