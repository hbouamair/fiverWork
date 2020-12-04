import React, {useEffect, useState,useMemo} from 'react';
import { useDropzone } from "react-dropzone";
import "./drop.css";
import upload from "../../assets/icons/ic_file_upload_48px.svg";
import { Container } from "@material-ui/core";

const baseStyle = {
  flex: 1,
  flexDirection: "column",
  textAlign: "left",
  fontFamily: "BentonSansBook",
  fontSize: "15px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "2",
  letterSpacing: "normal",
  padding: "20px",
  width: "811px",
  maxWidth: "100%",
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
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};
const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #208A3C',
  marginBottom: 8,
  marginRight: 8,
  width: 150,
  height: 100,
  padding: 9,
  marginTop:'20px',
  boxSizing: 'border-box'
};
const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};
const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function StyledDropzone(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      
    }),
  );
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));
 


  return (
    <Container className="conta">
      <div {...getRootProps({ style })}>
        <div>
          <img className="upload-img" src={upload} />
          <input {...getInputProps()} />
        </div>
        <div>
          <p>Drop a picture here or click to upload (1920px by 390px) </p>
        </div>
        <aside style={thumbsContainer}>
        {thumbs}
      </aside>
      </div>
    </Container>
  );
}

export default StyledDropzone;
