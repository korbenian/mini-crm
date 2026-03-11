
import { supabase } from '@/utils/supabase'
export default function useTasks(){
     const removeTask = async (id: string) => {
       const {error}=await supabase
       .from('leads')
       .delete()
       .eq('id',id)

       if(error) throw error
       window.location.reload()
      }
    
        
    
      const handleSave = async (id: string, title: string, deadline: string) => {
const {error}= await supabase
.from('leads')
.update({name:title,deadline:deadline})
.eq('id',id)
        if(error)throw error
      }

 const UpdateStatus  = async (id: string,newStatus:string) => {
      const {error}=await supabase
      .from('leads')
      .update({status:newStatus})
.eq('id',id)

if(error) throw error
      }



      return {removeTask,handleSave,UpdateStatus}
}

