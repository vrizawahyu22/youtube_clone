import { Stack, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import Avatar from "@mui/material/Avatar";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    px={2}
    pt={0.5}
    pb={1}
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      background: "#fff"
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={50} />
    </Link>
    <SearchBar />
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton>
        <VideoCallOutlinedIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton>
        <NotificationsNoneIcon sx={{ color: "black" }} />
      </IconButton>
      <Avatar
        alt="Remy Sharp"
        src="https://yt3.ggpht.com/yti/AHyvSCCOXCB6S8IQAVnB4rnX7YYHw5pz4Qajwh-rKXQrncc=s88-c-k-c0x00ffffff-no-rj-mo"
        sx={{ width: 32, height: 32 }}
      />
    </Stack>
  </Stack>
);

export default Navbar;
