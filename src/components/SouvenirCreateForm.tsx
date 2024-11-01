"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface SouvenirCreateFormProps {
  accessToken: string | undefined;
}

export const SouvenirCreateForm = ({
  accessToken,
}: SouvenirCreateFormProps) => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({
    title: false,
    description: false,
  });

  const handleSubmit = () => {
    if (!formState.title || !formState.description) {
      setFormErrors({
        title: !formState.title,
        description: !formState.description,
      });
      return;
    }
    fetch("http://localhost:8000/memories", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  const handleChange = (value: string, label: string) => {
    setFormState({ ...formState, [label]: value });
  };

  return (
    <div className="px-20 mt-20">
      <input
        type="text"
        className="w-full p-3 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent transition duration-200"
        placeholder="My little souvenir..."
        onChange={(e) => handleChange(e.target.value, "title")}
      />
      {formErrors.title && (
        <p className="text-red-500 text-sm mt-1">Title is required</p>
      )}
      <ReactQuill
        className="bg-white h-80 overflow-y-auto mt-4"
        theme="snow"
        value={formState.description}
        onChange={(value) => handleChange(value, "description")}
      />
      {formErrors.description && (
        <p className="text-red-500 text-sm mt-1">Description is required</p>
      )}
      <button
        onClick={handleSubmit}
        className="bg-transparent hover:bg-gray-900 text-gray-200 font-semibold hover:text-gray-200 py-2 px-4 border border-gray-200 rounded mt-4"
      >
        Create
      </button>
    </div>
  );
};
