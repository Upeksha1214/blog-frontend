import { url } from "./apiConfig";
import { toast } from "react-toastify";

export async function login (data){


      try{
      const response = await fetch(`${url}/login/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

            "userName": data.userName,
            "password": data.password,
    
        }),
      });

      // .then ((response) => {
      // //   if (response.status === 200) {
      // //     toast.success("Success!", {
      // //       position: "top-center",
      // //       autoClose: 5000,
      // //       hideProgressBar: false,
      // //       closeOnClick: true,
      // //       pauseOnHover: true,
      // //       draggable: true,
      // //       progress: undefined,
      // //       theme: "light",
      // //       icon: "fa fa-check",
      // //       title: "Success",
      // //       className: "toast-success",
      // //     });
  
      // //     return response.json();
      // //   } else {
      // //     toast.error("Error!", {
      // //       position: "top-center",
      // //       autoClose: 5000,
      // //       hideProgressBar: false,
      // //       closeOnClick: true,
      // //       pauseOnHover: true,
      // //       draggable: true,
      // //       progress: undefined,
      // //       theme: "light",
      // //       icon: "fa fa-times",
      // //       title: "Error",
      // //       className: "toast-error",
      // //     });
      // //     throw new Error("Something went wrong on API server!");
      // //   }
      //  })
      
      //.then((response) => {
        const result = await response.json();
        if(result.success){
          console.debug(response);
        // location.pathname=''
        return result.user;
        }
    }catch(e){

    }
      // .catch((error) => {
      //   toast.error(error.message, {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //     icon: "fa fa-exclamation-triangle",
      //     title: "Error",
      //     className: "toast-warning",
      //   });
      //   console.error(error);
      // });


}
