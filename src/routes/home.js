import { h, Fragment } from "preact";
import Helmet from "preact-helmet";
import { useEffect } from "preact/hooks";
import { connect } from "react-redux";
import styled from "styled-components";

import DirectoryMenu from "../components/directory-menu";
import { fetchSectionsStart } from "../store/directory/directory.actions";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = ({ fetchSectionsStart }) => {
  useEffect(() => {
    fetchSectionsStart();
  }, [fetchSectionsStart]);

  return (
    <Fragment>
      <Helmet title="Home" />
      <HomePageStyled>
        <DirectoryMenu />
      </HomePageStyled>
    </Fragment>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  fetchSectionsStart: () => dispatch(fetchSectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
