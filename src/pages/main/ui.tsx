import { Header } from "components/header";
import { useGetPhotosQuery } from "redux/UnsplashApi";

export const MainPage = () => {
  const { data, error, isLoading } = useGetPhotosQuery()
  return <div><Header /></div>;
};
