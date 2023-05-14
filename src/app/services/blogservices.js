import { url } from "./apiConfig";

export async function blog (data){

    fetch(`${url}/post/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
    
          "post": {
            "authorName": data.authorName,
            "postTitle": data.postTitle,
            "postBody": data.postBody,
            "createdDate": data.createdDate
    
          }
    
        }),
      })

      .then((response) => {
        if (response.status === 200) {
          toast.success("Success!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            icon: "fa fa-check",
            title: "Success",
            className: "toast-success",
          });
  
          return response.json();
        } else {
          toast.error("Error!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            icon: "fa fa-times",
            title: "Error",
            className: "toast-error",
          });
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((response) => {
        console.debug(response);
        // …
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: "fa fa-exclamation-triangle",
          title: "Error",
          className: "toast-warning",
        });
        console.error(error);
      });
}