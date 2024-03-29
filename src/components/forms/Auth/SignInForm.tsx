import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Global/Input/Input";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import { useAuth } from "../../../contexts/AuthContext";
import { isNotEmpty } from "../../../utils/validation";
import ErrorMessage from "../Global/ErrorMessage/ErrorMessage";

export default function SignInForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    username: false,
    password: false,
  });
  const usernameIsInvalid = didEdit.username && !isNotEmpty(formData.username);
  const passwordIsInvalid = didEdit.password && !isNotEmpty(formData.password);

  const handleInputChange = (identifier: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  function handleInputBlur(identifier: string) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.status === 201) {
        const data = await response.json();
        login(data.access_token, data.user);
        navigate("/farm", { replace: true });
      } else {
        const errorData = await response.json();
        console.error("Sign-in failed. Unexpected status:", errorData);
        setErrorMessage(errorData.error.message);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <FormContainer>
      <FormItems onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <Input
          label="Username"
          id="username"
          type="text"
          name="username"
          onBlur={() => handleInputBlur("username")}
          onChange={(event: { target: { value: string } }) =>
            handleInputChange("username", event.target.value)
          }
          value={formData.username}
          error={usernameIsInvalid && "Please enter a username!"}
          required
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event: { target: { value: string } }) =>
            handleInputChange("password", event.target.value)
          }
          value={formData.password}
          error={passwordIsInvalid && "Please enter a password!"}
          required
        />
        <GreenButton>Sign In</GreenButton>
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </FormItems>
    </FormContainer>
  );
}
