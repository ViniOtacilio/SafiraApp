// import { render } from '@testing-library/react-native';
// import React from 'react';
// import Login from '../index';
// import 'react-native';

// describe('Login screen', () => {

//     it('should go to home page on login', () => {
//         const page = render(<Login />);

//         const loginButton = page.getByTestId('loginButton');
//     })

// })
import 'react-native';
import { render } from '@testing-library/react-native';
import React from 'react';
import Login from '../index';


describe('Login screen', () => {
  it('Render login component', () => {
    const page = render(<Login />).toJSON();
    expect(page).toBe(true);
  });
});
