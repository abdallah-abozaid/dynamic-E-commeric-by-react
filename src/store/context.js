import React, { useState, useEffect } from "react";
import { storeProducts } from "../data";

const MyContext = React.createContext();
export const Myprovider = (props) => {
  // usestate varible
  const [Items, setItems] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [ItemClicked, setItemClicked] = useState({});
  const [total, settotal] = useState(0);

  // increase Count of item in cart
  const increaseItemInCart = (id) => {
    setCartItems(
      CartItems.map((item) => {
        if (item.id == id) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      })
    );
  };

  // decrease Count of item in cart
  const decreaseItemInCart = (id) => {
    setCartItems(
      CartItems.map((item) => {
        if (item.id == id) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return { ...item, count: item.count };
          }
        } else {
          return item;
        }
      })
    );
  };

  // remove item from cart page
  const removeItemInCart = (id) => {
    const old = [...CartItems];
    const update = old.filter((item) => {
      return item.id !== id;
    });
    setCartItems(update);
  };

  //store item from json to my usestate once onload the page
  useEffect(() => {
    setItems(storeProducts);
  }, []);

  // put the content of item i click on it to show in modal
  const modalShowhandler = (id) => {
    const index = Items.findIndex((item) => {
      return item.id === id;
    });
    setItemClicked(Items[index]);
    setModalShow(true);
  };

  // add card to the cart page
  const addProductToCart = (id) => {
    const exist = CartItems.findIndex((item) => {
      return item.id === id;
    });
    if (exist != -1) {
    } else {
      const find = Items.findIndex((item) => {
        return item.id === id;
      });
      setCartItems((prev) => {
        const old = [...prev];
        const update = [...old, Items[find]];
        return update;
      });
    }
  };

  // calculat the sum of all price for all item in the cart page
  useEffect(() => {
    const total = CartItems.reduce((curr, item) => {
      return curr + item.count * item.price;
    }, 0);
    settotal(total);
  }, [CartItems]);
  console.log(total);

  //remove all item in cart page
  const clearAllCart = () => {
    setCartItems([]);
  };

  // item i will share it in public
  const ProviderContent = {
    ItemClicked,
    Items,
    modalShow,
    setModalShow,
    modalShowhandler,
    addProductToCart,
    CartItems,
    increaseItemInCart,
    decreaseItemInCart,
    removeItemInCart,
    total,
    clearAllCart,
  };
  return (
    <MyContext.Provider value={ProviderContent}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContext;
