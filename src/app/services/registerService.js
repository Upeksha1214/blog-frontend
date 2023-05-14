import { url } from "./apiConfig"; 


export async function register(data) {
    fetch(`${url}/signUp/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
                "singUp":{
                    "fullName":data.fullName,
                    "username":data.username,
                    "phoneNumber": data.phoneNumber,
                    "email":data.email,
                    "password":data.password
            
                }
            
        }),
    })
    
    .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Something went wrong on API server!");
        }
      })
      .then((response) => {
        console.debug(response);
        // …
      })
      .catch((error) => {
        console.error(error);
      });
}