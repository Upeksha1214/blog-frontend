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

return await response.json();

}catch(error) {
  return error
}

  // fetch(`${url}/post/`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({

  //   }),
  // })

  // .then((response) => {
  //   console.debug(response);
  //   return response.json();
  // })

  // .catch((error) => {
  //   console.error(error);
  // })
  // console.log("podda")
}

export async function UpdateBlog (data){

  fetch(`${url}/post/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

    }),
  })

  .then((response) => {
    console.debug(response);
    // … r67t6yui
  })

  .catch((error) => {
    console.error(error);
  })

}


export async function DeleteBlog (data){

  fetch(`${url}/post/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

    }),
  })

  .then((response) => {
    console.debug(response);
    // … r67t6yui
  })

  .catch((error) => {
    console.error(error);
  })

}
