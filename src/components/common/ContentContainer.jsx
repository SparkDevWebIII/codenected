import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  borderRadius: "4px",
  padding: "15px",
}));

export default ContentContainer;
