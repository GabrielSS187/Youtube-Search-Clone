type TProps = {
  videoId: string;
  channelTitle: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
  title: string;
};

export function Video ({
  videoId,
  title,
  channelTitle,
  description,
  publishedAt,
  thumbnailUrl
}: TProps) {
  const time = new Date(publishedAt).toLocaleString([]);

  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col md:flex-row cursor-pointer text-[#aaaaaa] group" >
        {/* Video Thumbnail */}
        <img 
          src={thumbnailUrl}
          alt={title}
          className="group-hover:scale-95 transition ease-out duration-150"
        />

        {/* Video Description */}
        <div className="flex flex-col pt-2 md:p-4 md:pt-0">
          <h1 className="text-white text-sm md:text-lg">{title}</h1>
          <p className="hidden md:block text-xs">{time}</p>
          <p className="text-sm py-0 md:py-4">{channelTitle}</p>
          <p className="hidden md:block text-xs">{description}</p>
        </div>
      </div>
    </a>
  );
};