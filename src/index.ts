import { join } from 'lodash';
import './statics/style.css';
import jockey_IconSvg from './statics/jockey_Icon.svg';
import print from './components/print';
import { cube } from './utils/math';

function component(): HTMLDivElement {
  const element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const mathElem = document.createElement('div');
  mathElem.innerText = cube(5).toString();
  element.appendChild(mathElem);

  const myIcon = new Image(200,200);
  myIcon.src = jockey_IconSvg;
  element.appendChild(myIcon);

  const btn = document.createElement('button');
  btn.onclick = print;
  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(btn);
  
  return element;
}
  
document.body.appendChild(component());
