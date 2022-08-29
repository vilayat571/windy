import React from 'react'
import Form from '../atoms/Form'
import Result from '../atoms/Result'

function Sidebar() {
    return (
        <div className=' flex flex-col h-full items-center py-16'>
            <Form />
            <Result />
        </div>
    )
}

export default Sidebar
