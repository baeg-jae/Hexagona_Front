import { useMutation, useQueryClient } from 'react-query';
import apis from 'shared/api/main';

const createChatRoom = async (payload) => {
    const createChatRoomDB = await apis.createChatRoom(payload);
    return createChatRoomDB;
};

const useCreateChatRoom = () => {
    const queryClient = useQueryClient();
    return useMutation(createChatRoom, {
        onSuccess: () => {
            queryClient.invalidateQueries('chat');
        },
        onError: (e) => {},
    });
};

export default useCreateChatRoom;
