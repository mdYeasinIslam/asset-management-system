import { Navigate, useLocation } from "react-router-dom";

import { ChildrenType } from "../Type/Types";
import { useAuth } from "@/hook/useAuth";
import Loader from "@/SharedComponent/Loader";

export const PrivateRoot = ({ children }: ChildrenType) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className=" flex flex-col items-center justify-center gap-4 space-y-5 mt-10">
        <Loader/>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signIn"} state={{ pathname: location.pathname }} replace />
  );
};
