import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function DrugCategory({drugCategory}) {
    
    const {data, setData, post, errors, reset} = useForm({
        name: drugCategory.data.name,
        _method: 'PUT'
    })

    const updateDrugCategory = (e) => {
        e.preventDefault()

        post(route('drugcategories.update', drugCategory.data.id))
    }

    return (        
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Edit Kategori Obat "{drugCategory.data.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={updateDrugCategory} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <div>
                                    <InputLabel htmlFor="drugcategories" value="Nama Kategori Obat" />
                                    <TextInput 
                                        id="drugcategories"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        placeholder="Masukkan nama kategori obat"
                                        onChange={e => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className="mt-4 text-right">
                                    <Link href={route('drugcategories.index')} className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
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
