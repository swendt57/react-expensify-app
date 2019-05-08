import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filtersFixture';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilterSpy}
            sortByDate={sortByDateSpy}
            sortByAmount={sortByAmountSpy}
            setStartDate={setStartDateSpy}
            setEndDate={setEndDateSpy}
        />
    );
});

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    }); //enzyme functionality
    expect(wrapper).toMatchSnapshot();
});

test('should handle text changes', () => {
    const value = 'rent';
    wrapper.find('input').at(0).simulate('change', {
        target: {value: value}
    });
    expect(setTextFilterSpy).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: {value: value}  //or just 'value'
    });
    expect(sortByDateSpy).toHaveBeenCalled();
});

test('should handle sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {

        target: {value: value}  //or just 'value'
    });
    expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
    expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

test('should handle focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

