import { Product } from '@/Dashboard/interfaces/product';
import { BiPencil } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';


interface Props {
  products: Product[];
  handleUpdate: (product: Product) => void;
  handleDelete: (id: string) => void;
}

export function ProductList({ products, handleUpdate, handleDelete }: Props) {
  return (
    <table className='w-full table-fixed pb-10 overflow-auto'>
      <thead>
        <tr className='border-b border-b-neutral-400/80 [&>*]:font-medium [&>*]:ps-2'>
          <th className='w-[5%]'>#</th>
          <th className='w-[15%]'>Producto</th>
          <th className='w-[35%]'>Descripción</th>
          <th className='w-[15%]'>Categoria</th>
          <th className='w-[10%]'>Cantidad</th>
          <th className='w-[10%]'>Precio</th>
          <th className='w-[10%]'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          products.map((product, i) => (
            <tr
              key={product._id}
              className={`[&>*]:py-2 [&>*]:ps-2 border-b [&>*]:text-center w-full 
                ${!product.inStock ? 'bg-red-200' : ''}
                ${
                  +product.inStock < 10 && +product.inStock > 0
                    ? 'bg-amber-100'
                    : ''
                }
                `}
            >
              <td>{i + 1}</td>
              <td>{product.item}</td>
              <td>
                <p className='truncate'>{product.description}</p>
              </td>
              <td>{product.category}</td>
              <td>{product.inStock}</td>
              <td>
                $ {product.price.toLocaleString()}
              </td>
              <td className='flex justify-center gap-2'>
                <button
                  className='p-1.5 bg-orange-500 rounded-md text-white hover:bg-orange-600 transition-colors'
                  onClick={() => handleUpdate(product)}
                >
                  <BiPencil className='size-5' />
                </button>
                <button
                  className='p-1.5 bg-red-500 rounded-md text-white hover:bg-red-600 transition-colors'
                  onClick={() => handleDelete(product._id!)}
                >
                  <MdDeleteOutline className='size-5' />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
