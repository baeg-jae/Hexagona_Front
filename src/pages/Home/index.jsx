import { StWrap } from 'components/Common/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useGetUser from 'components/Hooks/User/useGetUser';
import NavigatorBar from 'components/Common/NavigatorBar';
import Header from 'components/Common/Header';
import loadable from '@loadable/component';
import styled from '@emotion/styled';
import SkeletonMain from 'components/Skeletons/SkeletonMain';

const Main = loadable(() => import('./Main'));
const HomeCategory = loadable(() => import('pages/HomeCategory'));

const Home = () => {
    const { data, isLoading } = useGetUser();
    return (
        <StCalculatedWrap className="main">
            {isLoading ? (
                <>
                    <SkeletonMain />
                </>
            ) : (
                <>
                    <Header data={data} />
                    <Helmet>
                        <title>마이: 갓생메이커</title>
                    </Helmet>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/:category" element={<HomeCategory />} />
                    </Routes>
                </>
            )}
            <NavigatorBar />
        </StCalculatedWrap>
    );
};

export default Home;

const StCalculatedWrap = styled(StWrap)`
    height: calc(100vh - 60px);
    overflow-y: scroll;
`;
