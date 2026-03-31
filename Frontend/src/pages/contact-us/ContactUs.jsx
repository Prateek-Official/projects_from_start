import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SecondaryButton from "../../components/common/SecondaryButton";
import TertiaryButton from "../../components/common/TertiaryButton";
import ContactForm from "../../components/page-specific-components/ContactForm";

const ContactUs = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1040px",
          minWidth: "1040px",
          // border: "1px solid black",
        }}
      >
        <Box>
          <Typography
            variant="body1"
            component="h1"
            sx={{ fontSize: "48px", fontWeight: 800 }}
          >
            CONTACT US
          </Typography>

          <Typography
            variant="body1"
            component="p"
            className="text-[#5A5959]"
            style={{ margin: "10px 0px 30px" }}
          >
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
          </Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1, padding: "10px 20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <SecondaryButton
                text="VIA SUPPORT CHAT"
                imgSrc="/MESSAGE_White.png"
                altText="icon"
              />
              <SecondaryButton
                text="VIA CALL"
                imgSrc="/PHONE_White.png"
                altText="icon"
              />
            </Box>

            <TertiaryButton
              text="VIA EMAIL FORM"
              fontWeight={600}
              borderRadius="5px"
              imgSrc="/MESSAGE_Black.png"
              marginTop="10px"
            />

            <ContactForm />
          </Box>

          <Box sx={{ flex: 1 }}>
            <img
              src="/CONTACT_IMG.svg"
              alt="Contact Image"
              // className="h-[615px] w-[608px]"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ContactUs;
