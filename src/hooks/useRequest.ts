import {useState} from 'react';

export const useRequest = <DataType>(request: any) => {
    const [data, setData] = useState<DataType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('ошибок нет');

    const send = async (...args: any) => {
        setLoading(true);
        await request(...args)
            .then((response: any) => setData(response.data))
            .catch((err: any) => setError(err))
            .finally(() => setLoading(false));
    };

    return {data, loading, error, send};
};
