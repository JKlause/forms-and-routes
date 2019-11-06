import React from 'react';
import { shallow } from 'enzyme';
import ListPage from './ListPage';



describe('ListPage container', () => {

  it('renders ListPage component', () => {

    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => Promise.resolve());
    const wrapper = shallow(<ListPage match={{ params: { id: '123' } }} history={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
