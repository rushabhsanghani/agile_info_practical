import React from "react";
import { ROW_SELECTION_OPTIONS } from "../common/headers";
import Select from 'react-select'


export function RowDispalySelector({ numbersOfRow, onChangeNumberOfRows }) {

    return (
        <div className="d-flex justify-content-center align-items-lg-center px-5 ">
            <div className="p-1"> Select Rows:</div>
            <Select
                defaultValue={{value:5,lable:5}}
            value={numbersOfRow}
            options={ROW_SELECTION_OPTIONS.map((item) => ({
                label: item,
                value: item,
                key: item,
            }))}
            onChange={(item) => onChangeNumberOfRows(item)}
            />
        </div >
    );
}

export default RowDispalySelector;
