import { useAllAssets } from "@/hook/useAllAssets";
import { DisplayAllAssets } from "./DisplayAllAssets";
import { AssetType } from "@/Type/Types";
import { Input } from "@/components/ui/input";
import { CommonHeading } from "@/SharedComponent/CommonHeading";
import {  useState } from "react";

import { SelectTrigger,Select, SelectContent } from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { useAxiosSecure } from "@/hook/useAxiosSecure";

export const RequestAssets = () => {
  const axiosSecure=useAxiosSecure()
  const [assetsData,isPending] = useAllAssets('public') 
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  //filter  functionality ------------------------
  const filterAssets = async (assetName?: string,status?:string | string) => {
    try {
      setError('')
      if (assetName) {
        const response = await axiosSecure.get(`/assets?name=${assetName}&availabilty=${status}&public=public`)
       
       if (response.data) {
           setData(response.data)
         }
      }
      else if (status) { 
        setValue(status)
        const response = await axiosSecure.get(`/assets?name=${assetName}&availabilty=${status}`)
       
       if (response.data) {
           setData(response.data)
         }
      }
      else {
        setError('')
        setValue('')

        setData(assetsData)
      }
    } catch (error:any) {
      console.log(error?.response?.data?.message)
      setError(error?.response?.data?.message)
    }
   
  }

  if (isPending) {
    return <div>loading.......</div>
  }
  const content = <div className="flex flex-col items-center dark:text-white">
    <h1 className="text-2xl uppercase font-medium leading-tight">Store house of Assets</h1>
    <p className="text-gray-800 dark:text-white">Find assets as your choice and neccesity. And use them carefully ,may be you need to return it to the company.</p>
  </div>
  return (
    <section className="container mx-auto space-y-10 py-10 dark:text-white">
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
              <span> {value ? <>{value}</>:'Filter by Stock'}</span>
                        </SelectTrigger>
                            <SelectContent>
                                <div className="flex flex-col gap-2">
                                    
                                <Button onClick={()=>filterAssets('','available')} className={`bg-white text-black hover:bg-primary hover:text-white w-full ${value=='available'?'bg-primary text-white':''}`}>Available</Button>
                                <Button onClick={()=>filterAssets('','outOfStock')} className={`bg-white text-black hover:bg-primary hover:text-white w-full ${value=='outOfStock'?'bg-primary text-white':''}`}>Out of stock</Button>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-2 xl:px-0">
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
