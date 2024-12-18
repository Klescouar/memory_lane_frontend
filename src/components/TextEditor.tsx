import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      className="bg-white"
      theme="snow"
      value={value}
      onChange={setValue}
    />
  );
};
