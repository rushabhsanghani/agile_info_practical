import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TABLE_DATA } from "../common/data";
import { COLUMN_NAME } from "../common/headers";
import Pagination from "../components/pagination";
import RowDispalySelector from "../components/RowDispalySelector";
import useTableOpration from "../hooks/useTableOpration";

export function Table() {

    const { searchedResult } = useTableOpration();
    const [tableData, setTableData] = useState(TABLE_DATA)
    const [numbersOfRow, setNumbersOfRow] = useState({ value: 5, lable: 5 })
    const [currnetPage, setCurrentPage] = useState(1);


    const onChangeNumberOfRows = useCallback((rows) => {
        const filteredData = TABLE_DATA.filter((row, index) => {
            return (parseInt(rows.value) >= row.id)
        })
        setNumbersOfRow(rows)
        setTableData(filteredData)
    }, [])



    useEffect(() => {
        onChangeNumberOfRows({ value: 5, lable: 5 })
    }, [])

    const totalNumberOfPages = useMemo(() => tableData && parseInt((tableData.length / numbersOfRow)), [tableData, numbersOfRow])

    const updateThePage = useCallback((currnet) => {
//         setCurrentPage(currnet)
// ``
//         const currnetPageData = TABLE_DATA.filter((row,index) => {()}, [])

    }, [setCurrentPage])

    return (
        <div className="container">
            <div className="d-flex p-2">


                <RowDispalySelector
                    numbersOfRow={numbersOfRow}
                    setNumbersOfRow={setNumbersOfRow}
                    onChangeNumberOfRows={onChangeNumberOfRows}
                />
                <div className="p-1"> search Rows:</div>
                <input type="text" className="search ml-2" aria-label="search" placeholder="Search" onChange={(event) => setTableData(searchedResult(event.target.value))} />
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            {COLUMN_NAME.map((name, i) => {
                                return (<th scope="col" key={i}>{name}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, i) => {
                            return (<tr key={i}>
                                <th scope="row">{data.id}</th>
                                <td>{data.username}</td>
                                <td>{data.first_name}</td>
                                <td>{data.last_name}</td>
                                <td>{data.email}</td>
                                <td>{data.gender}</td>
                                <td>{data.dob}</td>
                                <td>{data.country}</td>
                            </tr>)
                        }
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination
                total={totalNumberOfPages}
                current={currnetPage}
                setCurrnetPage={updateThePage}
            />
        </div>
    );
}

export default Table;
