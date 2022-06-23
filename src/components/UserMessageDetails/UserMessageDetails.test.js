import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import UserMessageDetails from './index';

const renderUserMessageDetailsComponent = (showAvatar, showEmailAndName, renderType) => {
  let requiredProps = {
    avatar: 'http://dummyimage.com/100x100.bmp/cc0000/ffffff',
    firstName: 'Henry',
    lastName: 'Harrison',
    message: 'In hac habitasse platea dictumst. Morbi vestibulum',
    email: 'kharveyn@google.nl',
    userId: 'e837c9f5-247f-445f-bcc3-7d434348336b',
    date: '23 June 2016 3:1',
    showAvatar,
    showEmailAndName,
  };

  return renderType === renderer
    ? renderer.create(<UserMessageDetails {...requiredProps} />)
    : shallow(<UserMessageDetails {...requiredProps} />);
};

describe('UserMessageDetails Component', () => {
  it('should not display user email on initial render', () => {
    const wrapper = renderUserMessageDetailsComponent(true, true, shallow);
    expect(wrapper.find('user_email').length).toBe(0);
  });

  it('should  not display avatar, user name and email. when showAvatar, showEmailAndName props is set to false ', () => {
    const wrapper = renderUserMessageDetailsComponent(false, false, shallow);
    expect(wrapper.find('Avatar').length).toBe(0);
    expect(wrapper.find('.userName_email').length).toBe(0);
  });

  it('should display avatar, user name and email. when showAvatar, showEmailAndName props is set to true ', () => {
    const wrapper = renderUserMessageDetailsComponent(true, true, shallow);
    expect(wrapper.find('Avatar').length).toBe(1);
    expect(wrapper.find('.userName_email').length).toBe(1);
  });

  it('should render user message', () => {
    const wrapper = renderUserMessageDetailsComponent(true, true, shallow);
    expect(wrapper.find('.message').text()).toBe('In hac habitasse platea dictumst. Morbi vestibulum');
  });

  it('should render message publish date', () => {
    const wrapper = renderUserMessageDetailsComponent(true, true, shallow);
    expect(wrapper.find('.publish-date').text()).toEqual('23 June 2016 3:1');
  });

  it('should  not display avatar, user name and email. when showAvatar, showEmailAndName props is set to false ', () => {
    const wrapper = renderUserMessageDetailsComponent(false, false, shallow);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display avatar, user name and email. when showAvatar, showEmailAndName props is set to true ', () => {
    const wrapper = renderUserMessageDetailsComponent(true, true, shallow);
    expect(wrapper).toMatchSnapshot();
  });
});
