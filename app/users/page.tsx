import Link from 'next/link'
import React, { Suspense } from 'react'

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Link href="/users/new">Create User</Link>
      </Suspense>
    </div>
  )
}

export default Users