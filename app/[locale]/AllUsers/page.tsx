'use client'
//C:\Users\User\mini-crm\app\[locale]\AllUsers\page.tsx
import AllUsers from "./users";
import { useRenderProfile } from '../hooks/useProfile'
import useAuth from "../hooks/useAuth";
import { useTranslations } from 'next-intl'
export default function AllUsersPage(){
    const {  user , loading:authLoading,userId} = useAuth()
 const { profileData }=useRenderProfile()

 const  t  = useTranslations()



  return  <AllUsers/>
}