import { createItem } from "./services/itens.js"
import *  as cartServices from "./services/cart.js"

const user = []

console.log("====== Hello and welcome to your ShopeeCart 🛒😃 ====== \n")


const item = await createItem(1, "Eletrônico Suspeito", 18.71, 3)
const item1 = await createItem(2, "Dragão da shopee", 4.94, 1)
const item3 = await createItem(3, "SomeEnjoyableToy", 5.94, 7)

await cartServices.addItemToCart(user, item)
await cartServices.addItemToCart(user, item1)
await cartServices.addItemToCart(user, item3)

await cartServices.showCartItens(user)

await cartServices.deleteItem(user, item3, 7)


await cartServices.showCartItens(user)

//await removeItem(user, item1)

await cartServices.calculateTotalCartPrice(user)