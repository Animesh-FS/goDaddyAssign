const FetchGitRepos = async () => {
  const response = await fetch("https://api.github.com/orgs/godaddy/repos")
    .then((res) => ({ data: res.json(), status: res.status }))
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .catch(() => {
      return {
        error: "Somethig went wrong",
      };
    });
  return response;
};

export { FetchGitRepos };
