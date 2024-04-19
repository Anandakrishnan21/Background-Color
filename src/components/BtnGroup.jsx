import { Flex, Radio } from "antd";
import React from "react";

function BtnGroup({ onChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };
  return (
    <Flex vertical gap="middle">
      <Radio.Group defaultValue="linear" onChange={handleChange}>
        <Radio.Button value="linear">Linear</Radio.Button>
        <Radio.Button value="radial">Radial</Radio.Button>
      </Radio.Group>
    </Flex>
  );
}

export default BtnGroup;
