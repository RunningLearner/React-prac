import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

const routes = [
  {
    path: "/",
    compoenets: HomePage,
  },
  {
    path: "/blogs",
    compoenets: ListPage,
  },
  {
    path: "/blogs/create",
    compoenets: CreatePage,
  },
  {
    path: "/blogs/edit",
    compoenets: EditPage,
  },
];

export default routes;
