import { useCallback } from 'react';
import { TABLE_DATA } from '../common/data';



export function useTableOpration() {

    const searchedResult = useCallback(
        (searchedValue) => {
            const filteredRows = TABLE_DATA.filter((row) => {
                return (
                    `${row?.id}`
                        ?.toLowerCase()
                        .includes(searchedValue.toLowerCase()) ||
                    row?.username
                        ?.toLowerCase()
                        .includes(searchedValue.toLowerCase()) ||
                    row?.username
                        ?.toLowerCase()
                        .includes(searchedValue.toLowerCase()) ||
                    row?.first_name
                        ?.toLowerCase()
                        .includes(searchedValue.toLowerCase()) ||
                    row?.last_name
                        ?.toLowerCase()
                        .includes(searchedValue.toLowerCase()) ||
                    row?.dob
                        ?.toLowerCase()
                        .includes(searchedValue.toLowerCase()) ||
                    row?.country
                        ?.toLowerCase()
                        .includes(searchedValue.toLowerCase())
                );
            });
            return filteredRows
        }, []);

  
    return { searchedResult };
}

export default useTableOpration;
