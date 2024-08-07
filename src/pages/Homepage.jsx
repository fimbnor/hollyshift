import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards';
import Positions from '../components/Positions';
import ViewAllJobs from '../components/ViewAllJobs';

const Homepage = () => {
  return (
    <>
        <Hero></Hero>
        <HomeCards></HomeCards>
        <Positions isHome={true}> </Positions>
        <ViewAllJobs></ViewAllJobs>
    </>
  )
}

export default Homepage