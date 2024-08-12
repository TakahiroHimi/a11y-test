import { useRouter } from "next/router";
import { UserType } from "./pages/api/users/[userId]";
import useSWRImmutable from "swr/immutable";

export const useGetUser = () => {
  const router = useRouter();
  const { userId } = router.query;
  const fetchUserUrl = `/api/users/${userId}`;

  const fetcher = (...param: Parameters<typeof fetch>) =>
    fetch(...param).then((res) => res.json());

  const { data: user } = useSWRImmutable<UserType>(fetchUserUrl, fetcher);

  return { user };
};
