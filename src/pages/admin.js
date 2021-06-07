import {createBillingPlan} from '../utils/bllingPlan'
import {createSubscription} from '../utils/subscription'


const createPlan = () => {
  createBillingPlan();
}

const subscribe = () => {
  createSubscription()
}
const Admin = () => {
  return (
    <div>
      <div>
        <button onClick ={createPlan}>Create plan</button>
      </div>
   <div>
    <button onClick ={subscribe}>Subscribe</button>
    </div>
    </div>

  )
}

export default Admin