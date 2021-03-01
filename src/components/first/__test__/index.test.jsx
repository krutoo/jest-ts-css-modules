import React from 'react';
import { mount } from 'enzyme';
import { First } from '..';

describe('<First />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(
      <First />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
