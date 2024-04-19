export type Theme = {
  brand: {
    primary: string
  }
  background: {
    primary: string
  }
  text: {
    primary: string
  }
  button: {
    primary: {
      text: string
      background: string
      loader: string
    }
    primaryDisabled: {
      text: string
      background: string
      loader: string
    }
    secondary: {
      text: string
      background: string
      loader: string
    }
    secondaryDisabled: {
      text: string
      background: string
      loader: string
    }
  }
}
