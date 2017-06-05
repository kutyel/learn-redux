export const fetchPosts = userId =>
  window.fetch(`https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`)

export const fetchComments = mediaId =>
  window.fetch(`https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`)
