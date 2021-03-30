addEventListener('fetch', (event) => {
  event.respondWith(
    new Response('hanamura.deno.dev', {
      status: 200,
      headers: {
        'content-type': 'text/plain',
      },
    })
  )
})
