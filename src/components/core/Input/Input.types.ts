export type InputProps = {
  value: string
  onChange: (value: string) => void
  placeholder: string
  error?: string
  type?: HTMLInputElement['type']
}
