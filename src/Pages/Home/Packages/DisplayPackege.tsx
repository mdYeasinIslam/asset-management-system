import {
  Card,
    CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type PkgType = {
    pkg: {
         id: number
      title:string
      price: string
      description:string
    }
}

export const DisplayPackege = ({pkg}:PkgType) => {
  return (
    <Card className="bg-gray-100 dark:bg-[#1b2330]  p-1 md:p-2 rounded-xl duration-500 transition-transform hover:scale-95  shadow-md hover:shadow-lg  border border-white">
      <CardHeader>
        <CardTitle className="text-2xl w-full font-semibold dark:text-white text-gray-800 ">
          {pkg.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-blue-600 ">{pkg.price}</p>
        <p className="text-gray-600 dark:text-white">{pkg.description}</p>
      </CardContent>
      {/* <CardFooter className='flex justify-center'>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
        </CardFooter> */}
    </Card>
  );
}
