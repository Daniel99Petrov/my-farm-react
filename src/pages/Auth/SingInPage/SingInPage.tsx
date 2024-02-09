import signinImg from "../../../assets/signin.jpg";
import SignInForm from "../../../components/forms/Auth/SignInForm";
import { AuthFormContainer, PageWrapper } from "../Auth.styles";
import { BackgroundImage } from "../../../components/Global/backgroundImageContainer/BackgroundImageContainer";

export default function SignInPage() {
  return (
    <PageWrapper>
      <BackgroundImage imageUrl={signinImg} />
      <AuthFormContainer>
        <SignInForm />
      </AuthFormContainer>
    </PageWrapper>
  );
}
