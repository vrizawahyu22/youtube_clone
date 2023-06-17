import React from "react";
import { Box, Grid } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Grid direction={direction} container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {videos.map((item, idx) => (
        <Grid item md={4} sm={6} xs={12} key={idx}>
          <Box>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
