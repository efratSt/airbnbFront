export const uploadService = {
  uploadImg,
}
function uploadImg(ev) {
  const CLOUD_NAME = 'dcwibf9o5'
  const UPLOAD_PRESET = 'vt0iqgff'
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const formData = new FormData()
  formData.append('upload_preset', UPLOAD_PRESET)
  formData.append('file', ev.target.files[0])

  return fetch(UPLOAD_URL, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      return res
    })
    .catch((err) => console.error(err))
}

function onSetFilterBy(filterBy) {
  filterBy = setBookFilterBy(filterBy)
  renderBooks()
  setQueryParams(filterBy, gCurrDisplayedBook)
}

function setQueryParams(filterBy, bookId) {
  const queryStringParams = `?maxPrice=${filterBy.maxPrice}&minRate=${filterBy.minRate}&title=${filterBy.title}&bookmark=${bookId}`
  const newUrl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    queryStringParams
  window.history.pushState({ path: newUrl }, '', newUrl)
}

function renderFilterByQueryStringParams() {
  const queryStringParams = new URLSearchParams(window.location.search)
  const filterBy = {
    maxPrice: queryStringParams.get('maxPrice') || 75,
    minRate: queryStringParams.get('minRate') || 0,
    title: queryStringParams.get('title') || '',
  }
  const bookId = queryStringParams.get('bookmark')
  document.querySelector('.filters .filter-max-price').value = filterBy.maxPrice
  document.querySelector('.filters .filter-min-rate').value = filterBy.minRate

  setBookFilterBy(filterBy)

  if (bookId !== 'undefined' && bookId !== 'null' && bookId !== null)
    onRead(bookId)
  // ! how to convert undefined & null from the queryStringParams to actual values?
}
