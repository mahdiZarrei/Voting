import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  UilLinkedin,
  UilInstagram,
  UilTelegram,
  UilWallet,
} from "@iconscout/react-unicons";

import { copyToClipboard } from "../../utils";

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          m: "auto",
          mt: "1%",
        }}
      >
        <Box sx={{ textAlign: "center", mt: "1vh", pb: "2vh" }}>
          <IconButton sx={{ mr: "2.5vw" }} target="_blank" href="#">
            <UilLinkedin
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
              size="3vw"
            />
          </IconButton>
          <IconButton sx={{ mr: "1.25vw" }}>
            <UilInstagram
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
              size="3vw"
            />
          </IconButton>

          <IconButton sx={{ ml: "1.25vw" }} target="_blank" href="#">
            <UilTelegram
              size="3vw"
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
            />
          </IconButton>
          <IconButton
            sx={{ ml: "2.5vw" }}
            onClick={() =>
              copyToClipboard("0x8dedDf9068B594310b8914079CA41CE1cb5Bf6D0")
            }
          >
            <UilWallet
              color={theme.palette.mode === "dark" ? "#faf69c" : "#FFD700"}
              size="3vw"
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
