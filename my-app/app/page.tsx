import './home.css'
import Hero from '@/components/widgets/Hero'
import CoreTracks from '@/components/widgets/CoreTracks'
import SpecializedTracks from '@/components/widgets/SpecializedTracks'
export default function Home() {
  return (
   <main>
    <Hero/>
    <CoreTracks/>
    <SpecializedTracks/>
   </main>
  )
}
