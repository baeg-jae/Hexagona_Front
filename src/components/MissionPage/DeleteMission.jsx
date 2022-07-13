import { useCallback } from 'react';
import useDeleteMission from 'components/Hooks/Mission/useDeleteMission';
import deleteImg from 'assets/img/delete.png';
import styled from '@emotion/styled';

const DeleteMission = ({ missionId }) => {
    const { mutate } = useDeleteMission();

    const onDeleteHandler = useCallback(() => {
        mutate({ missionId: missionId });
    }, [missionId, mutate]);
    return (
        <>
            <StDiv onClick={onDeleteHandler} img={deleteImg}></StDiv>
        </>
    );
};

export default DeleteMission;

const StDiv = styled.div`
    width: 32px;
    height: 27px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    margin-left: 2px;
    margin-top: 8px;
`;
