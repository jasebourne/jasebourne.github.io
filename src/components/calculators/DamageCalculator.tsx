import React, { useMemo, useState } from 'react'
export default function DamageCalculator(){
  const [base,setBase]=useState(1000);const [atk,setAtk]=useState(120)
  const total=useMemo(()=>base*(1+atk/100),[base,atk])
  return(<div><h3>Damage</h3><input value={base} onChange={e=>setBase(Number(e.target.value))}/><input value={atk} onChange={e=>setAtk(Number(e.target.value))}/><div>{total}</div></div>)
}