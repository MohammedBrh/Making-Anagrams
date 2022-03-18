// Import stylesheets
import './style.css';

// Write TypeScript code!
makingAnagrams(
  'absdjkvuahdakejfnfauhdsaavasdlkj',
  'djfladfhiawasdkjvalskufhafablsdkashlahdfa'
);
function makingAnagrams(s1, s2) {
  const lenthS1 = s1.length;
  const lenthS2 = s2.length;
  const str1 = s1.split('');
  const str2 = s2.split('');
  console.log('----------------------------');
  for (let i = 0; i < lenthS1; i++) {
    const index = str2.indexOf(str1[i]);
    const index1 = str1.indexOf(str1[i]);
    if (index > -1) {
      str2.splice(index, 1);
      str1.splice(index1, 1);
      if (str1.indexOf(str1[i]) < 0) {
        continue; //tofo
      } else {
        i--;
      }
    }
  }
  console.log('Result :', str2.length + str1.length);
}

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript  Starter</h1>`;
