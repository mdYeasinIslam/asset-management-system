
 type ErrorType = {
    data: string,
    status: number
    statusText: string
}
import { Button } from "@/components/ui/button";
import { useUsersData } from "@/hook/useUsersData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {data,status,statusText} = useRouteError() as ErrorType
  const [ usersData ] =useUsersData()
  const role = usersData?.role

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 p-6">
      {/* Animated Error Code */}
      <motion.h1 
        className="text-6xl font-bold text-red-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {status}
      </motion.h1>
      
      {/* Error Message */}
      <p>{statusText}</p>
                <p>{data}</p>
      
      {/* Navigate Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link to={`${role !== undefined?`${role=='Admin'? '/hr/hrHome': '/employee/eHome'}`:'/'}`} >
        <Button 
          variant="dark" 
          color="primary" 
          
        >
          Go to Home
        </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
