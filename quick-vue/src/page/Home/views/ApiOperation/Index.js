import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import "./Index.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

function App({ bothName, fileUrl }) {
  const [form] = Form.useForm();
  const [addUrl, setAddUrl] = useState("");
  const [delUrl, setDelUrl] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [getUrl, setGetUrl] = useState("");

  const createFile = (val) => {
    const blob = new Blob([val], {
      type: "application/x-javascript",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${bothName + "Manage"}.ts`;
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  const createFileContent = () => {
    let fileStr = `
      import { Base_Url } from "../env";
      import Request from "../utils/request";
    `;

    const funArr = checkUrlInfo();

    funArr.forEach((item) => {
      fileStr += `
        export const ${item.name} = (val: object) =>
          Request({
            method: "post",
            url: Base_Url + "${item.url}",
            data: { ...val },
          });
      `;
    });

    createFile(fileStr);
  };

  const checkUrlInfo = () => {
    let funArr = [];

    if (addUrl) {
      funArr.push({
        name: "Add" + bothName,
        url: addUrl,
      });
    }

    if (delUrl) {
      funArr.push({
        name: "Del" + bothName,
        url: delUrl,
      });
    }

    if (editUrl) {
      funArr.push({
        name: "Edit" + bothName,
        url: editUrl,
      });
    }

    if (getUrl) {
      funArr.push({
        name: "Get" + bothName,
        url: getUrl,
      });
    }

    return funArr;
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="App">
      <div>
        <Form form={form} {...formItemLayout}>
          <Form.Item name={"add_url"} label={"Add"}>
            <Input
              disabled={bothName === ""}
              placeholder={"请输入增加接口地址"}
              onChange={(e) => setAddUrl(e.target.value)}
            />
          </Form.Item>
          <Form.Item name={"del_url"} label={"Del"}>
            <Input
              disabled={bothName === ""}
              placeholder={"请输入删除接口地址"}
              onChange={(e) => setDelUrl(e.target.value)}
            />
          </Form.Item>
          <Form.Item name={"edit_url"} label={"Edit"}>
            <Input
              disabled={bothName === ""}
              placeholder={"请输入修改接口地址"}
              onChange={(e) => setEditUrl(e.target.value)}
            />
          </Form.Item>
          <Form.Item name={"get_url"} label={"Get"}>
            <Input
              disabled={bothName === ""}
              placeholder={"请输入查询接口地址"}
              onChange={(e) => setGetUrl(e.target.value)}
            />
          </Form.Item>
        </Form>

        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button
            type="primary"
            onClick={createFileContent}
            className="createButton"
          >
            create
          </Button>
          <Button onClick={onReset}>clear</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
