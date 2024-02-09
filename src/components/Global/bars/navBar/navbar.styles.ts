import styled from "styled-components";

export const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    overflow: hidden;

    li {
      margin-right: 10px;

      a {
        text-decoration: none;
        color: #2ecc71; /* Green color related to agro/farms */
        font-weight: bold;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const AuthLinks = styled.div`
  margin-left: auto;
  overflow: hidden;

  a {
    color: #3498db; /* Blue color related to authentication links */
    text-decoration: none;
    margin-right: 10px;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;