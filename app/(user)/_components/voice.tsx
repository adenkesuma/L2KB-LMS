"use client";

import React, { useEffect } from "react";

function HomeVoice() {
  useEffect(() => {
    const audio = new Audio("/assets/voice/voice-over.mp3");
    audio.autoplay = true;
  }, []);
  return null;
}

export default HomeVoice;
