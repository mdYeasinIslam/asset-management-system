const Paths = {
  root: "/",
  public: {
    about: "/about",
    contact: "/contact",
  },
  auth: {
    signIn: "/signIn",
    asEmployee: "/asEmployee",
    asHr: "/asHr",
    },
  profile:'/profile',
  employee: {
    overView: "/employee",
    myAssets: "/employee/myAssets",
    requestForAsset: "/employee/requestForAsset",
  },
  admin: {
    overView: "/admin",
    assetList: "/admin/assetList",
    addAsset: "/admin/assetList",
    employeeList: "/admin/employeeList",
    allRequest: "/admin/allRequest",
    addEmployee: "/admin/addEmployee",
    payment: "/admin/payment",
    packageChange: "/admin/addEmployee/packageChange/:id",
  },
};
export default Paths