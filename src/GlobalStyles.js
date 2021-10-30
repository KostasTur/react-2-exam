import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
 
}
${
	'' /* body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */
}
:root {
  --primary-color:  #F2877D;
}
`;
