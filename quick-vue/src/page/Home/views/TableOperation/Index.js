import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { getTableTemplate } from "./template";

const { TextArea } = Input;

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

export default function App({ bothName }) {
  const [form] = Form.useForm();
  const [getUrl, setGetUrl] = useState("");
  const [tableColumns, setTableColumns] = useState("");
  const [keyId, setKeyId] = useState("");

  const createFile = (val) => {
    const blob = new Blob([val], {
      type: "application/x-javascript",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `Index.vue`;
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  const getTem = () => {
    const tem = getTableTemplate(getUrl, bothName, keyId, tableColumns);
    createFile(tem);
  };

  // const getColumnsInfo = () => {
  //   const data = tableColumns.split("\n");
  //   let str = "";

  //   data.forEach((item) => {
  //     let strArr = item.split(":");
  //     str += getTem(strArr[0], strArr[1]);
  //   });

  //   function getTem(key, label) {
  //     return ` <el-table-column
  //       prop="${key}"
  //       label="${label}"
  //       width="180">
  //     </el-table-column>`;
  //   }
  // };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Form form={form} {...formItemLayout}>
        <Form.Item name={"get_url"} label="getUrl">
          <Input
            value={getUrl}
            placeholder={"请输入获取地址"}
            onChange={(e) => setGetUrl(e.target.value)}
          />
        </Form.Item>
        <Form.Item name={"key_id"} label="key_id">
          <Input
            value={keyId}
            placeholder={"请输入id名"}
            onChange={(e) => setKeyId(e.target.value)}
          />
        </Form.Item>
        <Form.Item name={"table_columns"} label="table columns">
          <TextArea
            rows={6}
            value={tableColumns}
            placeholder={"请输入表头信息"}
            onChange={(e) => setTableColumns(e.target.value)}
          />
        </Form.Item>
      </Form>

      <div
        style={{
          textAlign: "right",
        }}
      >
        {/* <Button
          type="dashed"
          disabled={tableColumns === ""}
          onClick={getColumnsInfo}
          className="createButton"
        >
          formatter
        </Button> */}
        <Button
          type="primary"
          onClick={getTem}
          disabled={!(getUrl && keyId)}
          className="createButton"
        >
          create
        </Button>
        <Button onClick={onReset}>clear</Button>
      </div>
    </div>
  );
}

/**
 * 获取表头信息
 * 获取地址
 *
 * 拼接模版
 *
 * 生成文件
 */
