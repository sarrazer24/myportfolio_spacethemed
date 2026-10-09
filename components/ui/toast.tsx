import type * as React from "react"

export type ToastActionElement = React.ReactElement

export type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
