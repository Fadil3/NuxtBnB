export default function (context, inject) {
  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID
  const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY

  inject('dataApi', { getHome })

  async function getHome(id) {
    const response = await fetch(
      `
    https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/homes/${id}
    `,
      {
        headers: {
          'X-Algolia-API-Key': ALGOLIA_API_KEY,
          'X-Algolia-Application-Id': ALGOLIA_APP_ID,
        },
      }
    )

    const json = await response.json()
    return json
  }
}
