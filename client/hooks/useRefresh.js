// useRefresh.js
import { useState, useCallback } from 'react';

const useRefresh = (setFetchInfo, fetchData) => {
    console.log(fetchData);
    const [refreshing, setRefreshing] = useState(false);
    const { url, options } = fetchData;
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setFetchInfo({ url, options });
        setRefreshing(false);
    }, [fetchData]);

    return { refreshing, onRefresh };
};

export default useRefresh;
