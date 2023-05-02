import { useRef, useState } from "react";
import { AppCSS } from "..";
import { SFileUpload } from "./input.styled";
import UploadIcon from "../../images/file_upload.svg";
import CheckIcon from "@mui/icons-material/Check";
import { Box, CircularProgress, Fab } from "@mui/material";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { RowDiv } from "../Misc/misc.styled";
import { toast } from "react-toastify";

interface UploadProps {
  placeholder: string;
  onSelectFile: Function;
  width?: number;
  readonly fileType: "PDF" | "IMG";
}

const BASE_URL_PUBLIC = "";

export const api = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const FileUpload: React.FC<UploadProps> = ({
  placeholder,
  onSelectFile,
  width,
  fileType,
}) => {
  const imageRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState(placeholder);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const buttonSx = {
    width: "40px",
    height: "40px",
    boxShadow: "none",
    ...(success
      ? {
          bgcolor: AppCSS.GREEN,
          "&:hover": {
            bgcolor: AppCSS.GREEN,
          },
        }
      : { bgcolor: AppCSS.GRAY_MILD }),
  };

  const onChooseFile = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  const onFileChange = async () => {
    if (!imageRef.current?.files) {
      toast("Error while uploading file!", {
        type: "error",
      });
      return;
    }
    const file = imageRef.current.files[0];
    const { name, type } = file;
    setFileName(`Uploading...`);
    const newFileName = `${uuid()}.${name.split(".")[1]}`;

    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }

    try {
      // console.log(api());
      const uploadUrl = await api().post(`${BASE_URL_PUBLIC}/upload`, {
        name: newFileName,
        type,
      });

      if (uploadUrl) {
        const {
          data: { url },
        } = uploadUrl.data;

        if (url) {
          var options = {
            headers: { "Content-Type": type, "x-amz-acl": "public-read" },
          };

          const response = await axios.put(url, file, options);

          // console.log(response);

          setSuccess(true);
          setLoading(false);
          setFileName(`Uploaded`);
          onSelectFile(newFileName);
        }
      }
    } catch (err) {
      console.error(err);

      toast("Error while uploading file!" + err, {
        type: "error",
      });
      setFileName(`Failed!`);
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <SFileUpload
      style={{
        width: "100%",
      }}
      onClick={() => onChooseFile()}
    >
      <input
        type="file"
        id="file"
        ref={imageRef}
        onChange={onFileChange}
        accept={
          fileType === "PDF" ? ".pdf" : "image/png, image/jpeg, image/jpg"
        }
        style={{
          display: "none",
        }}
      />
      <RowDiv
        style={{
          flexDirection: "row",
          margin: 0,
          padding: 0,
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: AppCSS.GRAY,
          }}
        >
          {fileName}
        </p>

        <Box sx={{ position: "relative" }}>
          <Fab aria-label="save" color="primary" sx={buttonSx}>
            {success ? (
              <CheckIcon />
            ) : (
              <img src={UploadIcon} height="18px" width="18px" />
            )}
          </Fab>
          {loading && (
            <CircularProgress
              size={55}
              sx={{
                color: "#008000",
                position: "absolute",
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
      </RowDiv>
    </SFileUpload>
  );
};
