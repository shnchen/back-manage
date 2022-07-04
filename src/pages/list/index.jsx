import React,{useState} from 'react';
import {Button,notification,Card,Row,Col} from 'antd'
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css'
import 'braft-editor/dist/output.css'
const controls =[
          'undo', 'redo', 'separator',
          'font-size', 'line-height', 'letter-spacing', 'separator',
          'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
          'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator',
          'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
          'link', 'separator', 'hr', 'separator',
          // 'media', 'fullscreen',
          'separator','clear'
      ]
const List = ()=>{
  const [editorState,setEditorState] = useState(BraftEditor.createEditorState(null));
  const onEditorChange = (newContent)=>{
    console.log(newContent.toHTML());
    setEditorState(newContent)
  }
  
  return (
    <div>
      <BraftEditor 
        onChange={onEditorChange}
        media={{accepts:{
          image:'image/png,image/jepg'
        }}}
        controls={controls}
      /> 
    </div>
  )
}

export default List;