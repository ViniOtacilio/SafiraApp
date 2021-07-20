import 'react-native';
import { render } from '@testing-library/react-native';
import React from 'react';
import Page from './index'

describe("Page screen", () => {
  it("verify if title is 'criar conta'", () => {
    const page = render(<Page />);
    const h1Title = page.getByTestId('title'); 
    expect(h1Title.children[0]).toBe('Criar Conta')
  })
})