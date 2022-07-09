import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import Dog from 'assets/img/Dog.png';

const LikeRow = ({ scrollRef }) => {
    // 전체 게시글 정보를 여기서 get 한다음에 아래 div에 채워준다
    const onClickHandler = useCallback(() => {
        // onclick event
    }, []);
    return (
        <StRow ref={scrollRef}>
            <div />
            <div />
            <div />
            <div />
        </StRow>
    );
};

export default LikeRow;
const StRow = styled.div`
    width: 100%;
    height: 211.75px;
    overflow-x: scroll;
    white-space: nowrap;
    div {
        display: inline-block;
        width: 126.57px;
        height: 200px;
        margin-right: 3.64px;
        border-radius: 8.59893px;
        background-image: url(${Dog});
        background-size: cover;
        background-position: center;
    }
    &:last-child {
        margin-bottom: 135px;
    }
`;
