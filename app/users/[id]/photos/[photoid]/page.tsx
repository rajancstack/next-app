import React from 'react'
interface Props {
    params: {
        id: number;
        photoid: number;
    }
}
const Photos = ({ params: { id, photoid } }: Props) => {
    return (
        <div>Photos {id} {photoid}</div>
    )
}

export default Photos