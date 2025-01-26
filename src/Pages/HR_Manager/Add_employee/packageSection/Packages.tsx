import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useUsersData } from "@/hook/useUsersData"
import { Link } from "react-router-dom"

export const Packages = () => {
    const [usersData] = useUsersData()
    const selectedPackge = usersData.userInfo[0].package
  return (
    <div className=" bg-gray-100 py-9">
      <div className="flex justify-center">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold text-center mb-6">Package Details</h2>
            {
            
            }
            <div className="mb-4">
              <p className="text-gray-600">Employee Count: <span className="font-bold">{selectedPackge.split(' ')[0]}</span></p>
            </div>
            <Link to={`/hr/addEmployee/packageChange/${10}`}>
                <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Increase Limit
                </Button>
            </Link>
          </CardContent>
        </Card>
       </div>
          
    </div>
  )
}
