export default function (context, inject) {
  const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID
  const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY
  const headers = {
    'X-Algolia-API-Key': ALGOLIA_API_KEY,
    'X-Algolia-Application-Id': ALGOLIA_APP_ID,
  }

  inject('dataApi', { getHome })

  async function getHome(id) {
    try {
      return unWrap(
        await fetch(
          `https://${ALGOLIA_APP_ID}-dsn.algolia.net/1/indexes/homes/${id}`,
          { headers }
        )
      )
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function unWrap(response) {
    const json = await response.json()
    const { ok, status, statusText } = response
    return {
      json,
      ok,
      status,
      statusText,
    }
  }

  function getErrorResponse(error) {
    return {
      json: {},
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    }
  }
}
