import React from 'react';
import { Upload, message, Button, Icon } from 'antd';
import 'antd/dist/antd.css';

import logo from './logo.svg';
import './App.css';


const props = {
  name: 'file',
  listType: 'picture',
  action: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



function App() {
  return (
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> Click to Upload
      </Button>
    </Upload>
  );
}

export default App;
