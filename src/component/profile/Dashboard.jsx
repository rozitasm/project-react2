import { UserIcon, ShoppingCartIcon, CreditCardIcon } from '@heroicons/react/24/outline';

function Dashboard() {
  return (
    <section className="mx-auto max-w-6xl mt-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
      <p className="text-gray-600 text-center mb-8">
        Welcome to your dashboard! Here you will see your account summary.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <UserIcon className="w-12 h-12 text-indigo-500 mb-4" />
          <h3 className="text-lg font-semibold">Profile</h3>
          <p className="text-gray-500 text-sm mt-1">View and update your account details</p>
        </div>

        {/* Orders */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <ShoppingCartIcon className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold">Orders</h3>
          <p className="text-gray-500 text-sm mt-1">Check your order history and status</p>
        </div>

        {/* Payments */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <CreditCardIcon className="w-12 h-12 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold">Payments</h3>
          <p className="text-gray-500 text-sm mt-1">Manage your payment methods</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
