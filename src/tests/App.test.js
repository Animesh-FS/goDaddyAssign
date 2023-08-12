import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "../pages/Home/Home";
import RepoInfo from "../pages/RepoInfo";

const mockRouterFunc = jest.fn();
const mockLocation = {
  hash: "",
  pathname: "",
  search: "",
  state: "",
};
const mockHistory = {
  push: mockRouterFunc,
  action: "PUSH",
  block: mockRouterFunc,
  createHref: mockRouterFunc,
  go: mockRouterFunc,
  goBack: mockRouterFunc,
  goForward: mockRouterFunc,
  length: 0,
  listen: mockRouterFunc,
  location: mockLocation,
  replace: mockRouterFunc,
};

test("Render Home component", () => {
  render(<Home />);
  const linkElement = screen.getByText(/List of Git Repos/i);
  expect(linkElement).toBeInTheDocument();
});

test("Render RepoInfo page", () => {
  render(<RepoInfo history={mockHistory} location={mockLocation} />);
  expect(screen.getByText(/Name/i)).toBeInTheDocument();
  expect(screen.getByText(/Description/i)).toBeInTheDocument();
  expect(screen.getByText(/Forks/i)).toBeInTheDocument();
  expect(screen.getByText(/Watchers/i)).toBeInTheDocument();
});

test("button Go back click", () => {
  render(<RepoInfo history={mockHistory} location={mockLocation} />);
  fireEvent.click(screen.getByRole("button", { name: "Go Back" }));
});
