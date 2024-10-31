import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
import { getJobWorkerList } from '../../features/jobs/jobslice'; // Import the action creator

const InfiniteScrollPagination = ({ job_id, accesstoken, selectedWorkers, setSelectedWorkers}) => {
    const dispatch = useDispatch();

    const [data, setData] = useState({
        items: [],
        hasMore: true,
        pageNumber: 0
    });

    const fetchMoreData = async () => {
        const nextPageNumber = data.pageNumber + 1;
        const response = await dispatch(getJobWorkerList({
            job_id,
            pageno: nextPageNumber,
            token: accesstoken
        }));
        const newWorkers = response?.payload?.data?.body;
        if (newWorkers?.length === 0) {
            setData({ ...data, hasMore: false });
        } else {
            setData({
                items: [...data.items, ...newWorkers],
                hasMore: true,
                pageNumber: nextPageNumber
            });
        }
    };

    useEffect(() => {
        fetchMoreData()
    }, [])

    const toggleWorkerSelection = (workerId) => {
        setSelectedWorkers(prevSelectedWorkers => {
            if (prevSelectedWorkers.includes(workerId)) {
                return prevSelectedWorkers.filter(id => id !== workerId);
            } else {
                return [...prevSelectedWorkers, workerId];
            }
        });
    };

    return (
        <div>
            <InfiniteScroll
                dataLength={data.items.length}
                next={fetchMoreData}
                hasMore={data.hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {data.items.map((worker, index) => (
                    <div key={index}>
                        <div className="d-flex gap-3 align-items-center">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                checked={selectedWorkers.includes(worker?._id)}
                                onChange={() => toggleWorkerSelection(worker._id)}
                            />
                            <img src={worker.image} alt={worker.name} width={40} height={40} className='rounded-full' />
                            <p className="mb-0">{worker.name}</p>
                        </div>
                    </div>
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default InfiniteScrollPagination;
