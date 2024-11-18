import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { Form, useActionData} from "@remix-run/react";
import { redirect, ActionFunctionArgs } from "@remix-run/node"; // Redirect user after successful login
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "app/util/firebase.js"
import { Header } from "../src/component/Header"

type ActionData = {
  error?: string;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  //Util Authetication Helper

  try {
    // Use the `auth` object from your util file
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("User signed up:", user);

    // Redirect to a dashboard or welcome page
    return redirect("/dashboard");
  } catch (error: any) {
    console.error("Sign-Up Error:", error);

    // Return a user-friendly error message
    const errorMessage = error.message || "An unknown error occurred";
    return { error: errorMessage };
  }
};

export default function signup(){
  const actionData = useActionData<ActionData>();

  return (
    <div>
      <Header></Header>
      <h1>Sign Up</h1>
      <Form method="post">
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter your email" required />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter a secure password"
            required
          />
        </label>
        <br />
        {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
        <button type="submit">Sign Up</button>
      </Form>
    </div>
  );
}