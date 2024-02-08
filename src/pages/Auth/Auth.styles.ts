import styled from "styled-components";

interface PhotoContainerProps {
    imageUrl: string;
  }
  
// export const PageWrapper = styled.div`
//     display: flex;
//     height: 100vh; /* Adjust the height as needed */
//   `;
  
// export const FormContainer = styled.div`
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   `;
  
// export const PhotoContainer = styled.div<PhotoContainerProps>`
//     width: 50%; /* Take up the right 50% of the page */
//     background-image: url(${props => props.imageUrl});
//     background-size: cover;
//     background-position: center;
//   `;
// export const BackgroundImage = styled.div<PhotoContainerProps>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   background-image: url(${props => props.imageUrl});
//   background-size: cover;
//   background-position: center;
//   filter: blur(4px) brightness(0.7); /* Adjust blur and brightness as needed */
// `;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Adjust the height as needed */
`;

export const AuthFormContainer = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
`;