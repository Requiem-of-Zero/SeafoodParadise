import React from 'react';
import ReactDOM from 'react-dom';
import * as SESSIONUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  window.login = SESSIONUtil.login
  window.signup = SESSIONUtil.signup
  window.logout = SESSIONUtil.logout
  const root = document.getElementById('main');
  ReactDOM.render(<h1>Hello World</h1>, root)
})