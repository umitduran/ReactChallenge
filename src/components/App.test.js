/*
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
const {Builder,By,Key, util}= require('selenium-webdriver');
async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://google.com');
  await driver.findElement(By.name('q')).sendKeys('Selenium',Key.RETURN);
}
example();