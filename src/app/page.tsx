import Community from '@/components/Community'
import Hero from '@/components/Hero'
import Problems from '@/components/Problems'
import Tools from '@/components/Tools'
import Workflow from '@/components/Workflow'
import WorkingTime from '@/components/WorkingTime'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <WorkingTime />
      <Tools />
      <Problems />
      <Workflow />
      <Community />
    </div>
  )
}

export default page
