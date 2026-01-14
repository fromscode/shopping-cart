class CartFactory {
  // itemId -> qty
  map;
  count;

  constructor(map = new Map(), count = 0) {
    this.map = map;
    this.count = count;
  }

  addItem(itemId, qty = 1) {
    this.map.set(itemId, (this.map.get(itemId) || 0) + qty);
    this.count += qty;
  }

  removeItem(itemId) {
    if (!this.map.has(itemId) || this.map.get(itemId) == 1) {
      console.log("Cannot remove");
      return;
    }

    this.map.set(itemId, this.map.get(itemId) - 1);
    --this.count;
  }

  deleteItem(itemId) {
    if (!this.map.has(itemId)) {
      console.log("Item not in cart");
      return;
    }

    this.count -= this.map.get(itemId);
    this.map.delete(itemId);
  }

  nAddItem(itemId, qty = 1) {
    const newCart = new CartFactory(this.map, this.count);
    newCart.addItem(itemId, qty);
    return newCart;
  }

  nRemoveItem(itemId) {
    const newCart = new CartFactory(this.map, this.count);
    newCart.removeItem(itemId);
    return newCart;
  }

  nDeleteItem(itemId) {
    const newCart = new CartFactory(this.map, this.count);
    newCart.deleteItem(itemId);
    return newCart;
  }
}

export default CartFactory;
