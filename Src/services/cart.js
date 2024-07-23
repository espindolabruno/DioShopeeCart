
//Cart.js is responsible for manage all the functionality of a ShopeeCart
//these responsibilities are:
// show itens and her quantities 👌
// show unit prices 👌
// show total item price 👌
// show total cart price 👌
// remove an unit 👌
// remove an item 👌

export async function addItemToCart(userCart, item){

    if(item.Name === undefined)
        return
    userCart.push(item);
}

export async function showCartItens(userCart){

    userCart.forEach(userCart => {
        console.log(`\n no seu carrinho: ${userCart.Name} | QTD: ${userCart.Quantity} 
        | preço unitário: ${userCart.Price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} | subtotal: ${userCart.getTotalItemPrice().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    })
}
/**
 * updates the quantity for an item in the user cart
 * if the final quantity is lower than 0 it will remove it from the cart
 * 
 * @param {Array} userCart - userCart an array of item
 * @param {Number} index - the index to search in userCart starting on 0
 * @param {Number} quantity - the quantity to change in the userCart
 * @returns 
 */
export async function updateItem(userCart, index, quantity) {

    if(index < 0 || index >= userCart.length) {
        console.log(`\n 😿 Index inválido, não deu pra alterar o item`)
        return 
    }

    if((quantity < 0) || (userCart[index].Quantity - quantity <= 0)) {
        removeItem(userCart, index)
        return
    }
    
    console.log(`\n 💱 alterando de ${userCart[index].Quantity} para ${quantity} o item ${userCart[index].Name}`)
    userCart[index].Quantity = quantity
}

export async function removeItem(userCart, index) {
    console.log(`\n ❗❗ Removendo ${userCart[index].Name} do carrinho ❗❗`)
    userCart.splice(index,1)
}

export async function calculateTotalCartPrice(userCart) {
    let result =  userCart.reduce((total, item) => total + item.getTotalItemPrice(), 0 )
    result = result.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(`\n ==================================`)
    console.log(`🔴 Preço total 🛒 | ${result}`)
    return result
}