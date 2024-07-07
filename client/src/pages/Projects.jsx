import React from 'react'
import Card from '../components/Card'
export default function Projects() {
    return (
        <>
            <div className='flex justify-center w-full mt-32'>
            <div className='grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-2'>

                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>
        </div>
        </>
    )
}
