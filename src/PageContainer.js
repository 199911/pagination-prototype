import React, { useState } from 'react';
import Page from './Page'

const PageContainer = (props) => {
    const {domain, title} = props
    const requestPageApi = async (token) => {
        const endpoint = token ?
            `${domain}/items?token=${token}` :
            `${domain}/items`;
        const response = await fetch(endpoint).then(res => res.json());
        return response;
    };
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
            <h1>{ title }</h1>
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
                            currentPage={ currentPage }
                            nextPage={ nextPage }
                            reload={getPageHoc(currentPage)}
                            getNextPage={nextPage && getPageHoc(nextPage)}
                        />)
                    }
                )
            }
        </div>
    )
}

export default PageContainer