import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Nazwa programu: MultiFib
      <br></br>
      Imię i nazwisko autora: Sylwester Kot
      <br></br>
      Nr grupy dziekańskiej: 2.1/2
      <br></br>
      <Link to="/">Go back home</Link>
    </div>
  );
};
