import { FaAngleRight, FaPen, FaRegTrashCan } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import notify from "../components/Notification"

const DisplayProds = (item) => {

    const navigate = useNavigate()

    const deleteProd = async(id) =>{
        try{
            const url = process.env.REACT_APP_HOST + "/admin/delete/" + id
            const res = await fetch(url, {
                method: 'DELETE',
                headers:{
                    "authorization" : "Bearer " + localStorage.getItem("token"),
                }
            })

            res.status === 200 ? navigate('/myproducts') : console.log("Error")
            notify("success", "Product deleted successfully")
        }
        catch(err){
            console.log(err)
        }
    }



    return (
        <div className="flex flex-row justify-between items-center border-b-2 px-4 py-4">
            <div className="flex flex-row space-x-4 items-center">
                <div className="w-16 h-16 rounded-lg">
                    <img src={item.items.image.secure_url} alt={item.items.itemName} className="object-cover w-16 h-16" />
                </div>
                <div className="flex flex-col">
                    <div className="text-xl font-semibold">{item.items.itemName}</div>
                    <div className="text-sm">Rs. {item.items.price}</div>
                </div>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                <div className="flex flex-row space-x-4 items-center">
                    <div className="flex flex-col">
                        <Link to={`/myproducts/edit/${item.items._id}`}>
                        <div className="text-2xl font-semibold cursor-pointer"><FaPen /></div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row space-x-4 items-center">
                    <div className="flex mx-5 space-x-4">
                        <div className="text-3xl font-semibold cursor-pointer"><FaRegTrashCan onClick={()=>deleteProd(item.items._id)}/></div>
                        <Link to={`/product/${item.items._id}`}>
                            <div className="text-3xl font-semibold cursor-pointer"><FaAngleRight /></div>
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProds