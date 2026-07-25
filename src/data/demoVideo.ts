export interface DemoVideo {
  title: string;
  channel: string;
  duration: string;
  thumbnail: string;
  qualities: string[];
}

export const demoVideo: DemoVideo = {
  title: "Amazing Nature in 4K HDR",
  channel: "Nova Demo",
  duration: "12:32",
  thumbnail: "/demo/demo-thumbnail.jpg",
  qualities: ["4K", "1440p", "1080p", "720p", "480p"],
};
