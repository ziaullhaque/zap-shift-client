import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loading from '../components/Loading/Loading';
import Forbidden from '../components/Forbidden/Forbidden';

const RiderRoute = ({ children }) => {
  const { loading,user } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || !user || roleLoading) {
    return (
      <div className="">
        <Loading></Loading>
      </div>
    );
  }

  if (role !== "rider") {
    return <Forbidden />;
  }

  return children;
};

export default RiderRoute;