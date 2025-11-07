'use client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

export const Grid = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <BentoGrid>
        {gridItems.map
          ((item) => (
            <BentoGridItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              className={item.className}
              img={item.img}
              titleClassName={item.titleClassName}
              spareImg={item.spareImg}
            />
          ))}
      </BentoGrid>
    </section>

  )
}
