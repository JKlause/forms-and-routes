import React from 'react';
import { shallow } from 'enzyme';
import RandomImage from './RandomImage';

describe('RandomImage component', () => {
  const props = {
    photoUrl: '',
    name: '',
    handleRandomGet: () => {}
  };

  it('renders RandomImage', () => {   
    const wrapper = shallow(<RandomImage {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
