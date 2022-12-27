import ListPage from "./pages/ListPage";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import ShowPage from "./pages/ShowPage";
import AdminPage from "./pages/AdminPage";

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
    path: "/admin",
    compoenets: AdminPage,
  },
  {
    path: "/blogs/create",
    compoenets: CreatePage,
  },
  {
    path: "/blogs/:id/edit",
    compoenets: EditPage,
  },
  {
    path: "/blogs/:id",
    compoenets: ShowPage,
  },
];

export default routes;
