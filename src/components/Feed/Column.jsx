import { FlexRowDiv } from "components/Common/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import useGetPost from "components/Hooks/useGetPost";
import SkeletonFeed from "./SkeletonFeed";
import styled from "@emotion/styled";

const Column = () => {
  const { data, isFetching } = useGetPost();
  const navigate = useNavigate();
  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/detail/${postId}`);
    },
    [navigate]
  );

  return (
    <>
      {isFetching ? (
        <SkeletonFeed data={data} />
      ) : (
        <StWrap>
          <StRowFirst>
            {data?.map((v, i) => {
              return i % 2 === 0 ? (
                <StImgDiv
                  className="imgDiv"
                  onClick={() => onClickHandler(v?.postId)}
                  coverImg={v?.photoUrl}
                  style={{ marginRight: "4.5px" }}
                  key={i}
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
                  key={i}
                />
              ) : (
                ""
              );
            })}
            <EmptyDiv />
          </StRowSecond>
        </StWrap>
      )}
    </>
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
