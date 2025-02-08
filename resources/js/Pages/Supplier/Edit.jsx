import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Supplier({supplier}) {
    const {data, setData, post, errors, reset} = useForm({
        name: supplier.data.name,
        address: supplier.data.address,
        phone: supplier.data.phone,
        _method: 'PUT'
    })

    const updateSupplier = (e) => {
        e.preventDefault()

        post(route('suppliers.update', supplier.data.id))
    }

    return (        
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Edit Supplier "{supplier.data.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={updateSupplier} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <div>
                                    <InputLabel htmlFor="supplier_name" value="Nama Supplier" />
                                    <TextInput 
                                        id="supplier_name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        placeholder="Masukkan nama supplier"
                                        onChange={e => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="address" value="Alamat" />
                                    <TextInput 
                                        id="address"
                                        type="text"
                                        name="address"
                                        value={data.address}
                                        placeholder="Masukkan alamat supplier"
                                        className="mt-1 block w-full"
                                        onChange={e => setData('address', e.target.value)}
                                    />
                                    <InputError message={errors.address} className="mt-2" />
                                </div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="phone" value="No. Telp/HP" />
                                    <TextInput 
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        placeholder="Masukkan nomor telp/hp supplier"
                                        value={data.phone}
                                        className="mt-1 block w-full"
                                        onChange={e => setData('phone', e.target.value)}
                                    />
                                    <InputError message={errors.phone} className="mt-2" />
                                </div>
                                
                                <div className="mt-4 text-right">
                                    <Link href={route('suppliers.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                                        Cancel
                                    </Link>
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                        Submit
                                    </button>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
