import { setDoc,doc } from 'firebase/firestore'
import Sidebar from '../../components/Sidebar'
import styles from './plans.module.scss'
import {
UserStar,User
} from 'lucide-react'
import { db,auth } from '../../firebase'

const TariffPlans=()=>{
const user = auth.currentUser;

    const tariffs = [
    {id:1,title:'USER',description:"You can: 1.create cards 2.communicate with AI 3.read articles 4.fill out your profile 5.see information about your activity"}
,{id:2,title:'ADMIN',description:"You can do everything a user can do, but you can also see other users' cards and profiles."}

]

const addAdmin = async () => {
      if (!user) {
    console.log("Нет текущего пользователя!");
    return;
  }
setDoc(doc(db, "users", user?.uid), { role: "admin" },{merge:true})
}



    return(
        <div className={styles.wrappertariff}>
            <div className={styles.sis}> <Sidebar/></div>
      
            {tariffs.map(i=>
                <div className={styles.tariffCard} key={i.id}>
                    <p>{i.title}</p>
                    {i.title =='ADMIN' ? <UserStar /> :<User />}
                    
                    <span>{i.description}</span>
                    {i.title =='ADMIN' ? <div><button onClick={addAdmin}>Купить</button><p>5.50$</p></div> :"Now"}
                </div>
                
            )}
      
        <div></div>
        </div>
    )
}
export default TariffPlans