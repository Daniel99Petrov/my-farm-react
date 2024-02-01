import { FormEvent, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import {
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 10% auto;
  gap: 16px;
  cursor: pointer;
  padding: 12px 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 30px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 360px) {
    max-width: 100%;
    margin: 10% auto;
    padding: 12px;
  }
`;

export default function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(async (data) => {
        const response = await data.json();
        console.log(response);

        if (data.status === 201) {
          localStorage.setItem("token", response.access_token);
          navigate("/");
        } else {
          // Handle sign-in failure
          console.error("Sign-in failed. Unexpected status:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  return (
    <div>
      <FormContainer>
        <FormItems onSubmit={handleSignIn}>
          <h2>Sign In</h2>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />
          <GreenButton>Sign In</GreenButton>
        </FormItems>
      </FormContainer>
    </div>
  );
}
