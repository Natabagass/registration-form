import Service from '../service';
import React, {useState, useEffect} from 'react'
import Pagination from '@mui/material/Pagination';

const pageSize = 1


export default function AppPagination({setTest}) {
    const [page, setPage] = useState({
        count: 0,
        from: 0,
        to: pageSize
    })
    const handleChange = (e, p) => {
        const from = (p - 1) * pageSize;
        const to = (p - 1) * pageSize + pageSize;

        setPage({ ...page, from: from, to: to })
    }

    useEffect(() => {
        Service.getData({ from: page.from, to: page.to }).then((response) => {
            setPage({ ...page, count: response.count })

            console.log(response)
            
            setTest(response.data)
        })
    }, [page.from, page.to])

    return (
        <div>
            <Pagination
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop:50
                }}
                variant='outlined'
                color='primary'
                count={Math.ceil(page.count / pageSize)}
                onChange={handleChange}
            />
        </div>
    )
}
