import React from 'react';
import { shallow } from 'enzyme';
import DetailView from './DetailView';

describe('DetailView component', () => {
  const props = {
    photoUrl: '',
    name: '',
    affiliation: '',
    enemies: [],
    allies: []
  };

  it('renders DetailView', () => {   
    const wrapper = shallow(<DetailView {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
