import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import Productitem  from '../components/Productitem'

const Collection = () => {
const {products,search,showSearch} = useContext(ShopContext) 
const [showFilter, setShowFilter] = useState(false)
const [filterProducts,setFilterProducts] = useState([]);
const [Category,setCategory] = useState([]);
const [subCategory,setSubCategory] = useState([]);


const togglesCategory= (e) => {
  if (Category.includes(e.target.value)) {
        setCategory(prev=>prev.filter(item  => item !== e.target.value))
  }
  else {
    setCategory(prev=> [...prev,e.target.value])
  }
}


const togglesSubCategory = (e) => {
  if (subCategory.includes(e.target.value)) {
    setSubCategory(prev=>prev.filter(item  => item !== e.target.value))
}
else{
  setSubCategory(prev=> [...prev,e.target.value])
} 
}


const applyFilter = () => {
  let productsCopy = products.slice();

  if(showSearch && search) {
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  // Filter by category
  if (Category.length > 0) {
    productsCopy = productsCopy.filter(item => Category.includes(item.category)); // Use 'category'
  }

  // Filter by subcategory
  if (subCategory.length > 0) {
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
  }

  setFilterProducts(productsCopy); // Update filtered products
};

useEffect(() => {
      applyFilter();
},[Category,subCategory,search,showSearch])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter option */}
      <div className='min-w-60'>
       <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
       <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
       </p>
       {/* Category Filter */}
       <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' :'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
          <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Men'} onChange={togglesCategory} /> Men
          </p>
          <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Women'} onChange={togglesCategory} /> WoMen
          </p>
          <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Kids'}  onChange={togglesCategory}/> Kids
          </p>
        </div>
       </div>
       {/* Sub Category Filter */}
       <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' :'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-600'>
          <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Topwear'} onChange={togglesSubCategory}/> Topwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Bottomwear'} onChange={togglesSubCategory}/> Bottomwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3 ' type="checkbox" value={'Winterwear'} onChange={togglesSubCategory}/> Winterwear
          </p>
        </div>
       </div>
      </div>
    
    {/* right side */}
    <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
      <Title  text1={'ALL'} text2={'COLLECTION'}/>
      {/* Products sort */}
      
      </div>
      {/* map product */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index)=>(
            <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Collection