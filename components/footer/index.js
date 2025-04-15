import { Link } from 'components/link'
import s from './footer.module.scss'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="layout-block">
        <h2>
          <Link href="mailto:hello@darkroom.engineering">contact</Link>
        </h2>
      </div>
    </footer>
  )
}
