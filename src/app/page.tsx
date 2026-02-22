import { HomeSection } from '@/components/sections/HomeSection'
import { StorySection } from '@/components/sections/StorySection'
import { ProgramSection } from '@/components/sections/ProgramSection'
import { RsvpSection } from '@/components/sections/RsvpSection'
import { TransportSection } from '@/components/sections/TransportSection'
import { GiftListSection } from '@/components/sections/GiftListSection'

export default function Home() {
  return (
    <>
      <HomeSection />
      <StorySection />
      <ProgramSection />
      <RsvpSection />
      <TransportSection />
      <GiftListSection />
    </>
  )
}
