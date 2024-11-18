import React from "react";
import { Link } from "@remix-run/react"



export const Header: React.FC = () =>{
    return(
        <div style={containerStyle}>
            <header style={headerStyle}>
                <div style={brandStyle}>
                    NutriCal
                </div>
                <div style={navStyle}>
                    <Link to= "/dashboard">
                        <button style={buttonStyle}>Dashboard</button>
                    </Link>
                </div>
            </header>
        </div>
    );
}
const containerStyle = {
    backgroundColor: "#FFFFFF",
    height: "15vh",
};

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E5E8EB",
}

const brandStyle = {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "black",
    display: "flex",
    justifyContent: "space-around",
}

const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
}

const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "white",
    color: "black",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "regular",
  };
  