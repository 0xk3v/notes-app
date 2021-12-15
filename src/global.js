import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*, 
	*::before, 
	*::after{
		box-sizing: border-box;
		padding: 0px;
		margin: 0px;
	}
body{
	background-color: ${({ theme }) => theme.body};
	font-family: 'Reenie Beanie', cursive;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
}
`;

export default GlobalStyles;
