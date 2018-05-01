import * as React from 'react';
import './styles/Loading.scss';
import { LoadingProps } from './types/Loading.types';

export const Loading = (props: LoadingProps) => {
  let classes = 'loading';
  if (!props.show) {
    return null;
  }
  if (props.local) {
    classes += ' local';
  }

  return (
    <div className={classes}>
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
};

export default Loading;

