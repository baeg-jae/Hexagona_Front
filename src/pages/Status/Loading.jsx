import { MutatingDots } from 'react-loader-spinner';
import { StWrapFlex } from 'components/Common/GlobalStyles';

const Loading = () => {
    return (
        <StWrapFlex className="main">
            <MutatingDots color="var(--black)" height={100} width={100} />
        </StWrapFlex>
    );
};

export default Loading;
