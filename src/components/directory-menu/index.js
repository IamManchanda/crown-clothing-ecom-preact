import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./styles.scss";
import { selectDirectorySections } from "../../store/directory/directory.selectors";
import MenuItem from "../menu-item";

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(DirectoryMenu);
