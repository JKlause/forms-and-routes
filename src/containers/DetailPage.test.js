import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from './DetailPage';



describe('DetailPage container', () => {

  it('renders DetailPage component', () => {

    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => Promise.resolve({
      photoUrl: '',
      name: '',
      affiliation: '',
      enemies: [],
      allies: []
    }));
    const detailPage = shallow(<DetailPage match={{ params: { id: '123' } }} history={{}}/>);
    expect(detailPage).toMatchSnapshot();
  });
});
