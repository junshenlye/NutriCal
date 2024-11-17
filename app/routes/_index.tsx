import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import brandLogo from "../src/logos/nutrical_logo.jpg"


export const meta: MetaFunction = () => {
  return [
    { title: "NutriCal" },
    { name: "NutriCal", content: "Welcome to NutriCal!" },
  ];
};

export default function Index() {
  return(
    <div style={divStyle}>
    <header style={headerStyle}>
      <div style={brandStyle}>
        <img
          src={brandLogo}
          alt="NutriCal Logo"
          style={imgStyle}
        />
        NutriCal</div>
      <Link to="/login">
        <button style={buttonStyle}>Login</button>
      </Link>
    </header>
    <div style={bodyStyle}>
      <p style={pStyle}>NurtiCal, Dietitan Tools made to streamlined ur work process</p>
    </div>
  </div>
  )
}

// Inline styles for simplicity
const pStyle = {
  color: "black",
  fontWeight: "bold",
  fontSize: "1.5rem",
}

const bodyStyle = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  height: "90vh"
}

const imgStyle = {
    height: "40px",
    marginRight: "10px",
}

const divStyle = {
  backgroundColor: "#FFFFFF",
};

const headerStyle = {
  display: "flex",
  height: "10vh",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  backgroundColor: "#FFFFFF",
};

const brandStyle = {
  fontSize: "1.4rem",
  fontWeight: "bold",
  color: "black",
  display: "flex",
  justifyContent: "space-around",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  color: "black",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.3s",
  fontWeight: "bold",
};
