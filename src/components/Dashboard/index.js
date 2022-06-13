import { useAuth } from '../../context/auth'
import styles from './Dashboard.module.css';


export const Dashboard = () => {
  const auth = useAuth()
  return (
    <div className={styles.mainContent}>
      Welcome {auth.user}
    </div>
  )
}
