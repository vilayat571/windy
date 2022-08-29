import React from 'react'
import Middle from '../atoms/Middle'
import Navbar from '../components/Navbar'
import Layout from '../layout/Layout'

function Weather() {
    return (
        <Layout>
            <div className=' sm:h-auto flex justify-between flex-col py-14 px-10 lg:h-screen'>
                <Navbar />
                <Middle />
            </div>
        </Layout>
    )
}

export default Weather
