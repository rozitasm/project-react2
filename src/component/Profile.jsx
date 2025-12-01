import { useContext, useState } from "react";
import { productcontext } from "./Context";
import Header from "./Header";
import Footer from "./Footer";
import { HomeIcon, ShoppingCartIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Account from "./profile/Account";
import Order from "./profile/Order";
import Dashboard from "./profile/Dashboard";

function Profile() {
  const { user } = useContext(productcontext);
  const [panel,setPanel]=useState('Dashboard')

  const datapanel=(e)=>{
    setPanel(e.target.innerText)
    debugger

  }

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <section className="flex flex-col  md:flex-row max-w-6xl mx-auto mt-8 px-4 gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4 bg-white shadow-lg rounded-lg p-4">
          <div className="flex flex-col items-center">
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />
            <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>

          <ul className="mt-6 space-y-2">
            <li onClick={datapanel} className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
              <HomeIcon className="w-5 h-5 text-gray-600" />
              <span>Dashboard</span>
            </li>
            <li onClick={datapanel} className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
              <ShoppingCartIcon className="w-5 h-5 text-gray-600" />
              <span>Orders</span>
            </li>
            <li onClick={datapanel} className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Cog6ToothIcon className="w-5 h-5 text-gray-600" />
              <span>Account Settings</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 ">Welcome, {user.name}</h2>
        
           {panel=='Dashboard' ? <Dashboard/> : panel=='Orders'? <Order/>: panel=='Account Settings'?<Account/>: ''}
        
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Profile;
