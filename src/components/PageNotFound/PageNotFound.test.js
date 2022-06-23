import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PageNotFound from './index';
import { BrowserRouter } from 'react-router-dom';

const MockPageNotFound = () => {
  return (
    <BrowserRouter>
      <PageNotFound />
    </BrowserRouter>
  );
};

describe('PageNotFound', () => {
  it('should display Sorry page not found !', () => {
    const wrapper = renderer.create(<MockPageNotFound />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should have a link to go back to home', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper.find('Link').length).toBe(1);
  });
});
