import { useGetMyPosts } from 'components/Hooks/User/GetMyPosts';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import flex from 'components/Common/flex';
import styled from '@emotion/styled';
import { SkeletonAnim } from 'components/Common/GlobalStyles';

const MyPageFeed = () => {
    const navigate = useNavigate();
    const { data } = useGetMyPosts();
    const onClickHandler = useCallback(() => {
        navigate('/feed/myFeed');
    }, [navigate]);
    return (
        <>
            {data !== undefined ? (
                data?.length === 0 ? (
                    <StMyPageDisabled>
                        <StMySpan>목표를</StMySpan>
                        <StMySpan>해볼까요!</StMySpan>
                        <StMySpan small>내 사진이 0개예요</StMySpan>
                    </StMyPageDisabled>
                ) : (
                    <Grid onClick={onClickHandler}>
                        <StMyPage img={data[0]?.photoUrl}></StMyPage>
                        <StMyPage img={data[1]?.photoUrl}></StMyPage>
                        <StMyPage img={data[2]?.photoUrl}></StMyPage>
                        <StMyPage img={data[3]?.photoUrl}></StMyPage>
                        <StMyPage img={data[4]?.photoUrl}></StMyPage>
                        <StMyPage img={data[5]?.photoUrl}></StMyPage>
                        <div className="position">
                            <StMySpan>내 사진</StMySpan>
                            <br />
                            <StMySpan>모아보기</StMySpan>
                            <br />
                            <StMySpan small>총 {data?.length} 개의 사진</StMySpan>
                        </div>
                    </Grid>
                )
            ) : (
                <StSkeleton>
                    <StMySpan>내 사진</StMySpan>
                    <StMySpan>모아보기</StMySpan>
                </StSkeleton>
            )}
        </>
    );
};

export default MyPageFeed;

const StMyPageDisabled = styled.div`
    ${flex({ direction: 'column' })}
    height: 225px;
    border-radius: 16px;
    margin: 5px 5px 5px 5px;
    background-color: var(--gray-3);
`;
const Grid = styled.div`
    height: 225px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    position: relative;
    .position {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
`;

const StMyPage = styled.div`
    ${flex({ direction: 'column' })}
    height: 75px;
    cursor: pointer;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.85) 100%),
        url(${(props) => props.img});
    background-position: center;
    background-size: cover;
`;

const StMySpan = styled.span`
    font-weight: ${(props) => (props.small ? '400' : '700')};
    font-size: ${(props) => (props.small ? '14px' : '16px')};
    line-height: ${(props) => (props.small ? '16px' : '19px')};
    color: #1c1c1c;
`;

const StSkeleton = styled.div`
    ${flex({ direction: 'column' })}
    width: 97%;
    height: 225px;
    border-radius: 16px;
    margin: 5px 5px 5px 5px;
    background-color: var(--skeleton);
    animation: ${SkeletonAnim} 0.5s linear infinite alternate;
`;
