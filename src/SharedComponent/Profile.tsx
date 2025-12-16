import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hook/useAuth';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Paths from '@/base/constant/Paths';
const ProfilePage = () => {
  const { user,updateUserAuth,setLoading} = useAuth()
const name = user?.displayName as string |undefined
  const email = user?.email as string | undefined
  const navigate=useNavigate()
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = e.currentTarget?.userName.value;
    console.log(name)
    const profile = { displayName: name }
    updateUserAuth(profile)
      .then(() => {
        setLoading(false)
        toast.success('Update successfully')
        navigate(Paths.profile)
      })
      .catch(e => toast.error(e.message))
    
  };

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 dark:bg-slate-700">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-48 flex items-center justify-center brightness-75"
        style={{
          backgroundImage: 'url(/images/about/about.jpg)',
        }}
      >
        <h1 className="uppercase text-4xl font-bold text-black">Profile Page</h1>
      </div>
      {/* Profile Card Section */}
      <div className="flex justify-center mt-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold text-center mb-6">User Information</h2>

            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-600 mb-2">Full Name</label>
              <Input
                id="fullName"
                type="text"
                defaultValue={name}
                readOnly
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <Input
                id="email"
                type="email"
                defaultValue={email}
                readOnly
                className="w-full bg-gray-100 dark:bg-slate-900 cursor-not-allowed"
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Update
                </Button>
              </DialogTrigger>
             <DialogContent className="w-full p-5">
            <DialogHeader>
            <DialogTitle>Edit Asset Information</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 py-4 ">
                <div className="flex flex-col  gap-2">
                    <Label htmlFor="notes" className="text-left">
                    Your Name :
                    </Label>
                    <input id="notes" name='userName' defaultValue={name} type="text"  className="border-2" />
                </div>
                {/* <div className="flex flex-col  gap-2">
                    <Label htmlFor="notes" className="text-left">
                  Your Email :
                    </Label>
                    <input id="notes" name='email' type="email" defaultValue={email} className="border-2" />
                </div> */}
                <DialogFooter>
                    <Button type="submit">Update Profile</Button>
                    <DialogClose asChild>
                        <Button  type="button" className="bg-gray-500"> Close </Button>
                    </DialogClose>
                    
                </DialogFooter>
            </form>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
