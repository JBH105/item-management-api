export type ItemType = "product" | "service" | "subscription";

export interface BaseItem {
  id: string;
  name: string;
  type: ItemType;
}

export interface Product extends BaseItem {
  type: "product";
  price: number;
}

export interface Service extends BaseItem {
  type: "service";
  duration: number;
}

export interface Subscription extends BaseItem {
  type: "subscription";
  price: number;
  billingCycle: string;
}

export type Item = Product | Service | Subscription;
