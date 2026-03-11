'use client'
//C:\Users\User\mini-crm\app\[locale]\AllCards\page.tsx
import AllCards from "./AllCards";
import { useTranslations } from 'next-intl'
export default function AllCardsPage(){
  
     const  t  = useTranslations()
    
    return <AllCards/>
}