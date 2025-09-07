import React, { Component } from "react";
import "./App.css";
import "h8k-components";
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

class App extends Component {
  constructor() {
    super();
    const products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      product.image = `/images/items/${product.name.toLowerCase()}.png`;
      product.cartQuantity = 0;
      return product;
    });
    this.state = {
      cart: {
        items: [],
      },
      products,
    };
  }

  addToCart = (productId) => {
    this.setState((prevState) => {
      const products = prevState.products.map((p) => {
        if (p.id === productId) {
          p.cartQuantity = 1;
        }
        return p;
      });

      const addedProduct = products.find((p) => p.id === productId);
      const cart = {
        items: [
          ...prevState.cart.items,
          { id: productId, item: addedProduct.name, quantity: 1 },
        ],
      };

      return { products, cart };
    });
  };

  updateQuantity = (productId, mode) => {
    this.setState((prevState) => {
      let products = prevState.products.map((p) => {
        if (p.id === productId) {
          if (mode === "add") {
            p.cartQuantity += 1;
          } else if (mode === "subtract") {
            p.cartQuantity -= 1;
          }
        }
        return p;
      });

      let cartItems = [...prevState.cart.items];
      const idx = cartItems.findIndex((item) => item.id === productId);

      if (idx > -1) {
        if (mode === "add") {
          cartItems[idx].quantity += 1;
        } else if (mode === "subtract") {
          cartItems[idx].quantity -= 1;
          if (cartItems[idx].quantity === 0) {
            cartItems.splice(idx, 1);
          }
        }
      }

      return {
        products,
        cart: { items: cartItems },
      };
    });
  };

  render() {
    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row shop-component">
          <ProductList
            products={this.state.products}
            addToCart={this.addToCart}
            updateQuantity={this.updateQuantity}
          />
          <Cart cart={this.state.cart} />
        </div>
      </div>
    );
  }
}

export const PRODUCTS = [
  { name: "Cap", price: 5 },
  { name: "HandBag", price: 30 },
  { name: "Shirt", price: 35 },
  { name: "Shoe", price: 50 },
  { name: "Pant", price: 35 },
  { name: "Slipper", price: 25 },
];
export default App;
