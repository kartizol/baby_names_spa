import React from "react"
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Row, Col} from "antd"

import styles from "./styles.scss"

import {NamesActions} from "./../../actions"
import NameListLoader from "../../components/names/name-list-loader"

const NamesContainer = ({
                          nameListCode,
                          names,
                          getNameListByCode,
                          createNameList,
                          getNamesByNameListCode,
                          createName,
                          crossOutName,
                          nameReceived
                        }) => {
  return (
    <Row type="flex"
         justify="center"
         className={styles.namesContainer}>
      <Col>
        <NameListLoader nameListCode={nameListCode}
                        names={names}
                        getNameListByCode={getNameListByCode}
                        createNameList={createNameList}
                        getNamesByNameListCode={getNamesByNameListCode}
                        createName={createName}
                        crossOutName={crossOutName}
                        nameReceived={nameReceived}/>
      </Col>
    </Row>
  );
};

NamesContainer.propTypes = {
  getNameListByCode: PropTypes.func.isRequired,
  createNameList: PropTypes.func.isRequired,
  getNamesByNameListCode: PropTypes.func.isRequired,
  createName: PropTypes.func.isRequired,
  crossOutName: PropTypes.func.isRequired,
  nameReceived: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    nameListCode: state.names.nameListCode,
    names: state.names.names
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getNameListByCode: NamesActions.getNameListByCode,
    createNameList: NamesActions.createNameList,
    getNamesByNameListCode: NamesActions.getNamesByNameListCode,
    createName: NamesActions.createName,
    crossOutName: NamesActions.crossOutName,
    nameReceived: NamesActions.nameReceived
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NamesContainer);
