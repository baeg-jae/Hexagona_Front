import React from 'react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router';

const Header = () => {
    return (
        <HeaderWrap>
            <ImageWrap>
                <Image>{/* <image /> */}</Image>
                <NicknameWrap>
                    <Laval>갓생 입문자</Laval>
                    <Nickname>김갓생</Nickname>
                </NicknameWrap>
            </ImageWrap>
            <NavigatorBar>...</NavigatorBar>
            <Outlet />
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.div`
    width: 310px;
    height: 80px;
    /* display: flex;
    justify-items: row;
    justify-content: flex-start;
    position: absolute; */
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: white;
    color: transparent;
`;
const ImageWrap = styled.div`
    flex-direction: row;
    display: flex;
    overflow: hidden;
    margin-left: 33px;
`;
const Image = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 80px;

    background-color: black;
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
const NavigatorBar = styled.div`
    margin-right: 13px;
    color: black;
`;
