import React from "react";
import { Context } from "~/contexts/spotify.contexts";

export const useSpotify = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error(`useSpotify must be used within a SpotifyProvider`);
  }
  return context;
};

export default useSpotify;