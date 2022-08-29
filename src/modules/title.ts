import { router } from './router'

const title = useTitle(import.meta.env.VITE_APP_TITLE)

router.beforeEach((r) => {
  const originTitle = import.meta.env.VITE_APP_TITLE
  const name = r.name?.toString().toLowerCase()
  console.log(r)
  const customTitle = r.meta?.title
  title.value =
    name === '/' ? originTitle : `${originTitle} | ${customTitle || ''}`
})
