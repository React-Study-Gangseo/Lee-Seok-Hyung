import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw } from 'draft-js';
// import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

type TextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const TextEditor = ({ value, onChange }: TextEditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const currentContent = editorState.getCurrentContent().getPlainText();
    if (currentContent !== value) {
      const contentState = convertFromRaw({
        blocks: [
          {
            key: 'init',
            text: value, // 초기값
            type: 'unstyled',
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          },
        ],
        entityMap: {},
      });
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, [value, editorState]);

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const html = newEditorState.getCurrentContent().getPlainText();
    onChange(html);
  };

  return (
    <Wrapper>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </Wrapper>
  );
};

export default TextEditor;

const Wrapper = styled.div`
  .wrapper-class {
    width: 100%;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
  }

  .editor-class {
    min-height: 600px;
    padding: 10px 20px;
  }
  .editor-class::-webkit-scrollbar {
    display: none;
  }

  /* 툴바 스타일 지정 */
  .toolbar-class {
    padding: 10px; /* 툴바 내부의 패딩 설정 */
    border-radius: 5px;
  }
`;
