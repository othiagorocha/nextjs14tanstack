"use client";

import { User } from "@/types/User";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface UsersTableProps {}

export const UsersTable: FC<UsersTableProps> = ({}) => {
  const { data, isLoading, isSuccess, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });
  console.log(data);
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
