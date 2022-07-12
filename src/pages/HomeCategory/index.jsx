import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryTop from "components/missionComponents/CategoryTop";
import useGetMission from "components/Hooks/useGetMission";
import Loading from "pages/Status/Loading";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const HomeCategory = () => {
  const { data, isLoading } = useGetMission();
  const { category } = useParams();
  useEffect(() => {}, [data]);

  const list = data
    ?.map((v) => {
      return category === v.category && v;
    })
    .filter((v) => {
      return v !== false;
    });

  console.log(list);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StWrap>
          <StContainer>
            <CategoryTop />
          </StContainer>
        </StWrap>
      )}
    </>
  );
};

export default HomeCategory;

const StWrap = styled.div`
  ${flex({ direction: "column" })};
  width: 100%;
  .active {
    color: #212121 !important;
  }
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
`;
