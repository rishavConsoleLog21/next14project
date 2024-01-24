"use client";

import Image from "next/image";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const imagePicker = useRef();
  const [imagePreview, setImagePreview] = useState();

  function handlePickImage() {
    imagePicker.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setImagePreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = function () {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <div className={classes.preview}>
        {!imagePreview && <p>Image not uploaded.</p>}
        {imagePreview && (
          <Image src={imagePreview} alt="The image selected by the user" fill />
        )}
      </div>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imagePicker}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
