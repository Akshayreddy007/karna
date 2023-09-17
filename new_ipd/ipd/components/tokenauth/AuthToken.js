import { authlogout, resocket, socket } from "./AuthorizationError";
import jsonwebtoken from "jsonwebtoken";
import axios from "axios";
import * as Cookies from "es-cookie";
import { io } from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_REST_SERVER_URL;

// async getData(){
//   const res = await axios('/data');
//   return await res.json();
// }
export const getToken =  () => {
  let token = "";
  let userData = "";
  if (typeof window !== "undefined") {
    userData = JSON.parse(localStorage.getItem("user"));
    // Perform localStorage action
    //console.log("localStorage.getItemout", localStorage.getItem("auth_token"));
    if (localStorage.getItem("auth_token") == "") {
      authlogout();
    } else if (
      localStorage.getItem("auth_token") != "" &&
      localStorage.getItem("auth_token") != null
    ) {

      token = localStorage.getItem("auth_token");

       axios
        .get(
          `${process.env.NEXT_PUBLIC_REST_SERVER_URL}/oldauth`,
          {
            headers: {
              
                token:token
            },
            responseType: "json",
          }
        )
        .then( (response1) => {
          //console.log("responseauth",response1);

          if (response1.status == 200) {

            if (response1.data.tokenstatus == true) {
              //to get new token
              const payload = jsonwebtoken.decode(token);
              if (!payload) {
                authlogout();
              }
              const timestamp = Math.round(new Date().getTime() / 1000);
              if (timestamp > payload.exp) {
                const refreshtoken = localStorage.getItem("userrefreshToken");
                if (refreshtoken != null) {
                   axios
                    .get(
                      `${process.env.NEXT_PUBLIC_REST_SERVER_URL}/auth`,
                      {
                        headers: {
                          
                          refresh_token: refreshtoken,
                          token:token
                        },
                        responseType: "json",
                      }
                    )
                    .then((response) => {
                      console.log("responseauth2",response);
                      if (response.status == 200) {
                        if(response.data!="Invalid token"){
                          
                          localStorage.setItem(
                            "auth_token",
                            response.data.token ? response.data.token : ""
                          );
                          localStorage.setItem(
                            "userrefreshToken",
                            response.data.refreshToken ? response.data.refreshToken : ""
                          );

                          resocket(response.data.token!=null?response.data.token:"");
                          
                        }
                        
                        // socket.on("disconnect", (reason) => {
                        //   console.log("Socket disconnected - ",reason); 
                        // });

                        

                        

                      
                      }
                      else {
                        
                        authlogout();

                      }
                    }).catch(err => { console.log("errorauth",err)});
                }
              }
              //end

            }
            else{
              console.log("false token");
              authlogout();
            }

          }
          else {
            authlogout();

          }
        })
        .catch(err => { console.log("erroroldauth",err)});




    }
  }
  return token ? `Bearer ${token}` : "";
};
