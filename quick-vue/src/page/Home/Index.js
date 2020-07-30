import React, { useState } from "react";
import ApiOperation from "./views/ApiOperation/Index";
import TableOperation from "./views/TableOperation/Index";
import FormOperation from "./views/FormOperation/Index";
import "./Index.css";
import { Col, Form, Input, Row, Tabs } from "antd";

const { TabPane } = Tabs;

function App() {
  const [bothName, setBothName] = useState("Test");

  return (
    <div className="Container">
      <Row gutter={15} className="ToolBar">
        <Col span={12}>
          <Form.Item label={"共有名称"}>
            <Input
              placeholder={"请输入名称"}
              value={bothName}
              onChange={(e) => setBothName(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Tabs defaultActiveKey="1">
        <TabPane tab="基础Api创建" key="1">
          <ApiOperation bothName={bothName} />
        </TabPane>
        <TabPane tab="表格创建" key="2">
          <TableOperation bothName={bothName} />
        </TabPane>
        <TabPane tab="表单创建" key="3">
          <FormOperation />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
