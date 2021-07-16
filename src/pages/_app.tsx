import { CombinedProviders } from '../contexts/combined.context'
import { Particles } from '../components/particles/particles.component';
import { MusicPlayer } from '../components/music-player/music-player.component';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return (
    <CombinedProviders>
      <Component {...pageProps} />
      <Particles />
      <MusicPlayer />
    </CombinedProviders>
  )
}

export default MyApp
