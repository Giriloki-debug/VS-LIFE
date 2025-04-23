// Install dependencies: npm install react-table

import React from "react";
import { useTable } from "react-table";

const data = [
  { policyYear: 1, singlePremium: 0, guaranteedAdditions: "1,08,000", survivalBenefit: 0, surrenderBenefit: "1,50,000", deathBenefit: "1,50,000", maturityBenefit: 0, reversionaryBonus4: "2,35,000", cashBonus4: "2,26,800", reversionaryBonus8: "4,25,000", cashBonus8: "4,26,800", totalMaturityBenefit4: "4,25,000", totalMaturityBenefit8: "6,75,000", totalDeathBenefit4: "1,91,200", totalDeathBenefit8: "2,11,100", totalSurrenderBenefit4: "2,68,800", totalSurrenderBenefit8: "4,26,800" },
  { policyYear: 2, singlePremium: 0, guaranteedAdditions: "1,08,000", survivalBenefit: 0, surrenderBenefit: "1,50,000", deathBenefit: "1,50,000", maturityBenefit: 0, reversionaryBonus4: "2,35,000", cashBonus4: "2,26,800", reversionaryBonus8: "4,25,000", cashBonus8: "4,26,800", totalMaturityBenefit4: "4,25,000", totalMaturityBenefit8: "6,75,000", totalDeathBenefit4: "1,91,200", totalDeathBenefit8: "2,11,100", totalSurrenderBenefit4: "2,68,800", totalSurrenderBenefit8: "4,26,800" },
  { policyYear: 3, singlePremium: 0, guaranteedAdditions: "1,08,000", survivalBenefit: 0, surrenderBenefit: "1,50,000", deathBenefit: "1,50,000", maturityBenefit: 0, reversionaryBonus4: "2,35,000", cashBonus4: "2,26,800", reversionaryBonus8: "4,25,000", cashBonus8: "4,26,800", totalMaturityBenefit4: "4,25,000", totalMaturityBenefit8: "6,75,000", totalDeathBenefit4: "1,91,200", totalDeathBenefit8: "2,11,100", totalSurrenderBenefit4: "2,68,800", totalSurrenderBenefit8: "4,26,800" },
  // Add additional rows here following the same pattern as above.
  { policyYear: 34, singlePremium: "1,50,000", guaranteedAdditions: "1,08,000", survivalBenefit: "1,50,000", surrenderBenefit: "1,50,000", deathBenefit: "1,50,000", maturityBenefit: 0, reversionaryBonus4: "2,35,000", cashBonus4: "2,26,800", reversionaryBonus8: "4,25,000", cashBonus8: "4,26,800", totalMaturityBenefit4: "2,90,40,000", totalMaturityBenefit8: "6,38,10,000", totalDeathBenefit4: "2,67,40,000", totalDeathBenefit8: "6,38,10,000", totalSurrenderBenefit4: "2,90,40,000", totalSurrenderBenefit8: "6,38,10,000" }
];

const columns = [
  {
    Header: "Policy Year",
    accessor: "policyYear",
  },
  {
    Header: "Single/Annualised Premium",
    accessor: "singlePremium",
  },
  {
    Header: "Guaranteed Additions",
    accessor: "guaranteedAdditions",
  },
  {
    Header: "Survival Benefit",
    accessor: "survivalBenefit",
  },
  {
    Header: "Surrender Benefit",
    accessor: "surrenderBenefit",
  },
  {
    Header: "Death Benefit",
    accessor: "deathBenefit",
  },
  {
    Header: "Maturity Benefit",
    accessor: "maturityBenefit",
  },
  {
    Header: "Reversionary Bonus @4% p.a.",
    accessor: "reversionaryBonus4",
  },
  {
    Header: "Cash Bonus @4% p.a.",
    accessor: "cashBonus4",
  },
  {
    Header: "Reversionary Bonus @8% p.a.",
    accessor: "reversionaryBonus8",
  },
  {
    Header: "Cash Bonus @8% p.a.",
    accessor: "cashBonus8",
  },
  {
    Header: "Total Maturity Benefit @4%",
    accessor: "totalMaturityBenefit4",
  },
  {
    Header: "Total Maturity Benefit @8%",
    accessor: "totalMaturityBenefit8",
  },
  {
    Header: "Total Death Benefit @4%",
    accessor: "totalDeathBenefit4",
  },
  {
    Header: "Total Death Benefit @8%",
    accessor: "totalDeathBenefit8",
  },
  {
    Header: "Total Surrender Benefit @4%",
    accessor: "totalSurrenderBenefit4",
  },
  {
    Header: "Total Surrender Benefit @8%",
    accessor: "totalSurrenderBenefit8",
  },
];

function InsuranceTable() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="container mx-auto">
      <div style={{ overflowX: "auto" }}>
        <table {...getTableProps()} style={{ border: "solid 1px black", width: "100%" }}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, colIndex) => (
                  <th
                    {...column.getHeaderProps()}
                    key={colIndex} // Added key prop
                    style={{
                      borderBottom: "solid 3px red",
                      borderRight: "solid 1px black", // Added border to the right
                      background: "aliceblue",
                      color: "black",
                      fontWeight: "bold",
                      padding:"10px"
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      {...cell.getCellProps()}
                      key={cellIndex} // Added key prop
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                        textAlign:"right"
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InsuranceTable;
