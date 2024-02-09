import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isEmail, isNotEmpty } from "../../../utils/validation";
import {
  FormContainer,
  FormItems,
  GreenButton,
} from "../../../ui_elements/CommonStyledElements";
import Input from "../Global/Input/Input";
import { BASE_URL } from "../../../static/constants/constants";
import { apiEndpoints } from "../../../static/routes/apiEndpoints";
export default function RegistrationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    username: false,
    password: false,
  });
  const emailIsInvalid = didEdit.email && !isEmail(formData.email);
  const usernameIsInvalid = didEdit.username && !isNotEmpty(formData.username);
  const passwordIsInvalid = false;

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

  const handleRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}${apiEndpoints.signUp}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        navigate("/signin");
      } else {
        const errorData = await response.json();
        console.error("Registration failed. Unexpected status:", errorData);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <FormContainer>
      <FormItems onSubmit={handleRegistration}>
        <h2>Sign Up</h2>
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event: { target: { value: string } }) =>
            handleInputChange("email", event.target.value)
          }
          value={formData.email}
          error={emailIsInvalid && "Email should contain @"}
          required
        />
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
          error={passwordIsInvalid && "Please enter a valid password!"}
          required
        />
        <GreenButton>Sign Up</GreenButton>
      </FormItems>
    </FormContainer>
  );
}
