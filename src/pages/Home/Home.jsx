import React, { useEffect, useState } from "react";
import { PageTitle } from "../../components/common";
import { FetchGitRepos } from "../../services";
export const Home = ({ history }) => {
  const [gitList, setGitList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getInitData();
  }, []);

  const getInitData = async () => {
    setIsLoading(true);
    const response = await FetchGitRepos();
    if (!response.error) {
      setGitList(response);
    }
    setIsLoading(false);
  };

  const getRepoDetailsBySelection = (name) => {
    const selectedRepoData = gitList.filter((item) => item.name === name)[0];
    if (selectedRepoData) {
      history.push({
        pathname: "/repo",
        state: selectedRepoData,
      });
      return;
    }
  };
  return (
    <div className="flex w-full  flex-col px-32 items-center bg-gray-100 h-[100vh]">
      <PageTitle title={" List of Git Repos"} />
      <div className="flex border flex-col rounded-md shadow-md h-80 overflow-auto w-1/2 bg-white">
        {isLoading ? (
          "Loading records ..."
        ) : gitList.length > 0 ? (
          gitList?.map((item) => {
            return (
              <div
                key={item.node_id}
                className="cursor-pointer  border border-b px-10 py-2 hover:bg-cyan-300 flex items-center gap-3"
                onClick={() => getRepoDetailsBySelection(item.name)}
              >
                <div className="">
                  <img
                    src={item.owner.avatar_url}
                    className="h-10 w-10 rounded-full"
                    alt={item.name}
                  />
                </div>
                <div className="text-md font-medium text-gray-500">
                  {item.name}
                </div>
              </div>
            );
          })
        ) : (
          <>Display error UI</>
        )}
      </div>
    </div>
  );
};
