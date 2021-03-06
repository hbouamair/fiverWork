import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import "./drop.css";
import upload from "../../assets/icons/ic_file_upload_48px.svg";

const baseStyle = {
  flex: 1,
  flexDirection: "column",

  fontFamily: "BentonSansBook",
  fontSize: "15px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "2",
  letterSpacing: "normal",
  padding: "20px",
  maxWidth: "100%",
  width: "811px",
  textAlign: "left",
  height: "69px",
  borderWidth: 2,
  borderRadius: 5,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#ffff",
  color: "#ccccd1",

  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

function Dropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*" });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div {...getRootProps({ style })}>
      <div>
        <img className="upload-img" src={upload} />
        <input {...getInputProps()} />
      </div>
      <div>
        <p>Add a logo </p>
      </div>
    </div>
  );
}

export default Dropzone;
