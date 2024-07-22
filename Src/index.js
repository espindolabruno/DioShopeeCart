import { createItem } from "./services/itens.js"
import *  as cartServices from "./services/cart.js"

const user = []

console.log("====== Hello and welcome to your ShopeeCart 🛒😃 ====== \n")


const item  = await createItem(1, "suspicious Eletronic", 18.71, 3)
const item1 = await createItem(2, "Shopee Dragon", 4.94, 1)
const item3 = await createItem(3, "Some EnjoyableToy", 5.94, 7)

await cartServices.addItemToCart(user, item)
await cartServices.addItemToCart(user, item1)
await cartServices.addItemToCart(user, item3)

await cartServices.showCartItens(user)

await cartServices.deleteItem(user, item3, 2)

await cartServices.removeItem(user, 0)

await cartServices.showCartItens(user)

await cartServices.calculateTotalCartPrice(user)