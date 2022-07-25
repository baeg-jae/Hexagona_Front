import React from 'react';
import styled from '@emotion/styled';
import useGetUser from 'components/Hooks/User/useGetUser';

const NewLikeImg = () => {
    const { data } = useGetUser();
    console.log(data);
    return (
        <StNewLikeImgWrap>
            <StGoalShotILike>Goal Shot I Like</StGoalShotILike>
            <StNewLikeImgList />
        </StNewLikeImgWrap>
    );
};

export default NewLikeImg;

const StNewLikeImgWrap = styled.div``;
const StGoalShotILike = styled.div``;
const StNewLikeImgList = styled.div``;
