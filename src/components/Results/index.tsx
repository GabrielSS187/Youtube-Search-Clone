import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroller";

import { LoadingIndicator } from "../LoadingIndicator";
import { Message } from "../Message";
import { Video } from "../Video";

type TProps = {
  openMenu: boolean;
};

export function Results ({ openMenu }: TProps) {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const [ query, setQuery ] = useState<string | any>(params.get("query" ?? ""));

  const { data, isLoading, error, hasMore, clearData, loadMore } = 
  useQuery({query});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");

    if ( query === null ) {
      clearData();
      return;
    };

    setQuery(query);

  }, [location, clearData]);

  return (
    <div className={`w-full ${!openMenu ? "bg-opacity-25 bg-blackRgba" : "bg-primary"} md:w-full h-screen overflow-y-scroll scrollbar-hide pt-24 pl-16 pr-2 flex flex-col items-center max-md:pl-2`} >
      { isLoading && ( <LoadingIndicator /> ) }

      { !isLoading && error !== null && (
          <Message 
            title="Ops, ocorreu um erro"
            message={`Algo deu errado as possíveis razões são "(${error.message})"`}
          />
        ) 
      }

      { !isLoading && !error && data.length === 0 && (
          <Message
            title="Ops, ocorreu um error"
            message="Por favor, use a barra de pesquisa acima para pesquisar o vídeo que você deseja"
          />
        )
      }

      { !isLoading && !error && data.length > 0 && (
          <InfiniteScroll
            pageStart={0}
            hasMore={hasMore}
            loadMore={loadMore}
            loader={<LoadingIndicator key={0} />}
            useWindow={false}
          >
            <ul className="list-none md:ml-12 max-sm:mt-28">
              {
                data.map((item, index) => {
                  return (
                    <li
                       key={`${index}${item.id.videoId}` || ""}
                       className="pt-8 md:pt-0 md:p-1 md:m-4"
                    >
                      <Video
                        videoId={item.id.videoId || ""}
                        title={item.snippet.title}
                        channelTitle={item.snippet.title}
                        description={item.snippet.description}
                        thumbnailUrl={item.snippet.thumbnails.medium.url}
                        publishedAt={item.snippet.publishedAt}
                      />
                    </li>
                  )
                })
              }
            </ul>
          </InfiniteScroll>
        ) 
      }
    </div>
  );
};