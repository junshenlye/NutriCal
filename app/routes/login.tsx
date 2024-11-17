import { Link, Outlet, useLoaderData, Form } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "NutriCal" },
      { name: "NutriCal", content: "Welcome to NutriCal!" },
    ];
  };
export default function login(){
    return(
        <div style={container}>
            <div style={headerContainer}>
                <h1 style={header}>Login Page</h1>
            </div>
        </div>
    )
}

// Add Style here
const container = {
    height: "100vh",
    backgroundColor: "white",
}

const header = {
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