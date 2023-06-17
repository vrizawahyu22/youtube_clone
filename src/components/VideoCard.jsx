import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, Box, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card sx={{ boxShadow: "none"}}>
    <Link
      to={`/watch/${videoId}`}
    >
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{ height: 200, borderRadius: 3  }}
      />
    </Link>
    <Box mt={1} mb={2}>
      <Link to={`/video/${videoId}`} style={{ textDecoration: "none" }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="black"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {snippet?.title}
        </Typography>
      </Link>

      <Link
        to={
          `/channel/${snippet?.channelId}`
        }
        style={{ textDecoration: "none" }}
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </Box>
  </Card>
);

export default VideoCard;
