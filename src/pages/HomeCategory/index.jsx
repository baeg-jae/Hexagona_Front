import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetMission from "components/Hooks/useGetMission";
import useCategory from "components/Hooks/useCategory";
import AddModal from "components/Common/addModal";
import Loading from "pages/Status/Loading";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const HomeCategory = () => {
  const [flag, setFlag] = useState(false);
  const [content, setContent] = useState("");
  const { data, isLoading } = useGetMission();
  const { category } = useParams();
  const categoryCheck = useCategory();
  useEffect(() => {}, [data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default HomeCategory;

const StWrap = styled.div`
  ${flex({ direction: "column" })};
  width: 100%;
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
