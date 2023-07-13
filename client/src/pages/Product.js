import React from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import electronics from '../images/electronics.jpg'

const Cart = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <BottomBar />
        <div className="m-10">
            <div className="flex flex-row justify-between space-x-12 p-8">
                <div className="flex-1 flex flex-col space-y-4 mx-5 items-center">
                    <img src={electronics} alt="Product Image" className="object-fit"/>
                </div>

                <div className="h-full flex-1">
                    <div className="p-4 m-2 flex flex-col justify-between space-y-8">
                        <h3 className="text-4xl font-black">Product Name</h3>
                        <p className="text-lg">
                        Lorem ipsum dolor sit amet. Qui quae dolor quo aliquid voluptate vel mollitia mollitia sed rerum ipsum a sequi expedita non nihil eligendi et dolores quibusdam. Et quia minima rem nulla sint cum debitis dolores At dicta omnis. Et dolorum unde eos omnis aspernatur et nulla modi. Et eius asperiores est voluptas rerum nam itaque quisquam aut iste obcaecati sed voluptatem reiciendis non voluptatem ratione et architecto inventore.

                        Sed numquam animi et obcaecati tempore ea sunt corrupti. Non iste assumenda et quia expedita in quam debitis in eveniet tenetur. Ea illo assumenda ut voluptate dolor et quod quas. Sit aliquam possimus vel illo cupiditate a sunt suscipit eos voluptatem aliquam ab ratione eius.

                        Sed velit corporis non autem dolores ut labore eveniet aut nobis impedit qui quod perferendis cum deserunt dolorem et maxime labore. Ea totam natus et quia voluptatem est architecto provident a libero iure ea illum consequatur?
                        </p>
                        <h4 className="text-xl font-semibold">Price Rs. 12200</h4>
                        <div className="flex flex-row justify-center items-center bg-black text-white rounded-lg cursor-pointer">
                            <p className="p-4 font-medium">Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cart;
