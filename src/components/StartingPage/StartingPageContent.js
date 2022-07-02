import { Link } from 'react-router-dom'
import classes from './StartingPageContent.module.css'

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <h1>Welcome to My shopping app!</h1>
      <Link to={'/products'}>Start Shopping!</Link>
    </section>
  )
}

export default StartingPageContent
