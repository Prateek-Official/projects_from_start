import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { TEXT_FIELDS } from "../../constants/constants";
import SecondaryButton from "../common/SecondaryButton";
import { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData"));
    console.log(data);
    if(data){
       setFormData(data);
    }
  }, [])

  const handleChange = (e, id) => {
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [id]: e.target.value,
      };
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({});
  };

  return (
    <Box
      component="form"
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ width: "440px" }}>
        {TEXT_FIELDS.map((field) => {
          return (
            <TextField
              key={field?.id}
              type={field?.type}
              style={{ marginTop: "20px" }}
              label={field?.name}
              value={formData[field?.id] || ""}
              multiline={field?.multiline}
              minRows={field?.multiline == true ? 4 : 0}
              variant="outlined"
              slotProps={{ inputLabel: { shrink: true } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0px",
                  width: "100%",
                  "& fieldset": {
                    border: "2px solid #5A5959",
                  },
                  "&:hover fieldset": {
                    borderColor: "#5A5959",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#5A5959",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "black",
                  fontWeight: 600,
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "black",
                },
              }}
              onChange={(e) => handleChange(e, field?.id)}
            />
          );
        })}

        <Box
          component="div"
          sx={{
            // border: "1px solid black",
            marginTop: "20px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <SecondaryButton text="Submit" type="submit" />
        </Box>
      </FormControl>
    </Box>
  );
};

export default ContactForm;
