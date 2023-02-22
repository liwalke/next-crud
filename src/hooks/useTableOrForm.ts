import { useState } from "react";

export default function useTableOrForm(){
    const [selectPage, setSelectPage] = useState<'table' | 'form'>('table')

    const showTable = () => setSelectPage('table')
    const showForm = () => setSelectPage('form')

    return {
        isShowingForm: selectPage === 'form',
        isShowingTable: selectPage === 'table',
        showTable,
        showForm
    }
}