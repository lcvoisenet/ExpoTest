import React from 'react';
import { Button } from 'react-native';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('renders View', () => {
    const component = renderer.create(<App />);
    const instance = component.root;

    expect(instance.findByType(Button)).toBeTruthy();
  });

  describe('within View', () => {
    it('renders Button with text "Show alert"', () => {});
    const component = renderer.create(<App />);
    const instance = component.root;

    expect(instance.findByType(Button).props.title).toBe('Show alert');
  });
});
