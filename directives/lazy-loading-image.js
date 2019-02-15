export default {
  bind: (el) => {
    const originalSrc = el.dataset.src

    if (originalSrc) {
      const image = new Image()
      image.src = originalSrc
      image.onload = () => {
        el.setAttribute('src', originalSrc)
        el.classList.add('is-loaded')
      }
    }
  }
}
