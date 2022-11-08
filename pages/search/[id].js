import Main from "../../components/Main";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { id } = router.query;
  const url = "/api/music/search/" + id;
  return (
    <Main api_fetch={url} id={id} />
  )
}