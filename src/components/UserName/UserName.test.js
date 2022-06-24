import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import UserName from './index';

const renderUserNameComponent = (renderType) => {
  const requiredProps = {
    firstName: 'Henry',
    lastName: 'Harrison',
    userId: 'e837c9f5-247f-445f-bcc3-7d434348336b',
  };

  return renderType === renderer
    ? renderer.create(<UserName {...requiredProps} />)
    : shallow(<UserName {...requiredProps} />);
};

describe('UserName component', () => {
  it('should render user name as a link', () => {
    const wrapper = renderUserNameComponent(shallow);
    expect(wrapper.find('Link').length).toBe(1);
    expect(wrapper.find('Link').text()).toBe('Henry Harrison');
  });

  it('should render user name as a link', () => {
    const wrapper = renderUserNameComponent(shallow);
    expect(wrapper).toMatchSnapshot();
  });
});
