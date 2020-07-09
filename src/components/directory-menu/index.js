import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { DirectoryMenuStyled } from "./styles";
import { selectDirectorySections } from "../../store/directory/directory.selectors";
import MenuItem from "../menu-item";

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
