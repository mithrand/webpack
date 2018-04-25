import {join} from 'lodash';
import './statics/style.css';
import icon from './statics/jockey_Icon.svg';
import print from './components/print';
import {cube} from './utils/math';

function component(): HTMLDivElement {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var mathElem = document.createElement('div');
    mathElem.innerText = cube(5).toString();
    element.appendChild(mathElem);

    var myIcon = new Image(200,200);
    myIcon.src = icon;
    element.appendChild(myIcon);

    var btn = document.createElement('button');
    btn.onclick = print;
    btn.innerHTML = 'Click me and check the console!';
    element.appendChild(btn);
    
    return element;
  }
  
  document.body.appendChild(component());