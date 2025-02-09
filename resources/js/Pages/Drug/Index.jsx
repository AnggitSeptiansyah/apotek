import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function DrugCategory({drugs, success}) {
    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Obat
                    </h2>
                    <Link
                        href={route('drugcategories.create')}
                        className='py-2 px-4 bg-green-500 hover:bg-green-600 rounded-md text-white'>
                        Tambahkan Obat
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
                                            <th className="px-3 py-3">Nama</th>
                                            <th className="px-3 py-3">Kategori Obat</th>
                                            <th className="px-3 py-3">Harga</th>
                                            <th className="px-3 py-3">Kadaluarsa</th>
                                            <th className="px-3 py-3">Status</th>
                                            <th className="px-3 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {drugs.data.map(drug => (

                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={drug.id}>
                                                <td className="px-3 py-2 text-nowrap">{drug.name}</td>
                                                <td className="px-3 py-2 text-nowrap">{drug.drugCategory.name}</td>
                                                <td className="px-3 py-2 text-nowrap">{drug.price}</td>
                                                <td className="px-3 py-2 text-nowrap">{drug.expiration_date}</td>
                                                
                                                <td className="px-3 py-2 text-nowrap">
                                                    <Link href={route('drugs.edit', drug.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                                                        Edit
                                                    </Link>
                                                    <button 
                                                        onClick={e => deleteDrug(drug)}
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
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
