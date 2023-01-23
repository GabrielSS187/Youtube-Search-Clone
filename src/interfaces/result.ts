export interface IResult {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: IPageInfo;
  items: IItem[];
};

export interface IItem {
  kind: string;
  etag: string;
  id: IID;
  snippet: ISnippet;
};

export interface IID {
  kind: string;
  channelId?: string;
  videoId?: string;
};

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

export interface IThumbnails {
  default: IDefault;
  medium: IDefault;
  high: IDefault;
};

export interface IDefault {
  url: string;
  width?: number;
  height?: number;
};

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
};