import React from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router";
import {Row, Col, Spin} from "antd";

import styles from "./styles.scss"
import NameList from "../name-list"

class NameListLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  componentDidMount() {
    const {match, history, nameListCode, getNameListByCode, createNameList} = this.props;

    if (match.params.id && match.params.id !== nameListCode) {
      getNameListByCode(match.params.id);
    } else {
      if (!nameListCode) {
        createNameList();
      } else {
        this.setState({loading: false});
        history.push(`/${nameListCode}`);
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {nameListCode} = this.props;

    if (prevProps.nameListCode !== nameListCode) {
      this.setState({loading: false});
    }
  }

  render() {
    return this.state.loading ? (
      <Row type="flex" align="middle" className={styles.nameListLoaderSpinContainer}>
        <Col>
          <Spin size="large"/>
        </Col>
      </Row>
    ) : (
      <Row className={styles.nameListLoaderNameListContainer}>
        <Col>
          <NameList nameListCode={this.props.nameListCode}
                    names={this.props.names}
                    getNamesByNameListCode={this.props.getNamesByNameListCode}
                    createName={this.props.createName}
                    crossOutName={this.props.crossOutName}
                    nameReceived={this.props.nameReceived}/>
        </Col>
      </Row>
    );
  }
}

NameListLoader.propTypes = {
  nameListCode: PropTypes.string,
  names: PropTypes.array,
  getNameListByCode: PropTypes.func.isRequired,
  createNameList: PropTypes.func.isRequired,
  getNamesByNameListCode: PropTypes.func.isRequired,
  createName: PropTypes.func.isRequired,
  crossOutName: PropTypes.func.isRequired,
  nameReceived: PropTypes.func.isRequired
};

export default withRouter(NameListLoader);