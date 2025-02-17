import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Drug({drugCategories, drug, stock}) {
    const {data, setData, post, errors, reset} = useForm({
        name: drug.data.name,
        expiration_date: drug.data.expiration_date,
        price: drug.data.price,
        drug_category_id: drug.data.category_id,
        drugCategory: drug.data.drugCategory.name,
        quantity: drug.data.stock.quantity,
        _method: 'PUT'
    })

    const updateDrug = (e) => {
        e.preventDefault()

        post(route('drugs.update', drug.data.id))
    }

    return (        
        <AuthenticatedLayout
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Edit Obat "{drug.data.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form onSubmit={updateDrug} className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                <div>
                                    <InputLabel htmlFor="drug" value="Nama Obat" />
                                    <TextInput 
                                        id="drug"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        placeholder="Masukkan nama obat"
                                        onChange={e => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className='mt-4'>
                                    <InputLabel htmlFor="expiration_date" value="Tanggal Kadaluarsa" />
                                    <TextInput 
                                        id="expiration_date"
                                        type="date"
                                        name="expiration_date"
                                        value={data.expiration_date}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        placeholder="Masukkan nama obat"
                                        onChange={e => setData('expiration_date', e.target.value)}
                                    />
                                    <InputError message={errors.expiration_date} className="mt-2" />
                                </div>
                                <div className='mt-4'>
                                    <InputLabel htmlFor="price" value="Harga Obat" />
                                    <TextInput 
                                        id="price"
                                        type="text"
                                        name="price"
                                        value={data.price}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        placeholder="Masukkan harga obat"
                                        onChange={e => setData('price', e.target.value)}
                                    />
                                    <InputError message={errors.price} className="mt-2" />
                                </div>
                                <div className='mt-4'>
                                    <InputLabel htmlFor="quantity" value="Quantity" />
                                    <TextInput 
                                        id="quantity"
                                        type="text"
                                        name="quantity"
                                        value={data.quantity}
                                        isFocused={true}
                                        className="mt-1 block w-full"
                                        placeholder="Masukkan jumlah obat"
                                        onChange={e => setData('quantity', e.target.value)}
                                    />
                                    <InputError message={errors.price} className="mt-2" />
                                </div>
                                <div className='mt-4'>
                                    <InputLabel htmlFor="drugCategory" value="Kategori Obat" />
                                    <SelectInput 
                                        id="drugCategory"
                                        name="drug_category_id"
                                        className="mt-1 block w-full"
                                        value={data.drug_category_id}
                                        onChange={e => setData('drug_category_id', e.target.value)}
                                    >
                                        <option value="">Pilih Kategori Obat</option>
                                        {drugCategories.data.map(drugCategory => (
                                            <option 
                                                value={drugCategory.id} 
                                                key={drugCategory.id}
                                            >
                                                    {drugCategory.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError message={errors.price} className="mt-2" />
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
