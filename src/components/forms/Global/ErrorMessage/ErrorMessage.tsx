import { ErrorMessageProps } from "./ErrorMessage.static";
import { ErrorMessageContainer } from "./ErrorMessage.styles";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return (
      <ErrorMessageContainer>
        {message}
      </ErrorMessageContainer>
    );
  };
  
  export default ErrorMessage;