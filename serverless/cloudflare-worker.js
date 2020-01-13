addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  let response = fetch(request)
  response.body = request.headers.get('CF-Connecting-IP')
  response = new Response(response.body, response)
  response.headers.set('Content-Type', 'text/plain')
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET')
  response.headers.set('X-NFO', 'Find out more at https://use.ipaddy.net')
  return response
}
