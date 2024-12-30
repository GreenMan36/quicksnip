import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyToClipboard from "./CopyToClipboard";
import CodeThemeToggle from "./CodeThemeToggle";
import { useState } from "react";

type Props = {
  language: string;
  code: string[];
};

const CodePreview = ({ language = "markdown", code }: Props) => {
  const [codeTheme, setCodeTheme] = useState<"dark" | "light">("dark");
  const codeString = code.join("\n");

  return (
    <div className="code-preview" data-theme={codeTheme}>
      <div className="modal__copy">
        <CodeThemeToggle onThemeChange={setCodeTheme} />
        <CopyToClipboard text={codeString} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={codeTheme === "light" ? oneLight : oneDark}
        wrapLines={true}
        customStyle={{ margin: "0", maxHeight: "20rem" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodePreview;
