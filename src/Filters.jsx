import { useState } from 'react'

export default function Filters({data}) {
 const [filter,setFilter]=useState('')
 const [drop,setDrop]=useState('')
 const [stock,setStock]=useState(false)

  const categories=[...new Set(data.map(items=>items.category))]

  const filteredata=data.filter(items=>
  {
    const searchFilter=items.name.toLowerCase().includes(filter.toLowerCase())
    const dropFilter=drop?items.category===drop:true
    const stockFilter=stock?items.inStock:true

    return searchFilter && dropFilter && stockFilter;
  } 
  )

  return (
    <div>
        <input type="text" value={filter} onChange={(e)=>setFilter(e.target.value)} placeholder='search...' />
        <select value={drop} onChange={(e)=>setDrop(e.target.value)} placeholder="drop">
        <option value="">All Categories</option>
           {categories.map((item,index)=>
           <option key={index}>{item}</option>)}
        </select>
        <label><input type="checkbox" value={stock} onChange={()=>setStock(!stock)}/></label>

        <ul>
           {filteredata.length>0?
           (filteredata.map((item)=>(
        <li key={item.id}>{item.name}-{item.category}-{item.inStock?"": <span>outofstock</span>}</li>))
        ):(
        <p> items not available </p>)
        }
        </ul>
       
    </div> 
  )
}
