import { create } from '@incodetech/welcome';
const apiURL = process.env.REACT_APP_INCODE_URL;
const apiKey = process.env.REACT_APP_INCODE_KEY;

console.log(apiURL, apiKey, '  asdasd ');
const incode = create({
  apiKey,
  apiURL,
  theme: {
    // main: "",
    // mainButton: {
    //   borderRadius: "",
    //   color: "",
    //   border: "",
    // },
  }
});
export default incode;
