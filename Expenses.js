import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = (props) => {
    
      const titles = [props.expensesAtr[0].title, props.expensesAtr[1].title, props.expensesAtr[2].title, props.expensesAtr[3].title];
      const amount = [props.expensesAtr[0].amount, props.expensesAtr[1].amount, props.expensesAtr[2].amount, props.expensesAtr[3].amount];
      const date = [props.expensesAtr[0].date, props.expensesAtr[1].date, props.expensesAtr[2].date, props.expensesAtr[3].date];
    
    return(
        <div className="expenses">
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
      </div>
    )
}

export default Expenses;