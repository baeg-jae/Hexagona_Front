import { StWrapFlex } from 'components/Common/GlobalStyles';
import Button from 'components/Common/Button';
import useBack from 'components/Hooks/useBack';

const Error = () => {
    const back = useBack();
    return (
        <StWrapFlex className="main">
            <span className="bigSpan">앗!</span>
            <span className="smallSpan">오류가 발생했어요. </span>
            <Button text="뒤로가기" theme="dark" click={back} />
        </StWrapFlex>
    );
};

export default Error;
