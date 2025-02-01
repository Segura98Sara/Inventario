import { IoMdAdd } from 'react-icons/io';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { useProducts } from '@/Dashboard/hooks/useProducts';
import { Product } from '@/Dashboard/interfaces/product';
import { ProductForm } from './ProductForm';
import { ProductList } from './ProductList';

export default function Inventory() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const MySwal = withReactContent(Swal);

  const handleAdd = () => {
    MySwal.fire({
      html: <ProductForm save={addProduct} />,
      showConfirmButton: false,
    });
  };

  const handleUpdate = (product: Product) => {
    MySwal.fire({
      html: <ProductForm product={product} save={updateProduct} />,
      showConfirmButton: false,
    });
  };

  const handleDelete = (id: string) => {
    deleteProduct(id);
  };

  return (
    <div className='flex flex-col size-full p-10 pt-4 text-slate-700'>
      <header className='flex justify-between px-5 py-1'>
        <h2 className='text-2xl'>Inventario</h2>
        <ul className='flex gap-2'>
          <li>
            <button className='px-3 py-1 bg-red-500 rounded-md text-white hidden items-center gap-1'>
              <MdDeleteOutline className='size-5' />
              <span className='pe-1'>Borrar</span>
            </button>
          </li>
          <li>
            <button
              className='px-3 py-1 bg-slate-600 rounded-md text-white flex items-center gap-1 hover:bg-slate-700 transition-colors'
              onClick={handleAdd}
            >
              <IoMdAdd className='size-5' />
              <span className='pe-1'>Agregar</span>
            </button>
          </li>
        </ul>
      </header>
      <main className='h-3/4 mt-5 overflow-auto scrollbar-thin'>
        <ProductList
          products={products}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}
