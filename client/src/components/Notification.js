import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function notify(type, message) {
    if(type === "success"){
        toast.success(message, {
            position: "bottom-center",
        });
    }

    else if(type === "error"){
        toast.error(message);
    }

    else if(type === "warning"){
        toast.warning(message);
    }

    else if(type === "info"){
        toast.info(message);
    }

    else{
        toast(message);
    }
}
