import Main from "../../components/Main";
import { useRouter } from 'next/router'
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  const { id } = router.query;
  const url = "/api/music/search/" + id;
  let main = React.createRef();

  useEffect(() => {
    if (id == null || id == undefined) {
      return;
    }
    history.pushState(null, null, '/search/' + id);
    main.current.state.search.current.setState({ search: id });
    main.current.setState({ api_fetch: url, id: id });
  }, [id]);
  return (
    <Main api_fetch={url} id={id} ref={main} />
  )
}