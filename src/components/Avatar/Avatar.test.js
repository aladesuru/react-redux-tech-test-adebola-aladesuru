import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './index';

const renderAVatarComponent = (arg, renderType) => {
  let defaultProps = {
    source: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    firstName:'Henry',
    lastName: 'Harrison',
    showName: arg,
  };
  const props = {...defaultProps, ...arg};
  return renderType === renderer ? renderer.create(<Avatar {...defaultProps} />) : shallow(<Avatar {...defaultProps} />);
};

describe('Avata componment', () => {
  it('should display firstname and lastname when showName props is true', () => {
    const wrapper = renderAVatarComponent(true, renderer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display firstname and lastname when showName props is true', () => {
    const wrapper = renderAVatarComponent(false, renderer);
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain one image', () => {
    const wrapper = renderAVatarComponent(false, shallow);
    expect(wrapper.find('img').length).toBe(1);
  });
  
  it('should contain one image and name of the user', () => {
    const wrapper = renderAVatarComponent(true, shallow);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('span').text()).toEqual('Henry Harrison');
  });
});
