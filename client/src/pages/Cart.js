import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import DisplayCartItems from "../components/DisplayCartItems";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import notify from "../components/Notification";

const Cart = () => {

  const [empty, setEmpty] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [Subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);


  const navigate = useNavigate();

  const checkItems = () => {
    const size = localStorage.getItem("cartItems") === null ? 0 : JSON.parse(localStorage.getItem("cartItems")).length;
    if (size === 0) {
      setEmpty(true);
    }
  };

  const updateSubtotal = (value) => {
    setSubtotal(value);
    if(value === 0) {
      setTotal(value);
      setEmpty(true);
    }
    else
      setTotal(value + 50);
  };

  const updateCart = (value) => {
    setCartItems(value);
  };

  const pay = async() => {
    if(localStorage.getItem("token") === null){
      navigate("/login")
    }
    else{
        const stripePromise = await loadStripe('pk_test_51NTs1TSApopPbzRogVwlCQDeDAa5HPfgK1ntiMKv0aZmHXgpTN7ezsuRuFNHjezyGrbOQNkh7cFb8112cn8Eo21f00TtNLQM1E');
        const cart = localStorage.getItem("cartItems");
        const cartItems = JSON.parse(cart);
        const total = cartItems.reduce((a, b) => a + b.price * b.quantity, 0) + 50;
        const order = {
          items: cartItems,
          total: total
        }
        const url = process.env.REACT_APP_HOST + "/checkout";
        const res = await fetch(url,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        })

        const data = await res.json();
        if(res.status === 500) return;

        notify("info", "Redirecting to payment page")
        stripePromise.redirectToCheckout({sessionId: data.id})
    }
  };


  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    const arr = JSON.parse(cart);
    setCartItems(arr);
    if(arr === null) {
      setEmpty(true);
      return;
    }
    setSubtotal(arr.reduce((a, b) => a + b.price * b.quantity, 0));
    setTotal(arr.reduce((a, b) => a + b.price * b.quantity, 0) + 50)
    checkItems();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
      <Navbar />
      <BottomBar />
      <div className="m-10">
        <div className="flex flex-row justify-between space-x-12 p-8">
          <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
            <h1 className="text-4xl font-semibold">Your Cart</h1>
            <hr className="border-2 border-black" />
            {empty ? (<h3 className="text-xl"> Your Cart is empty </h3>) : 
              (
                <>
                  {cartItems.map((item, index) => {
                    return (
                      <DisplayCartItems id={item} subtotal={Subtotal} update={updateSubtotal} updateCart={updateCart} key={index}/>
                    )
                  })}
                </>
              )
            }
          </div>

          <div className="flex-1 basis-1/3 border rounded-lg cursor-pointer bg-black text-white">
            <div className="p-4 m-2 flex flex-col space-y-2">
              <h3 className="text-3xl font-semibold">Cart Total</h3>
              <div className="flex flex-col justify-between space-y-2">
                <div className="flex justify-between my-4">
                  <div>Subtotal</div>
                  <div>Rs. {empty ? 0 : Subtotal}</div>
                </div>
                <hr />
                <div className="flex flex-col justify-between py-2 space-y-2">
                  <div className="flex justify-between">
                    <div>Tax</div>
                    <div>Rs. 0</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Shipping</div>
                    <div>Rs. {empty ? 0 : 50}</div>
                  </div>
                </div>
                <hr />
                <div className="flex justify-between py-2">
                  <div>Total</div>
                  <div>Rs. {empty ? 0 : total}</div>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center bg-white text-black rounded-lg" onClick={pay}>
                <p className="p-4 font-medium">Continue to Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
