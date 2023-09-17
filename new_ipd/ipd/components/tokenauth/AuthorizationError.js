import * as Cookies from "es-cookie";
import Router from "next/router";
import { io } from "socket.io-client";
import axios from "axios";
// import {}socketIOClient from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_REST_SERVER_URL;


export var socket = io(ENDPOINT, {
   forceNew: true ,
  transports: ["websocket", "polling", "flashsocket"],
  withCredentials: true,
  extraHeaders: {
    Authorization: "Bearer authorization_token_here",
    authHeader: "header",
  },
  auth: {
    token: typeof window !== 'undefined' ?localStorage.getItem("auth_token")!=null?localStorage.getItem("auth_token"):"":"",
  },
});

export const resocket =(token)=>{
  socket = io(ENDPOINT, {
    forceNew: true ,
   transports: ["websocket", "polling", "flashsocket"],
   withCredentials: true,
   extraHeaders: {
     Authorization: "Bearer authorization_token_here",
     authHeader: "header",
   },
   auth: {
     token: token,
   },
 });

 socket.on("connect", () => {
  console.log("reconnect.socket", socket.id);
  //ssetForm({ ...sform, socket: socket.id });
});
}

export const authlogout = () => {
  console.log("authlogout1");
  
  if (typeof window !== "undefined") {
    
    axios
        .get(
          `${process.env.NEXT_PUBLIC_REST_SERVER_URL}/logout`,
          {
            headers: {
              
                token:localStorage.getItem("auth_token")
            },
            responseType: "json",
          }
        )
        .then( (response1) => {
          console.log("responseauth",response1);

          if (response1.status == 200) {
            console.log("authlogout",response1.data.tokenstatus);
            if(response1.data=="Invalid token"){
              
              Router.push("/");
              localStorage.clear();
            }
            else{
              if (response1.data.tokenstatus == true) {
                
                Router.push("/");
                localStorage.clear();
              }
            }
            
          }
        });

	      
    //localStorage.clear();
    // localStorage.removeItem("auth_token");
    // localStorage.removeItem("userrefreshToken");
    // localStorage.removeItem("lastlogin");
    // localStorage.removeItem("userlevel");
    //socket.close();
    
    //socket.disconnect(true) ;
    // socket.on("disconnect", (reason) => {
    //   console.log("Socket disconnected - ",reason); 
    // });
  }
};
export const logout = () => {
  console.log("logout");
  if (typeof window !== "undefined") {
    axios
        .get(
          `${process.env.NEXT_PUBLIC_REST_SERVER_URL}/logout`,
          {
            headers: {
              
                token:localStorage.getItem("auth_token")
            },
            responseType: "json",
          }
        )
        .then( (response1) => {
          console.log("responseauth",response1);

          if (response1.status == 200) {
            if(response1.data=="Invalid token"){
              
              Router.push("/");
              localStorage.clear();
            }
            else{
              if (response1.data.tokenstatus == true) {
                
                Router.push("/");
                localStorage.clear();
              }
            }
          }
        });
	
    // localStorage.removeItem("auth_token");
    // localStorage.removeItem("userrefreshToken");
    // localStorage.removeItem("lastlogin");
    // localStorage.removeItem("userlevel");
    
    //socket.close();
    //socket.disconnect(true) ;

    // socket.on("disconnect", (reason) => {
    //   console.log("Socket disconnected - ",reason); 
    // });
  }
};
