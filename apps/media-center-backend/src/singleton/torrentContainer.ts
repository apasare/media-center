import WebTorrent from "webtorrent";

import { TorrentContainer } from "../service";

const torrentClient = new WebTorrent({
  maxConns: Number(process.env.TORRENT_MAX_CONNS) || 30,
  uploadLimit: parseInt(process.env.TORRENT_DOWNLOAD_LIMIT || "-1"),
  downloadLimit: parseInt(process.env.TORRENT_DOWNLOAD_LIMIT || "-1"),
});
export const torrentContainer = new TorrentContainer(torrentClient);
