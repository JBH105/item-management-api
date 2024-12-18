import { items } from "../../shared/database";
import { Item, ItemType } from "./items.types";
import { generateId } from "../../shared/utils";

export const addItem = (data: Partial<Item> & { type: ItemType }): Item => {
  const newItem: Item = { ...data, id: generateId() } as Item;
  items.push(newItem);
  return newItem;
};

export const getItemsByType = () => ({
  product: items.filter((item) => item.type === "product"),
  service: items.filter((item) => item.type === "service"),
  subscription: items.filter((item) => item.type === "subscription"),
});
