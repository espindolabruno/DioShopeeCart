
//Cart.js is responsile for manage all the functionality of a ShopeeCart
//those responsibilities are:
// show itens and her quantities
// show unit prices
// show total item price
// show total cart price
// remove an unit 
// exclude an item
// check out (buy all item in cart)

export async function addItemToCart(userCart, item){

    if(item.Name === undefined)
        return

    console.log(`Adicionando ${item.Quantity} do item "${item.Name}"`)
    userCart.push(item);
}

export async function showCartItens(userCart){
    userCart.forEach(userCart => {
        console.log(`\n no seu carrinho: ${userCart.Name} | QTD: ${userCart.Quantity} 
        | subtotal: ${userCart.TotalItemPrice()}`)
    })
}

export async function deleteItem(userCart, item, quantity) {
    const index =  userCart.findIndex((value) => value.Name === item.Name)
    
    if(userCart[index].Quantity - quantity <= 0) {
        removeItem(userCart, item)
        return
    }
    
    console.log(`\n 🗑 Diminuindo ${quantity} do item ${item.Name}`)
    userCart[index].Quantity -= quantity
}

export async function removeItem(userCart, item) {
    const index = userCart.findIndex((value) => value.Name === item.Name)
    console.log(`\n ❗❗ Removendo ${item.Name} do carrinho ❗❗`)
    userCart.splice(index,1)
}

export async function calculateTotalCartPrice(userCart) {
    const result =  userCart.reduce((total, item) => total + item.TotalItemPrice(), 0 ) 
    console.log(`\n ==================================`)
    console.log(`🔴 Preço total 🛒 | ${result}`)
    return result
}