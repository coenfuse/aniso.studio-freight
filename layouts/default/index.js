import { useIsTouchDevice } from '@studio-freight/hamo'
import { CustomHead } from 'components/custom-head'

export function Layout({
  seo = {
    title: 'Aniso - ASCII Tool',
    description:
      'An open-source ASCII tool built by darkroom.engineering to generate and customize character-based imagery.',
    image: '',
    keywords: ['ascii', 'renderer', 'webgl', 'react-three-fiber'],
  },
  children,
  theme = 'light',
}) {
  const isTouchDevice = useIsTouchDevice()
  return (
    <>
      <CustomHead {...seo} />
      <div className={`theme-${theme}`}>{children}</div>
    </>
  )
}
