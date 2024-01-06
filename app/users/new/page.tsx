'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUsersPage = () => {
    const router = useRouter()
    return (
        <main>
            <div>NewUsersPage</div>
            <button className='btn btn-primary'
                onClick={() =>router.push('/users')}>Create</button>
            <Link href='/users'>home</Link>
        </main>
    )
}

export default NewUsersPage