import React from 'react';
import {shallow} from 'enzyme';

import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expensesFixture';

test('should render an ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})