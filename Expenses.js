import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    
      const titles = [props.item[0].title, props.item[1].title, props.item[2].title, props.item[3].title];
      const amount = [props.item[0].amount, props.item[1].amount, props.item[2].amount, props.item[3].amount];
      const date = [props.item[0].date, props.item[1].date, props.item[2].date, props.item[3].date];
    
      const [ filteredYear, setFilteredYear ] = useState('2020')

      const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
      }

    return(
        <div>
        <Card className="expenses">
          <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
        {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      /><ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}

        <ExpenseItem
        title={titles[0]}
        amount={amount[0]}
        date={date[0]}
      />
      <ExpenseItem
        title={titles[1]}
        amount={amount[1]}
        date={date[1]}
      /><ExpenseItem
        title={titles[2]}
        amount={amount[2]}
        date={date[2]}
      />
      <ExpenseItem
        title={titles[3]}
        amount={amount[3]}
        date={date[3]}
      />
      
      </Card>
      </div>
    )
}

export default Expenses;