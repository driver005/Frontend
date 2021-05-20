
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastonError = (data) => {
    if(data.data.err){
        toast.error(
            data.data.err,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
            }
        )
    } else {    
        toast.success(
            data.data.msg,
            {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
            }
        )
    }
}