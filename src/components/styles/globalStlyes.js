import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";

// export const GlobalStyles = createGlobalStyle`
//     *,
//     *::after,
//     *::before {
//         box-sizing: border-box;
//         margin: 0;
//     }
//     body {
//         background: ${({ theme }) => theme.bg2};
//         color: ${({ theme }) => theme.text};
//         font-family: 'Roboto', sans-serif;
//         letter-spacing: .6px;
//     }
// `;

export const ContentContainer = styled.div`
  padding-top: 3em;
`;

export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
