"use client"

import type { ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
}) {
  const { ref, inView } = useInView()

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}
