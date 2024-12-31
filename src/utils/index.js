export const formatePx =  (val) => {
    const innerWidth = window.innerWidth
    const uiWidth = 750
    return  val / 750 * innerWidth
}