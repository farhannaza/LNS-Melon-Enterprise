export function smoothScroll(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  e.preventDefault()
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, "")
  const elem = document.getElementById(targetId)
  const header = document.querySelector('header')
  const headerHeight = header ? header.offsetHeight : 0
  
  if (elem) {
    const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - headerHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    })
  }
}

