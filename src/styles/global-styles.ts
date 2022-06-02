import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,600');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    
  }

  p,
  label {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }


/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.app{
    display: flex;
}

.tab-nav{
 margin-top:70px;
 margin-bottom:60px;   
}
.tab-nav a{    
    color:#A2A2A2;
    font-size:20px;
    font-weight: 500;
    padding:20px;
    text-decoration: none;
}
.tab_active{
    color:#365262!important;
    text-decoration: underline!important;
}

h1{
    color:#365262;
    font-size:30px;
    font-weight: 500;
}
h2{
    color:#365262;
    font-size:20px;
    font-weight: 500;
}
 `;
