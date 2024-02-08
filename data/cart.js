export let cart = [{
  productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity : 2
},
{
  productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity : 1
}];


export function addToCart(productId){
  //checking if product is already in the cart?
  let matchingItem;

  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  // if we add same item/product again just increase its count
  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
  // adding it to cart 
  cart.push({
      productId : productId,
      quantity : 1
    });
  }
}

// removing item from cart when we click delete button
export function removeFromCart(productId){
  const newCart=[];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}