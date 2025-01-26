import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const PackageChange = () => {
    const {id}=useParams()
    const [select,setSelect] =useState(`${id}`)
    const handlePurchase = (limit: number) => {
        setSelect(limit.toString())
        if (limit) {
            
        }
    };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center mt-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold text-center mb-6">Select a Package</h2>

            <div className="mb-4">
              <Button
                onClick={() => handlePurchase(5)} 
                className={`w-full bg-primary hover:bg-secondary text-white mb-2 ${select=='5' && "bg-secondary"}`}>
                5 Members for $5
              </Button>

              <Button 
                onClick={() => handlePurchase(10)} 
                className={`w-full bg-primary hover:bg-secondary text-white mb-2 ${select =='10'&& "bg-secondary"}`}>
                10 Members for $8
              </Button>

              <Button 
                onClick={() => handlePurchase(20)} 
                className={`w-full bg-primary hover:bg-secondary text-white mb-2 ${select =='20'&& "bg-secondary"}`}>
                20 Members for $15
            </Button>
            <div className="flex w-full justify-between gap-2">

              <Button 
                onClick={() => handlePurchase(20)} 
                className={`w-full bg-green-800 hover:bg-green-700 text-white  ${select =='20'&& "bg-secondary"}`}>
                Pay
            </Button>

              <Link to='/hr/addEmployee' className="w-full">
              <Button
                 className={`w-full bg-slate-500 hover:bg-slate-800 text-white `}>
                Back
              </Button>
            </Link>
            </div>
               
                          
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
