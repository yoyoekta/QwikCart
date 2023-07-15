const Logout = () => {

    try{
        localStorage.removeItem("user_id")
        localStorage.removeItem("token")
        window.location.href = "/"
    }
    catch(err){
        console.log(err);
    }
    
    
}

export default Logout