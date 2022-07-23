import React, { useState } from 'react'
import {AiOutlineStar} from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import CoinItem from './CoinItem';

const CoinSearch = ({coins}) => {
    const [SearchText,setSearchText] = useState('')
    // console.log(coins )
  return (
    <div className='rounded-div my-4'>
         <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
             <h1 className='text-3xl font-bold my-2'>Search Crypto</h1>
             <form>
                 <input 
                 onChange={(e)=>setSearchText(e.target.value)} 
                 className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl '  
                 type='text' 
                 placeholder='Search a coin' />
             </form>
         </div>
         <table>
             <thead> 
                 <tr>
                     <th></th>
                     <th>#</th>
                     <th>coin</th>
                     <th></th>
                     <th>price</th>
                     <th>24h</th>
                     <th>24h volume</th>
                     <th>mkt</th>
                     <th>last 7 Days</th>
                 </tr>
             </thead>
             <tbody>
                 {coins.filter((value)=>{
                     if (SearchText===''){
                         return value
                     }else if(
                          value.name.toLowerCase().includes(SearchText.toLowerCase())
                     ){
                         return value
                     }
                 }).map((coin)=>(
                     <CoinItem key={coin.id} coin={coin}/>
                 ))}
             </tbody>
         </table>
    </div>
  )
}

export default CoinSearch