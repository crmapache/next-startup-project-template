class Query {
  headers: HeadersInit

  constructor(headers: HeadersInit) {
    this.headers = headers
  }

  async get(url: string, headers?: HeadersInit) {
    return fetch(url, {
      method: 'GET',
      headers: { ...this.headers, ...headers },
    })
  }

  async post(url: string, body: any, headers?: HeadersInit) {
    return fetch(url, {
      method: 'POST',
      headers: { ...this.headers, ...headers },
      body: JSON.stringify(body),
    })
  }
}

export const query = new Query({
  'Content-Type': 'application/json',
})
