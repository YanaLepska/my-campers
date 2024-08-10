import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";


const AppBar = () => {
  return (
      <header className={css.header}>
        <nav className={css.navLinks}>
      <AuthNav />
     </nav>
      </header>
  )
}

export default AppBar