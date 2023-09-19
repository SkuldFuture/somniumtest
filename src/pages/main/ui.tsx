import { Header } from "components/header";
import { useGetRandomPhotosQuery } from "redux/UnsplashApi";

export const MainPage = () => {
  const { data, error, isLoading } = useGetRandomPhotosQuery(10);
  console.log(data)
  return (
    <div>
      <Header />
      {data && (
        <ul>
          {data.map((photo: any) => (
            <li key={photo.id}>
              <img src={photo.urls.small} alt={photo.description} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
