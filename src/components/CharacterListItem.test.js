import React from 'react';
import { shallow } from 'enzyme';
import CharacterListItem from './CharacterListItem';

describe('CharacterListItem component', () => {
  const props = {
    photoUrl: '',
    name: '',
    _id: '',
    handleCharacterClick: () => {}
  };
  
  it('renders CharacterListItem', () => {   
    const wrapper = shallow(<CharacterListItem {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
