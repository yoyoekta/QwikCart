import { FaAngleRight, FaMinus, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import notify from "./Notification";
import { useEffect, useState } from "react";

const DisplayCartItems = ({id, subtotal, update, updateCart}) => {

    const [quantity, setQuantity] = useState(1);
  
    const onPlusClick = () => {
      const Items = localStorage.getItem("cartItems")
      const arr = JSON.parse(Items)
      const index = arr.findIndex((item) => item.itemName === id.itemName)
      arr[index].quantity = arr[index].quantity+1
      localStorage.setItem("cartItems", JSON.stringify(arr))
      setQuantity(quantity+1);
      update(subtotal+id.price)
      notify("success", "Item added to cart")
    }
  
    const onMinusClick = () => {
      const Items = localStorage.getItem("cartItems")
      const arr = JSON.parse(Items)
      const index = arr.findIndex((item) => item.itemName === id.itemName)
      arr[index].quantity = arr[index].quantity-1
      localStorage.setItem("cartItems", JSON.stringify(arr))
      if(quantity === 1) {
        onRemoveClick()
        return
      }
      setQuantity(quantity-1);
      update(subtotal-id.price)
      notify("success", "Item removed from cart")
    }
  
    const onRemoveClick = () => {
      const Items = localStorage.getItem("cartItems")
      const arr = JSON.parse(Items)
      const index = arr.findIndex((item) => item.itemName === id.itemName)
      arr.splice(index, 1)  // remove 1 element from index position (index is inclusive)
      localStorage.setItem("cartItems", JSON.stringify(arr))
      update(subtotal-id.price*quantity)
      notify("success", "Item removed from cart")
      updateCart(arr)
    }

    useEffect(() => {
      setQuantity(id.quantity)
    }, [])
  
    return (
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between items-center border-b-2 px-4 py-4">
              <div className="flex flex-row space-x-4 items-center">
                <div className="w-16 h-16 rounded-lg">
                  <img src={id.image} alt={id.itemName} />
                </div>
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">{id.itemName}</div>
                  <div className="text-sm">Rs. {id.price}</div>
                </div>
              </div>
              <div className="flex flex-row space-x-4 items-center">
                <div className="flex flex-row space-x-4 items-center">
                  <div className="w-8 h-8 flex items-center justify-center border rounded-lg"><FaMinus className="cursor-pointer" onClick={onMinusClick}/></div>
                  <div className="flex flex-col">
                    <div className="text-xl font-semibold">{quantity}</div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border rounded-lg"><FaPlus className="cursor-pointer" onClick={onPlusClick}/></div>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                  <div className="flex mx-5 space-x-4">
                    <div className="text-3xl font-semibold"><FaRegTrashCan className="cursor-pointer" onClick={onRemoveClick}/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  };

export default DisplayCartItems;