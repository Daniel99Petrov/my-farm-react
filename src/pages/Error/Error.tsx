import { ErrorContainer, ErrorDescription, ErrorMessage } from "./Error.styles";



const Error = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>ERROR: PAGE NOT FOUND</ErrorMessage>
      <ErrorDescription>
        The page you are looking for does not exist.
      </ErrorDescription>
    </ErrorContainer>
  );
};

export default Error;
