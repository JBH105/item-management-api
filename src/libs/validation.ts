import { ItemType } from "../features/items/items.types";

export const validateItem = (item: any): string | null => {
  if (!item.type || !["product", "service", "subscription"].includes(item.type)) {
    return "Invalid item type.";
  }

  if (!item.name || typeof item.name !== "string") {
    return "Name is required and must be a string.";
  }

  if (item.type === "product" && (typeof item.price !== "number" || item.price <= 0)) {
    return "Price is required and must be a positive number.";
  }

  if (item.type === "service" && (typeof item.duration !== "number" || item.duration <= 0)) {
    return "Duration is required and must be a positive number.";
  }

  if (
    item.type === "subscription" &&
    (typeof item.price !== "number" || item.price <= 0 || !item.billingCycle || typeof item.billingCycle !== "string")
  ) {
    return "Subscription must have a positive price and a valid billingCycle.";
  }

  return null;
};
