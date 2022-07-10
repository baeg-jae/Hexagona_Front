import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { FlexRowDiv } from "components/Common/GlobalStyles";
import useGetPost from "components/Hooks/useGetPost";
import loadable from "@loadable/component";
import { useNavigate } from "react-router-dom";

const Loading = loadable(() => import("pages/Status/Loading"));

const Column = () => {
  const { data, isLoading } = useGetPost();
  console.log(data);
  const navigate = useNavigate();
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/detail/${postId}`);
    },
    [navigate]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StWrap>
      <StRowFirst>
        {data?.map((v, i) => {
          return i % 2 === 0 ? (
            <StImgDiv
              className="imgDiv"
              onClick={() => onClickHandler(v?.postId)}
              coverImg={v?.photoUrl}
              style={{ marginRight: "4.5px" }}
            />
          ) : (
            ""
          );
        })}
        <EmptyDiv />
      </StRowFirst>
      <StRowSecond>
        <EmptyDiv />
        {data?.map((v, i) => {
          return i % 2 === 1 ? (
            <StImgDiv
              className="imgDiv"
              onClick={() => onClickHandler(v?.postId)}
              coverImg={v?.photoUrl}
              style={{ marginLeft: "4.5px" }}
            />
          ) : (
            ""
          );
        })}
        <EmptyDiv />
      </StRowSecond>
    </StWrap>
  );
};

export default Column;

const StWrap = styled(FlexRowDiv)`
  width: 100%;
  overflow-y: scroll;
  white-space: nowrap;
`;

const StRowFirst = styled.div`
  display: grid;
  grid-template-columns: 158px;
  gap: 9px;
`;

const StRowSecond = styled.div`
  display: grid;
  grid-template-columns: 158px;
  gap: 9px;
`;

const StImgDiv = styled.div`
  height: 213.91px;
  background-image: url(${(props) => props.coverImg});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;

const EmptyDiv = styled.div`
  width: 158px;
  height: 50px;
`;
