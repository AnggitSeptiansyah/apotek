import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Supplier({suppliers, success}) {
    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Supplier
                    </h2>
                    <Link
                        href={route('suppliers.create')}
                        className='py-2 px-4 bg-green-500 hover:bg-green-600 rounded-md text-white'>
                        Tambahkan Supplier
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {success && (
                    <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                        {success}
                    </div>)}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 text-uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">                                            
                                            <th className="px-3 py-3">Name</th>
                                            <th className="px-3 py-3">Address</th>
                                            <th className="px-3 py-3">Phone Number</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {suppliers.data.map(supplier => (

                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-3 py-2 text-nowrap">{supplier.name}</td>
                                                <td className="px-3 py-2 text-nowrap">{supplier.address}</td>
                                                <td className="px-3 py-2 text-nowrap">{supplier.phone}</td>
                                            </tr>
                                        ))}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
