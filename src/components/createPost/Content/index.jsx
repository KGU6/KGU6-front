import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import { modules, Quill } from './Content.style.js';

function Content() {
  const [value, setValue] = useState('');

  return (
    <Quill theme='snow' value={value} onChange={setValue} modules={modules} />
  );
}

export default Content;
