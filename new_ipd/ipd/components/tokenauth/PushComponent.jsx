import React, { Component, useEffect, useState } from 'react'
import Router from "next/router";
import Preloader from "../preloader/Preloader";


export default function PushComponent(props) {

useEffect(() => {
    Router.push("/");
  });
    
    return (
        <Preloader />
    )

}

