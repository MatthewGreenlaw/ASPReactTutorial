import { useState, useEffect } from 'react';

const useGetApi = (api) => {
    const [data, setData] = useState(null);
    useEffect(
        () => {
            api()
                .then(
                    res => setData(res)
                )
                .fail(
                    err => console.error(err)
                );
        },
        [data]
    );
    return data;
};

export default useGetApi;