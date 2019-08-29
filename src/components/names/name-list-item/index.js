import React from "react"
import PropTypes from "prop-types"
import {List} from "antd"

import styles from "./styles.scss"

const NameListItem = ({nameListCode, nameId, name, crossedOut, crossOutName}) => {
  const handleItemClick = (nameListCode, nameId, crossedOut) => {
    crossOutName(nameListCode, nameId, !crossedOut);
  };

  return (
    <List.Item onClick={e => handleItemClick(nameListCode, nameId, crossedOut)}>
      <span className={crossedOut ? styles.crossedOut : ""}>{name}</span>
    </List.Item>
  );
};

NameListItem.propTypes = {
  nameListCode: PropTypes.string.isRequired,
  nameId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  crossedOut: PropTypes.bool.isRequired,
  crossOutName: PropTypes.func.isRequired,
};

export default NameListItem;