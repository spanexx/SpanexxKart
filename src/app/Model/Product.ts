export class Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    colors: string[];
    price: number;
    isInInventory: boolean;
    itemsLeft: number;
    imageUrl: string;
    discount?: boolean;
}