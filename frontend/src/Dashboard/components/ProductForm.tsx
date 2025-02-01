import type { Product } from '@/Dashboard/interfaces/product';
import Swal from 'sweetalert2';
import categories from '@/categories.json'

interface Props {
  product?: Product;
  save: (product: Product, id: string) => Promise<void>;
}

export function ProductForm({ product, save }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { item, description, inStock, price, category } = Object.fromEntries(
      new window.FormData(form)
    );
    const productToSave = {
      item,
      description,
      inStock,
      price,
      category,
    } as Product;
    if (productToSave?._id !== '') {
      save(productToSave, product?._id ?? '');
    } else {
      save(productToSave, '');
    }

    Swal.close();
  };

  return (
    <form
      className='flex flex-col items-start gap-4 p-5 pb-3'
      onSubmit={handleSubmit}
    >
      <div className='w-full flex gap-4 justify-between'>
        <label className='flex flex-col w-full text-start'>
          Producto
          <input
            className='px-2 py-1 w-full shadow rounded-md'
            type='text'
            name='item'
            id='item'
            defaultValue={product ? product.item : ''}
            required
          />
        </label>
        <label className='flex flex-col w-full text-start'>
          Categoría
          <select
            className='px-2 py-1 w-full shadow rounded-md'
            name='category'
            id='category'
            defaultValue={product ? product.category : ''}
            required
          >
            <option value=''>Seleccione...</option>
            {categories.sort().map((category, i) => (
              <option key={`${category}-${i+1}`} value={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
      <div className='w-full flex gap-4 justify-between'>
        <label className='flex flex-col text-start'>
          Cantidad
          <input
            className='px-2 py-1 shadow rounded-md w-full'
            type='number'
            name='inStock'
            defaultValue={product ? product.inStock : ''}
            required
          />
        </label>
        <label className='flex flex-col text-start'>
          Precio por unidad
          <input
            className='px-2 py-1 shadow rounded-md w-full'
            type='number'
            step='0.01'
            name='price'
            defaultValue={product ? product.price : ''}
            required
          />
        </label>
      </div>
      <label className='flex flex-col w-full text-start'>
        Descripción
        <textarea
          className='px-2 py-1 shadow'
          name='description'
          id='description'
          defaultValue={product ? product.description : ''}
          required
        ></textarea>
      </label>
      <div className='space-x-2 self-end mt-2'>
        <button
          type='button'
          className='px-4 py-2 bg-red-500 rounded-md text-white font-medium hover:bg-red-600 transition-colors active:bg-red-400'
          onClick={() => Swal.close()}
        >
          Cancelar
        </button>
        <button className='px-4 py-2 bg-slate-700 rounded-md text-white font-medium hover:bg-slate-800 transition-colors active:bg-slate-600'>
          Enviar
        </button>
      </div>
    </form>
  );
}
