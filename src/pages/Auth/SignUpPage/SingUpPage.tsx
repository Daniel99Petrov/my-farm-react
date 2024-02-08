import RegistrationForm from "../../../components/forms/Global/RegistrationForm";
import { AuthFormContainer, PageWrapper } from "../Auth.styles";
import signupImg from "../../../assets/signup.jpg";
import { BackgroundImage } from "../../../components/Global/backgroundImageContainer/BackgroundImageContainer";

export default function SignUpPage() {
  return (
    <PageWrapper>
      <BackgroundImage imageUrl={signupImg} />
      <AuthFormContainer>
        <RegistrationForm />
      </AuthFormContainer>
    </PageWrapper>
  );
}
