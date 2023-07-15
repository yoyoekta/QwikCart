import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";
import DisplayProds from "./DisplayProds";


const MyProducts = () => {

    const [myProds, setmyProds] = useState([])
    const [empty, setEmpty] = useState(false);

    const getmyproducts = async () => {

        const url = process.env.REACT_APP_HOST + "/admin/userItems"

        try{
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    "authorization" : "Bearer " + localStorage.getItem("token"),
                } 
            })

            const response = await res.json();
            setmyProds(response.items);
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(() => {
        getmyproducts();
    }, [myProds])

    return (
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <BottomBar />
        <div className="m-10">
            <div className="flex flex-row justify-between space-x-12 p-8">
            <div className="flex-1 basis-2/3 flex flex-col space-y-4 mx-5">
                <h1 className="text-4xl font-semibold">My Products</h1>
                <hr className="border-2 border-black" />
                <div className="flex flex-col space-y-4">
                    {
                        myProds.length === 0 ? (<h3 className="text-xl font-semibold"> No products to show. Kindly add few. </h3>) : myProds.map((item, index) => {
                            return(<DisplayProds items={item} key={index}/>)
                        })
                    }
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default MyProducts;
