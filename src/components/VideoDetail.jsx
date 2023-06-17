import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description, publishedAt },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  console.log("videoDetail", videoDetail);

  return (
    <Box minHeight="95vh" px={{ md: 9, sm: 6, xs: 0 }}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={3} mt={1}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          <Typography variant="h6" fontWeight="bold" mt={1}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" py={1}>
            <Stack direction="row" spacing={1}>
              <Avatar sx={{ width: 40, height: 40 }} />
              <Box>
                <Link
                  to={`/channel/${channelId}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="black"
                    fontWeight="bold"
                  >
                    {channelTitle}
                    <CheckCircleIcon
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Box>
                  <Typography variant="caption" color="grey">
                    4.26M subscribers
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Stack direction="row" gap="10px" alignItems="center">
              <Stack
                direction="row"
                spacing={1}
                bgcolor="#F2F2F2"
                py={1}
                px={2}
                borderRadius={5}
              >
                <ThumbUpOutlinedIcon />
                <Typography pr={1} fontWeight="bold" variant="subtitle2">
                  {parseInt(likeCount).toLocaleString()}
                </Typography>
                <ThumbDownOutlinedIcon
                  sx={{ borderLeft: "1px solid #0000FF", paddingLeft: 1.5 }}
                />
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                bgcolor="#F2F2F2"
                py={1}
                px={2}
                borderRadius={5}
              >
                <ReplyOutlinedIcon />
                <Typography fontWeight="bold" variant="subtitle2">
                  Share
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                bgcolor="#F2F2F2"
                py={1}
                px={2}
                borderRadius={5}
              >
                <DownloadOutlinedIcon />
                <Typography fontWeight="bold" variant="subtitle2">
                  Downlaod
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack bgcolor="#F2F2F2" p={1.5} borderRadius={3} mt={1}>
            <Stack direction="row" spacing={1}>
            <Typography fontWeight="bold" variant="subtitle2">
              {parseInt(viewCount).toLocaleString()} views
            </Typography>
            <Typography pr={1} fontWeight="bold" variant="subtitle2">
              {publishedAt}
            </Typography>

            </Stack>
            <Typography variant="subtitle2">
              {description}
            </Typography>
          </Stack>
        </Box>
        <Box
          flex={1}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
