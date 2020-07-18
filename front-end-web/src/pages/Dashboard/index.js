import React from 'react';
import api from '~/services/api';
// import { } from './styles';

export default function Dashboard() {
  api.get('appointments');
  return (
    <>
      <h1>Hello Dashboard World!</h1>
    </>
  );
}
