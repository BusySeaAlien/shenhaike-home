type Station = { name: string; label: string; description: string } & (
  { status: "live"; href: string; action: string } |
  { status: "planned"; notice: string }
);
export const site = {
  name: "深海客",
  subtitle: "记录陆地上的事情。",
  description: "写小说，也记录所见的人与地方。",
  github: "https://github.com/BusySeaAlien",
};
export const stations: Station[] = [
  { name: "Ink", label: "写作", description: "小说、随笔与个人记录。", status: "live", href: "https://ink.shenhaike.com/", action: "进入 Ink" },
  { name: "Lens", label: "摄影", description: "记录所见的人与地方。", status: "live", href: "https://lens.shenhaike.com/", action: "进入 Lens" },
  { name: "Atlas", label: "地理档案", description: "浏览去过的地点、旅程与行政足迹。", status: "live", href: "https://atlas.shenhaike.com/", action: "进入 Atlas" },
];
