import React from "react";
import { PageTitle } from "../../components/common";

const RepoInfo = ({ location, history }) => {
  const {
    name,
    description,
    html_url,
    language,
    forks,
    open_issues,
    watchers,
  } = location?.state;
  return (
    <div className="flex w-full  flex-col items-center gap-3 h-[100vh] bg-gray-100">
      <PageTitle title={"Repo details"} />
      <div className="border rounded p-2 w-1/2 shadow-md grid grid-cols-[auto,1fr] gap-4 bg-white">
        <div className="flex text-blue-400">Name: </div>
        <div className="uppercase font-medium">{name || "NA"}</div>
        <div className="flex text-blue-400">Description: </div>
        <div>{description || "NA"}</div>
        <div className="flex text-blue-400">Link to the repo page: </div>
        <div
          className="cursor-pointer text-blue-400 hover:underline"
          onClick={() => window.open(html_url, "_blank")}
        >
          {html_url || "NA"}
        </div>
        <div className="flex text-blue-400">Language(s) in the repo: </div>
        <div>{language || "NA"}</div>
        <div className="flex text-blue-400">Forks:</div>
        <div>{forks || 0}</div>
        <div className="flex text-blue-400">Open Issues: </div>
        <div>{open_issues || 0}</div>
        <div className="flex text-blue-400">Watchers:</div>
        <div> {watchers || 0}</div>
      </div>
      <div>
        <button
          className="border bg-gray-400 p-1 rounded"
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default RepoInfo;
