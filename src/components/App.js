import React, { useState } from "react";

const App = () => {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const getTotalDaysInMonth = () => {
    const tD = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      tD.push(<td key={`empty-${i}`} className="empty"></td>);
    }

    // Add cells for each day of the month
    for (let i = 1; i <= totalDays; i++) {
      tD.push(<td key={`day-${i}`} className="non-empty">{i}</td>);
    }

    // Add rows with 7 days each
    const rows = [];
    for (let i = 0; i < tD.length; i += 7) {
      rows.push(<tr key={`row-${i}`}>{tD.slice(i, i + 7)}</tr>);
    }

    return rows;
  };

  const changeMonth = (offset) => {
    setDate(new Date(year, month + offset, 1));
  };


  function clickhandler(e){
    console.log(e.target.value);  
    const newMonth = parseInt(e.target.value);
    setDate(new Date(year, newMonth, 1));
  }

  return (
    <>

    <select value={date.getMonth()} onChange={clickhandler}>{months.map((month, index)=>{
    return <option key={index} value={index}>{month}</option>
    })}</select>

      <div>Render days</div>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {getTotalDaysInMonth()}
        </tbody>
      </table>
      <button onClick={() => changeMonth(-1)}>Previous Month</button>
      <button onClick={() => changeMonth(1)}>Next Month</button>
    </>
  );
};

export default App;
