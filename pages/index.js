import { useState } from "react";
import styled from "styled-components"
import axios from "axios";

import Button from "../components/button/button";
import { Input, TextArea } from "../components/input/input";
import Border from "../components/border/border";

const Warning = styled.div`
    text-align: left;
    font-size: 7px;
    margin-top: 10px
`

const TwitterIcon = styled.i`
    transform: scale(6.5) translate(-80px, -12px) !important;
    position: absolute
`

const Container = styled.div`
    margin: 65px auto 0 auto;
    max-width: 1000px;
`

const Message = styled.section`
    position: relative;
    display: flex;
`

const TextBaloon = styled.div`
    margin-left: 60px;
`

const UserIcon = styled.i`
    bottom: 0;
    transform: translateY(25px);
    position: absolute;
`

const UserName = styled.span`
    position: absolute;
    bottom: -60px;
    font-size: 12px;
    max-width: 99px;
    word-break: break-word;
    text-overflow: ellipsis;
`

const Post = styled.section`
    margin-top: 80px;
`

const Anchor = styled.a`
    text-align: left;
    font-size: 13px;
`


export default function Home({ feedPosts }) {
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const [isLogin, setisLogin] = useState(true)
  const [feed, setFeed] = useState(feedPosts || [])

  return (
    <Container>
      {isAuthenticated ? (
        <Border title="Share Your Comment">
          <TwitterIcon className="nes-icon twitter is-large" />
          <Input label="Tweet Link:" />
          <TextArea label="Your comment:" />

          <Button type="button">
            Share
          </Button>

          <Warning>
            <span className="nes-text is-error">Please be respectfull of your comment!</span>
          </Warning>
        </Border>
      ) : (
        isLogin ? (
        <Border title="Login">
          <Input maxLenght="32" label="Username:" />
          <Input maxLenght="256" type="password" label="Password:" />

          <Button type="button">
            Login
          </Button>

          <Anchor href="javascript:void(0)" onClick={() => setisLogin(false)} className="nes-text is-primary">Don&apos;t you have an account?</Anchor>
        </Border>
        ) : (
        <Border title="Register">
          <Input maxLenght="32" label="Username:" />
          <Input maxLenght="256" type="password" label="Password:" />


          <Button type="button">
            Register
          </Button>

          <Anchor href="javascript:void(0)" onClick={() => setisLogin(true)} className="nes-text is-primary">Do you have already account?</Anchor>
        </Border>
        )
      )}

      {feed && feed.map((e, index) =>
        <Post key={index} className="message-list">
          <Message className="message -left">
            <UserIcon className="nes-bcrikko" />
            <UserName className="nes-text is-primary">jack5341  </UserName>
            <TextBaloon className="nes-balloon from-left">
              <Anchor href={e.tweet} rel="noopener noreferrer" target="_blank">{e.tweet}</Anchor>
              <p>{e.description}</p>
            </TextBaloon>
          </Message>
        </Post>
      )}
    </Container>
  )
}

// export async function getStaticProps() {
//   const res = await axios({
//     method: "GET",
//     url: "http://localhost:8080/api/feed"
//   })

//   const data = res.data

//   return {
//     props: {
//       feedPosts: data
//     },
//   }
// }