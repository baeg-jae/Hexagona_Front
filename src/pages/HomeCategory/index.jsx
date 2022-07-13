import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryTop from "components/MissionPage/CategoryTop";
import useGetMission from "components/Hooks/Mission/useGetMission";
import EmptyMission from "components/MissionPage/EmptyMission";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import loadable from "@loadable/component";

const Loading = loadable(() => import("pages/Status/Loading"));

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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StWrap>
          <StContainer>
            <CategoryTop />
            <EmptyMission category={category} list={list} />
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
`;

const StContainer = styled.div`
  ${flex({
    direction: "column",
    justify: "flex-start",
  })}
  width: 345px;
  height: 497px;
  margin-top: 40px;
`;
