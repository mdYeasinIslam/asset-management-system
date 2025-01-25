import { useAllAssets } from "@/hook/useAllAssets";
import { DisplayAllAssets } from "./DisplayAllAssets";
import { AssetType } from "@/Type/Types";
import { Input } from "@/components/ui/input";
import { CommonHeading } from "@/SharedComponent/CommonHeading";
import { useAxiosPublic } from "@/hook/useAxiosPublic";
import { useState } from "react";

import { SelectTrigger,Select, SelectContent } from "@/components/ui/select"
import { Button } from "@/components/ui/button";

export const RequestAssets = () => {
  const axiosPublic =useAxiosPublic()
  const [assetsData] = useAllAssets() 
  const [data, setData] = useState([])
  const [error,setError] =useState('')
  //filter  functionality ------------------------
  const filterAssets = async (assetName?: string,status?:string | string) => {
    console.log(assetName)
    try {
      setError('')
       const response = await axiosPublic.get(`/assets?name=${assetName}&availabilty=${status}`)
      console.log(response.data)
    if (response.data) {
        setData(response.data)
      }
    } catch (error:any) {
      console.log(error?.response?.data?.message)
      setError(error?.response?.data?.message)
    }
   
  }
 
  const content = <div className="flex flex-col items-center">
    <h1 className="text-2xl uppercase font-medium leading-tight">Store house of Assets</h1>
    <p className="text-gray-800">Find assets as your choice and neccesity. And use them carefully ,may be you need to return it to the company.</p>
  </div>
  return (
    <section className="container mx-auto space-y-10 my-10">
      <CommonHeading content={content} />
      <div className="flex flex-col md:flex-row gap-2">
      {/* search section */}
         <Input 
          placeholder="Search by name..."
          onChange={(e)=>filterAssets(e.target.value,)}
          className="max-w-sm"
        />
        {/* filter: base on stock */}
          <div>
              <Select
                    >
                        <SelectTrigger className="max-w-lg md:max-w-xs">
                        <span> Filter by Stock</span>
                        </SelectTrigger>
                            <SelectContent>
                                <div className="flex flex-col gap-2">
                                    
                                <Button onClick={()=>filterAssets('','available')} className="bg-white text-black hover:bg-primary hover:text-white w-full">Available</Button>
                                <Button onClick={()=>filterAssets('','outOfStock')} className="bg-white text-black hover:bg-primary hover:text-white w-full">Out of stock</Button>
                                <Button onClick={()=>filterAssets('','')}  className="bg-white text-black hover:bg-primary hover:text-white w-full">Show all</Button>
                                </div>
                                
                        </SelectContent>
              </Select>    
          </div>    
      </div>

     
        {
          error?.length ?
            <div className="text-3xl font-semibold ">
              {error}
            </div>
            :
            <div className="grid grid-cols-4 gap-5">
              {
                data?.length ? 
                  <>
                    {
                      data?.map((assets:AssetType)=><DisplayAllAssets key={assets._id} assets={assets} />)
                    }
                  </>
                  :
                  <>
                    {
                    assetsData?.map((assets:AssetType)=><DisplayAllAssets key={assets._id} assets={assets} />)
                  }
                  </>
              }
            </div>
        }
     
    </section>
  )
}
