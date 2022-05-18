 const API_URL = "http://localhost:12000"




   async function httpLogin(credentials) {
    
    
    try {
       return await fetch(
        `${API_URL}/login`,
        {
          method: "post",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify({userName:credentials.email, passWord:credentials.password}),
  
        }
        )
    } catch (error) {
        return {
          error
        }
    }
   
  }



export  {
    httpLogin,
};