import React from 'react';

import moment from 'moment';
import {SingleDatePicker} from 'react-dates';



const now = moment(); //instead of using Date()
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note:  props.expense ? props.expense.note : '',
            amount:  props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    };
    onDescriptionChange = (e) => {
        //Usual way of processing
        const description = e.target.value;
        this.setState(() => ({description: description}))
    };
    onNoteChange = (e) => {
        //Alternate method (without the persist, this would not work
        e.persist();
        this.setState(() => ({note: e.target.value}))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        //FIXME this regex is letting something like 22.55555 thru, why?
        if (! amount || amount.match(/\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    };
    onCalendarFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        if ( ! this.state.description || ! this.state.amount) {
            this.setState(() => ({error: 'Please provide description and amount'})) //set error state equal to 'Please provide description and amount'
        } else {
            //Clear the error
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100, //removes decimal point
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false} //allows for ANY day
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />

                    <button>Add/Update Expense</button>
                </form>
            </div>
        )
    }
}