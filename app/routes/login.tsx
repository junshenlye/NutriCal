import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
      { title: "NutriCal" },
      { name: "NutriCal", content: "Welcome to NutriCal!" },
    ];
  };
export default function login(){
    return(
        <div>
            <p>loginpage</p>
        </div>
    )
}

// Add Style here

const pageStye = {
    backgroundColor: "white",
    
}