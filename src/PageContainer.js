import React, { useState } from 'react';
import Page from './Page'

const requestPageApi = async (token) => {
    const endpoint = token ?
        `http://localhost:4000/items?token=${token}` :
        'http://localhost:4000/items';
    const response = await fetch(endpoint).then(res => res.json());
    return response;
};

const PageContainer = () => {
    const [pageData, setPageData] = useState({});
    const [pageOrder, setPageOrder] = useState([]);

    const getPageHoc = (token) => async () => {
        const newPage = await requestPageApi(token)
        const currentPageToken = newPage.pagination.currentPage;
        setPageData({...pageData, [currentPageToken]: newPage })
        if (pageOrder.findIndex(target => currentPageToken === target) === -1) {
            pageOrder.push(currentPageToken)
            setPageOrder([...pageOrder])
        }
    }
    if (pageOrder.length === 0) {
        getPageHoc()();
    }
    return (
        <div className='PageContainer'>
            {
                pageOrder.map(
                    (token, index) => {
                        const {
                            data,
                            pagination: {
                                currentPage, nextPage
                            }
                        } = pageData[token];
                        return (<Page
                            key={index}
                            items={data}
                            reload={getPageHoc(currentPage)}
                            getNextPage={getPageHoc(nextPage)}
                        />)
                    }
                )
            }
        </div>
    )
}

export default PageContainer