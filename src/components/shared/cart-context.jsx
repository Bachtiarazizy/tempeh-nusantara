"use client";

import { createContext, useContext, useReducer } from "react";

// Cart Context
const CartContext = createContext();

// Cart Actions
const CART_ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

// Generate unique cart item ID based on product variants
const generateCartItemId = (product) => {
  return `${product.id}-${product.variant || "default"}-${product.weight || "default"}`;
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { product, quantity = 1 } = action.payload;
      const cartItemId = generateCartItemId(product);
      const existingItem = state.items.find((item) => item.cartItemId === cartItemId);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + quantity } : item)),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...product,
            quantity,
            cartItemId,
            // Ensure we have all the variant details
            productId: product.id,
            productName: product.name,
            basePrice: product.price,
            variant: product.variant || null,
            weight: product.weight || null,
            image: product.image || null,
            category: product.category || null,
            slug: product.slug || null,
          },
        ],
      };
    }

    case CART_ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.cartItemId !== action.payload.cartItemId),
      };

    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { cartItemId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((item) => item.cartItemId !== cartItemId),
        };
      }

      return {
        ...state,
        items: state.items.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item)),
      };
    }

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  // Cart actions
  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: { product, quantity },
    });
  };

  const removeFromCart = (cartItemId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: { cartItemId },
    });
  };

  const updateQuantity = (cartItemId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { cartItemId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });
  };

  // Cart calculations
  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  // Get unique products count (different from total items)
  const uniqueProducts = state.items.length;

  // Get cart summary for checkout
  const getCartSummary = () => {
    return {
      items: state.items,
      totalItems,
      uniqueProducts,
      totalPrice,
      shipping: totalPrice > 50 ? 0 : 10, // Free shipping over $50
      tax: totalPrice * 0.1, // 10% tax
      finalTotal: totalPrice + (totalPrice > 50 ? 0 : 10) + totalPrice * 0.1,
    };
  };

  const value = {
    items: state.items,
    totalItems,
    uniqueProducts,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartSummary,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartContext;
