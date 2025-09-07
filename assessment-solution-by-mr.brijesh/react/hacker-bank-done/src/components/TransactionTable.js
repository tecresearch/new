import React, { use, useState } from "react";

function TransactionTable({ txns }) {

  console.log(txns);
  const [inputDate,setInputDate]=useState("2019-11-29");
  const [filterDate,setFilterDate]=useState("");
  const [sortAscending,setSortAscending]=useState(null);

  
  const applyFilter=()=>{
      setFilterDate(inputDate);
      console.log(inputDate);
  }

  const toggleSort=()=>{
    setSortAscending((prev)=>(prev===null)?true :!prev);
  }

  const getDisplayedTxns=()=>{
    let displayed =[...txns];

    if(filterDate){
      displayed=displayed.filter((txn)=>{
        return txn.date === filterDate;
      });
    }

    if(sortAscending!==null){
        displayed.sort((a,b)=>{
         return  sortAscending ? Number(a.amount)-Number(b.amount):Number(b.amount)-Number(a.amount);
        });
    }
    return displayed;
  }

  const filteredData=getDisplayedTxns();

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input
          id="date"
          type="date"
          defaultValue="2019-11-29"
          onChange={(e)=>setInputDate(e.target.value)}
          role="search"
        />
        <button className="small" onClick={applyFilter}>Filter</button>
      </section>

      <div className="card mt-50">
        <table className="table">
          <thead>
            <tr className="table">
              <th className="table-header">Date</th>
              <th className="table-header">Description</th>
              <th className="table-header">Type</th>
              <th className="table-header">
                <span id="amount" onClick={toggleSort} role="button">
                  Amount ($)
                </span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>
           {
            filteredData.map((t,index)=>(
             <tr key={index}>
              <td>{t.date}</td>
              <td>{t.description}</td>
              <td>{t.type===1?'Debit':'Credit'}</td>
              <td>{t.amount}</td>
              <td>{t.balance}</td>
            </tr>
            ))
           }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
