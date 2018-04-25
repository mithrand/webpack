import {join} from 'lodash';

export default function printme(): void{
  alert(
    join(['Another', 'module', 'loaded!'], ' ')
  );
}