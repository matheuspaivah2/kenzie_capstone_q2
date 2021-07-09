/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
import "./font.css";
import "../assets/fonts/postnobillscolombo-extrabold.ttf";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



:root {
	--color-red: #C91111;
	--color-black: #10172B;
	--color-green: #4AD85D;

	--ligth-green: #71FF80;
	--ligth-gray: #F1F1F1;
	--ligth-purple: #8F5AFF;
	
	--dark-purple: #200C58;	
	
	--btnColor-primary: #EEFFFF;
	--btnColor-secondary: #FFFFFF;	

	--title-font: 'Bill', sans-serif
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
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
`;
