import React from "react"
import PropTypes from "prop-types"
import {Button, Col, Form, Input, Row, Icon, Tag} from "antd"

const AddNameForm = ({form, nameListCode, createName}) => {
  const {getFieldDecorator} = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((error, f) => {
      if (!error) {
        form.resetFields();
        createName(nameListCode, f.name);
      }
    });
  };

  return (
    <Form layout="horizontal" onSubmit={e => handleSubmit(e)}>
      <Row type="flex" justify="start" gutter={10}>
        <Col>
          <h3>Baby Name:</h3>
        </Col>
        <Col>
          <Tag>{nameListCode}</Tag>
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={18}>
          <Form.Item>
            {
              getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please, type in the baby names"
                  },
                  {
                    pattern: new RegExp("^[A-Za-z\\s]+$"),
                    message: "Please enter correct name"
                  },
                  {
                    validator: (rule, value, callback) => {
                      if (value && value.split(" ").length > 2) {
                        callback("Can contains only one space");
                        return;
                      }

                      callback();
                    }
                  }
                ]
              })(
                <Input
                  prefix={<Icon type="smile" theme="twoTone"/>}
                  placeholder="Please enter name"/>
              )
            }
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              <Icon type="plus-circle"/>
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

AddNameForm.propTypes = {
  nameListCode: PropTypes.string.isRequired,
  createName: PropTypes.func.isRequired
};

export default Form.create({name: "AddNameForm"})(AddNameForm);
