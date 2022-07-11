import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { StWidth } from "components/Common/GlobalStyles";
import flex from "components/Common/flex";
import useCategory from "components/Hooks/useCategory";
import useGetMission from "components/Hooks/useGetMission";
import Loading from "pages/Status/Loading";
import { useParams } from "react-router-dom";
import AddModal from "components/Common/addModal";

const HomeCategory = () => {
  const [flag, setFlag] = useState(false);
  const [content, setContent] = useState("");
  const { category } = useParams();
  const categoryCheck = useCategory();
  const { data, isLoading } = useGetMission();
  console.log(data);
  useEffect(() => {}, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <StWrap>
      <StContainer>
        <div className="category">
          <span>{categoryCheck}</span>
        </div>
        <div className="missions"></div>
      </StContainer>
      {flag && (
        <AddModal
          setContent={setContent}
          content={content}
          category={category}
          setFlag={setFlag}
        />
      )}
    </StWrap>
  );
};

export default HomeCategory;

const StWrap = styled(StWidth)`
  ${flex({ direction: "column" })}
`;

const StContainer = styled.div`
  ${flex({
    direction: "column",
    justify: "space-between",
    align: "flex-start",
  })}
  width: 345px;
  height: 497px;
  margin-top: 40px;
  .category {
    ${flex({ justify: "flex-start" })}
    width: 201px;
    height: 27px;

    &:first-of-type {
      margin-left: 9px;
    }
    span {
      margin-right: 19px;
      font-weight: 700;
      font-size: 18px;
      line-height: 130%;
      color: #202020;
    }
  }
`;
