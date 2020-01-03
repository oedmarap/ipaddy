addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  return new Response(request.headers.get('CF-Connecting-IP'), {status: 200})
}
