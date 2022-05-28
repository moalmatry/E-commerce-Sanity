import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);
  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice((prevState) => prevState + product.price * quantity);
    setTotalQuantity((prevQty) => {
      return prevQty + quantity;
    });
    console;
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const filteredItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevPrice) => prevPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantity((prevQty) => prevQty - foundProduct.quantity);
    setCartItems(filteredItems);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const filteredItems = cartItems.filter((item) => item._id !== id);
    if (value === "inc") {
      let newCartItems = [
        ...filteredItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ];
      setCartItems([
        ...filteredItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevState) => foundProduct.price + prevState);
      setTotalQuantity((prev) => prev + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...filteredItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevState) => prevState - foundProduct.price);
        setTotalQuantity((prev) => prev - 1);
      }
    }
  };

  const increaseQty = () => {
    setQty((prev) => prev + 1);
  };
  const decreaseQty = () => {
    setQty((prev) => {
      if (prev <= 2) return 1;
      return prev - 1;
    });
  };

  return (
    <context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        increaseQty,
        decreaseQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantity,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
