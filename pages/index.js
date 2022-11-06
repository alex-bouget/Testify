import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Page from '../components/page/Page'
import Player from '../components/player/Player'


export default function Home() {

  let player = React.createRef();
  let page = React.createRef();
  useEffect(() => {
    fetch("/api/music").then(response => response.json()).then(data => {
      page.current.changeData(data);
    });
  }, []);
  return (
    <div className="App">
      <Page player={player} ref={ page } />
      <Player ref={player} />
    </div>
  )
}
