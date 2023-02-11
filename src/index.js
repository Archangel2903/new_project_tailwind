// import './index.html';
import './style/style.scss';
import code from './images/image.jpg';
import {multy, plus} from "./modules/calc";

alert('Hello World!');

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
imgWrap.append(img);

let sum = plus(5,5);

console.log(multy(3,7));
console.log(sum);