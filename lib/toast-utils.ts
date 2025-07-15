import { toast } from "@/hooks/use-toast"

let toastRef: typeof toast | null = null

export const setToastRef = (ref: typeof toast | null) => {
  toastRef = ref
}

export const showToast = (options: Parameters<typeof toast>[0]) => {
  if (toastRef) {
    toastRef(options)
  }
}