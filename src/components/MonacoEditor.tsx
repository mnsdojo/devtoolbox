import { Editor } from "@monaco-editor/react";

interface MonacoEditorProps {
  language: string;
  value: string;
  onChange: (value: string | undefined) => void;
  readOnly?: boolean;
  className?: string;
}

export default function MonacoEditor({
  language,
  value,
  onChange,
  readOnly = false,
  className = "",
}: MonacoEditorProps) {
  return (
    <Editor
      height="100%"
      language={language}
      value={value}
      onChange={onChange}
      options={{
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        fontSize: 14,
        readOnly: readOnly,
      }}
      className={className}
    />
  );
}
