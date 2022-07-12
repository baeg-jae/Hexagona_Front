import { useMutation, useQueryClient } from 'react-query';
import apis from 'shared/api/main';

const addLike = async (payload) => {
    const addLikeDB = await apis.addLike(payload);
    return addLikeDB;
};
const useAddLike = () => {
    const queryClient = useQueryClient();

    return useMutation(addLike, {
        onSuccess: () => {
            queryClient.invalidateQueries('like');
        },
        onError: (e) => {
            alert(e.massage);
        },
    });
};

export default useAddLike;
