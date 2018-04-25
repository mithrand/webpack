import {join} from 'lodash';
import './statics/style.css';
import icon from './statics/jockey_Icon.svg';
import printMe from './components/print';

function component() {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    var btn = document.createElement('button');
    btn.onclick = printMe;
    btn.innerHTML = 'Click me and check the console!';
    element.appendChild(btn);
    
    return element;
  }
  
  document.body.appendChild(component());