import React, { useState } from "react";
import { Button, Form, Input } from "antd";

const { TextArea } = Input;

export default function App() {
  const [formInfo, setFormInfo] = useState("");

  const createFile = (val) => {
    const blob = new Blob([val], {
      type: "application/x-javascript",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `Form.vue`;
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      <Form>
        <Form.Item label={"表单内容"}>
          <TextArea
            rows={15}
            value={formInfo}
            placeholder={"请输入表单信息"}
            onChange={(e) => setFormInfo(e.target.value)}
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
          disabled={formInfo === ""}
          onClick={() => createFile(formInfo)}
          className="createButton"
        >
          create
        </Button>
        <Button onClick={() => setFormInfo("")}>clear</Button>
      </div>
    </div>
  );
}
