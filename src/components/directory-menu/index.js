import React, { Component } from "react";

import "./styles.scss";
import MenuItem from "../menu-item";
import DIRECTORY_MENU_DATA from "../../fixtures/directory-menu-data";

class DirectoryMenu extends Component {
  state = {
    sections: DIRECTORY_MENU_DATA,
  };

  render() {
    const { state: { sections } = {} } = this;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
