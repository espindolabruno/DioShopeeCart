import { item } from "../../Src/models/itemSchema.js";


export async function createItem(id, name, price, quantity) {
    return new item(id, name, price, quantity)
}
