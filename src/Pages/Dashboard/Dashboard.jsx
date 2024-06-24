import Layout from '../../Components/Layout/Layout';
import {Orders} from '../../Components/Order/Orders'
// import{ Orders} from '../../Components/Orders/Orders';
// import { Statistics } from '../../Components/Statistic/Statistics'
import {Statistics} from '../../Components/Statistic/Statistics'
// import { cardsData, groupNumber } from '../../data';
import {cardsData , groupNumber  } from '../../data' ;
import css from './Dashboard.module.css';

const Dashboard = () => {
  
  return <div className={css.container} >
    {/* <Layout/> */}

    {/* left side  */}
     <div className={css.dashboard}>
      
       <div className={`${css.dashboardHead} theme-container`}>
         <div className={css.head}>
          <span>Dashboard</span>

          <div className={css.durationButton}>
            <select>
              <option value="">1 week</option>
              <option value="">1 month</option>
              <option value="">1 year</option>
            </select>
          </div>
        </div>
           <div className={css.cards}>
            {
              cardsData.map((card, index)=> (
                <div className={css.card}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className={css.cardAmount}>
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      <Statistics/>
     </div>

     {/* <div className={css.Orders}> */}
      <Orders/>
     {/* </div> */}
   </div>
}

export default Dashboard