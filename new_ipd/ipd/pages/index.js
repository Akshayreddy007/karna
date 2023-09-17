import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/login/Login'
import Sidebar from '../components/sidebar/Sidebar'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // console.log('Adding event listener...');
    const handlePostMessage = (event) => {
      // console.log('Received event:', event.data, event);
      if (event && event.data) {
        console.log("Data Connected")
        localStorage.setItem("auth_token", event.data["auth_token"]);
        localStorage.setItem("user", event.data["user"]);
        localStorage.setItem("userHip", event.data["userHip"]);
        localStorage.setItem('userrefreshToken', event.data["userRefreshToken"])
        localStorage.setItem('lastlogin', event.data["lastlogin"])
        localStorage.setItem('userlevel', event.data["userlevel"])
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('message', handlePostMessage);

    // Clean up the event listener when the component unmounts
    return () => {
      // console.log('Removing event listener...');
      window.removeEventListener('message', handlePostMessage);
    };
  }, []);

  return (
    <div>
      <Login />
    </div>
  )
}
