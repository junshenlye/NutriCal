import { Link, Outlet, useLoaderData, Form } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Header } from "../src/component/Header"

export const meta: MetaFunction = () => {
    return [
      { title: "NutriCal" },
      { name: "NutriCal", content: "Welcome to NutriCal!" },
    ];
  };
export default function login(){
    return(
        <div>
            <Header></Header>
            <div style={container}>
                <div style={headerContainer}>
                    <h1 style={headerStyle}>Login Page</h1>
                </div>
            </div>
        </div>
    )
}

// Add Style here
const container = {
    height: "90vh",
    backgroundColor: "white",
}

const headerStyle = {
    color: "black",
    fontWeight: "bold",
    fontSize: "regular",
}

const headerContainer = {
    height: "20vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}