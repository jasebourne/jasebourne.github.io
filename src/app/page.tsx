import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DamageCalculator from '@/components/calculators/DamageCalculator'

export default function Page(){
  return (<main className='max-w-6xl mx-auto p-6'><Header/><Hero/><section className='mt-8'><DamageCalculator/></section></main>)
}