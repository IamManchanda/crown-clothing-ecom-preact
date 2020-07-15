import { h } from "preact";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import styled from "styled-components";

import { selectDirectorySections } from "../store/directory/directory.selectors";
import MenuItem from "./menu-item";

const DirectoryMenuStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const DirectoryMenu = ({ sections }) => (
  <DirectoryMenuStyled>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuStyled>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(DirectoryMenu);
