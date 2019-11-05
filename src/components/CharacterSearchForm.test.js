import React from 'react';
import { shallow } from 'enzyme';
import CharacterSearchForm from './CharacterSearchForm';

describe('CharacterSearchForm component', () => {

  const props = {
    searchQuery: '',
    handleSubmit: () => {},
    handleChange: () => {}
  };
  it('renders CharacterSearchForm', () => {   
    const wrapper = shallow(<CharacterSearchForm {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
