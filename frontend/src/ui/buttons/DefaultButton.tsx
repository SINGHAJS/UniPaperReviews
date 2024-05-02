import React from 'react';
import { TButton } from '../../types/ButtonTypes';

export default function DefaultButton({
  children,
  className,
  backgroundColor,
  textColor,
}: TButton) {
  return (
    <button
      className={`bg-${
        backgroundColor == '' ? 'white' : backgroundColor
      } text-${
        textColor == '' ? 'black' : textColor
      } rounded-md p-2 font-bold ${className} cursor-pointer`}
    >
      {children}
    </button>
  );
}
