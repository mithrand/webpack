import {join} from 'lodash';

export default function printme( ev: MouseEvent): any{
  alert(
    join(['Another', 'module', 'loaded!'], ' ')
  );
}