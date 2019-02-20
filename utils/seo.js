import _assign from 'lodash/assign'

export const metaTag = (name, content, attribute = 'name') => ({
  hid: name,
  [attribute]: name,
  content
})

export const defaultSEOData = {
  title: 'Viblo Organization',
  description: 'Promoting your Organization to Viblo\'s growing community',
  keywords: 'viblo, viblo organization, quảng bá tổ chức, promoting organization'
}

export const pageSEO = (pageSEOData = {}) => {
  const { title, description, keywords } = _assign({}, defaultSEOData, pageSEOData)

  return [
    metaTag('description', description),
    metaTag('keywords', keywords),

    // Open graph meta tags:
    metaTag('og:url', 'https://viblo.asia/organization-feature', 'property'),
    metaTag('og:type', 'website', 'property'),
    metaTag('og:title', title, 'property'),
    metaTag('og:image', 'https://images.viblo.asia/full/8d456ac2-2e8e-4df0-b4a7-c34ed39bcad7.jpg', 'property'),
    metaTag('og:description', description, 'property'),

    // Twitter:
    metaTag('twitter:card', 'summary_large_image'),
  ]
}
