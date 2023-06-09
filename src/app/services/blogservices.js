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
        // … r67t6yui
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

 ////////////////////////////////////////////get////////////////////////////////////////

export async function GetBlog (){

  try{
  const response = await fetch(`${url}/post/`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})

// .then(response => response.json())
// .then((data) => {return data});

const result=await response.json()
console.log(result)
return result;

}catch(error) {
  return []
}
}

export async function DeleteBlog (){

  try{
  fetch(`${url}/post/${data.authorName}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    
  })

  return await response.json();

}catch(error) {
  return error
}

}


export async function UpdateBlog (data){

  fetch(`${url}/post/${data.authorName}`, {
    method: 'PATCH',
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
    // … r67t6yui
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
