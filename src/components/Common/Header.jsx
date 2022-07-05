import React from 'react';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <HeaderWrap>
            <ImageWrap>
                <Image>
                    <image />
                </Image>
                <NicknameWrap>
                    <Laval>갓생 입문자</Laval>
                    <Nickname>김갓생</Nickname>
                </NicknameWrap>
            </ImageWrap>
            <div>...</div>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px;
`;
const ImageWrap = styled.div`
    flex-direction: row;
    justify-content: space-between;
    width: 310px;
    height: 80px;
`;
const Image = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background-color: white;
`;
const NicknameWrap = styled.div`
    flex-direction: column;
    justify-content: center;
`;
const Laval = styled.p`
    color: gray;
    font-size: 13px;
    text-align: center;
`;
const Nickname = styled.div`
    color: black;
    font-size: 18px;
`;
