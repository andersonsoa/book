import { Alert, Box, Typography, useTheme } from "@mui/material";
import { CheckIcon } from "lucide-react";

export default function HomePage() {
  return (
    <Box bgcolor="primary" height="100%" padding={10}>
      <Typography>Hello WOrld</Typography>
      <Alert icon={<CheckIcon fontSize="inherit" />}>
        Here is a gentle confirmation that your action was successful.
      </Alert>
    </Box>
  );
}
