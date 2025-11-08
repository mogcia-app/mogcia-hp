declare module '@calcom/embed-react' {
  type CalUiEvent = 'ui'

  interface CalUiOptions {
    [key: string]: unknown
  }

  interface GetCalApiOptions {
    namespace: string
  }

  export function getCalApi(options: GetCalApiOptions): Promise<{
    (event: CalUiEvent, options?: CalUiOptions): void
  }>
}

