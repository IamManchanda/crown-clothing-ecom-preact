import { h } from "preact";
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
    <HomePageStyled>
      <DirectoryMenu />
    </HomePageStyled>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  fetchSectionsStart: () => dispatch(fetchSectionsStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
