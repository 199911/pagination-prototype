import React, { useState } from 'react';
import Page from './Page'

// Mock data
const pageOne = [
    { name: 'Sunday', like: 199, createdAt: +new Date()},
    { name: 'Monday', like: 911, createdAt: +new Date()},
    { name: 'Tuesday', like: 666, createdAt: +new Date()},
]

const pageTwo = [
    { name: 'Wednesday', like: 123, createdAt: +new Date()},
    { name: 'Thursday', like: 456, createdAt: +new Date()},
    { name: 'Friday', like: 987, createdAt: +new Date()},
]

const requestPageApi = (token) => {
    if (token === 0) {
        return pageOne;
    }
    return pageTwo;
};

const PageContainer = () => {
    const [pageData, setPageData] = useState({0: pageOne});
    const [pageOrder, setPageOrder] = useState([0]);

    const getPageHoc = (token)=> () => {
        const newPage = requestPageApi(token)
        setPageData({...pageData, [token]: newPage })
        console.log(pageOrder.findIndex(target => token === target))
        if (pageOrder.findIndex(target => token === target) === -1) {
            pageOrder.push(token)
            setPageOrder([...pageOrder])
        }
    }
    return (
        <div>
            {
                pageOrder.map(
                    (token, index) =>
                        <Page
                            key={index}
                            items={pageData[token]}
                            reload={getPageHoc(index)}
                            getNextPage={getPageHoc(index+1)}
                        />
                )
            }
        </div>
    )
}

export default PageContainer