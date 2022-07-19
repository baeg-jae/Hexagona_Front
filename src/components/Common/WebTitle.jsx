import { Helmet } from "react-helmet";

const WebTitle = ({ text }) => {
  return (
    <Helmet>
      <title>{text}</title>
    </Helmet>
  );
};

export default WebTitle;
