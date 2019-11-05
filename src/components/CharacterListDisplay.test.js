import React from 'react';
import { shallow } from 'enzyme';
import CharacterListDisplay from './CharacterListDisplay';

describe('CharacterListDisplay component', () => {
  const props = {
    characters: [],
    handleCharacterClick: () => {}
  };
  it('renders CharacterListDisplay', () => {   
    const wrapper = shallow(<CharacterListDisplay {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
