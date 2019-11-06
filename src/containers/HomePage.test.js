import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';



describe('HomePage container', () => {

  it('renders HomePage component', () => {

    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<HomePage history={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('handleRandomGet changes state.photoUrl and state.name', () => {
 
  });

  it('handleChange changes state of target', () => {
    
  });
});
