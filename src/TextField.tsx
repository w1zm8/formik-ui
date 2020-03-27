import React from 'react';

export type Props = {};

const TextField: React.FC<Props> = () => {
  return <input type="text" name="field" placeholder="TextField" />;
};

export default TextField;
