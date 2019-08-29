import React from "react"
import PropTypes from "prop-types"
import {ActionCableConsumer} from "react-actioncable-provider"
import {Card, List} from "antd"

import NameListItem from "../name-list-item"
import AddNameForm from "../add-name-form"

class NameList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      loading: true
    };
  }

  componentDidMount() {
    const {nameListCode, getNamesByNameListCode} = this.props;
    getNamesByNameListCode(nameListCode);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.names !== this.props.names) {
      this.setState({
        names: this.props.names,
        loading: false
      })
    }
  }

  render() {
    return (
      <Card title={<AddNameForm nameListCode={this.props.nameListCode} createName={this.props.createName}/>}
            loading={this.state.loading}>
        <ActionCableConsumer
          channel={{channel: "NamesChannel", code: this.props.nameListCode}}
          onReceived={this.props.nameReceived}>
          <List
            bordered
            dataSource={this.state.names}
            renderItem={name => (<NameListItem nameListCode={this.props.nameListCode}
                                               nameId={name.id}
                                               name={name.name}
                                               crossedOut={name.crossed_out}
                                               crossOutName={this.props.crossOutName}/>)}/>
        </ActionCableConsumer>
      </Card>
    );
  }
}

NameList.propTypes = {
  nameListCode: PropTypes.string.isRequired,
  names: PropTypes.array,
  getNamesByNameListCode: PropTypes.func.isRequired,
  createName: PropTypes.func.isRequired,
  crossOutName: PropTypes.func.isRequired,
  nameReceived: PropTypes.func.isRequired
};

export default NameList;
