import React from 'react'
import { Typography, Layout, PageHeader, Menu, Icon, Card, Avatar } from 'antd'

import './styles.css'

class TweetList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: 'Documents Done Right'
    }
  }

  componentDidMount() {
    this.props.requestTweetList()
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  getTitle(title) {
    const transformed = title
      .split(' ')
      .slice(0, 5)
      .join(' ')
    return `${transformed} ...`
  }

  transformContent(content) {
    const regex = new RegExp(this.state.keyword, 'i')
    return content.replace(regex, `<strong>${this.state.keyword}</strong>`)
  }

  transformDate(publishedDate) {
    const date = new Date(publishedDate)
    return date.toDateString()
  }

  render() {
    const { tweetList } = this.props
    const { Title } = Typography
    const { SubMenu } = Menu
    const { Header, Sider, Content } = Layout

    return (
      <Layout>
        <Header>
          <PageHeader
            onBack={() => null}
            title="Red Swan"
            subTitle={`Searched results for ${this.state.keyword}`}
          />
        </Header>
        <Layout>
          <Sider>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline">
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Navigation One</span>
                  </span>
                }>
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>Navigation Two</span>
                  </span>
                }>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Navigation Three</span>
                  </span>
                }>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            {tweetList.length &&
              tweetList.map(tweet => {
                return (
                  <Card
                    className="tweet-card"
                    title={this.getTitle(tweet.text)}
                    extra={<a href={tweet.url}>More</a>}>
                    <div className="author">
                      <Avatar
                        style={{
                          backgroundColor: this.state.color,
                          verticalAlign: 'middle'
                        }}
                        size="small">
                        {tweet.author.split('')[0]}
                      </Avatar>
                      <h4>
                        Posted By&nbsp;
                        <a href={`https://twitter.com/${tweet.author}`}>
                          {tweet.author}
                        </a>
                      </h4>
                      <div>
                        <span> &nbsp;on&nbsp; </span>
                        <span class="subtle">
                          {this.transformDate(tweet.publishedDate)}
                        </span>
                      </div>
                    </div>
                    <p
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: this.transformContent(tweet.text)
                      }}></p>
                    <div class="actions">
                      <div className="action-item">
                        {tweet.likes}
                        <Icon type="like" />
                      </div>
                      <div className="action-item">
                        {tweet.retweets}
                        <Icon type="retweet" />
                      </div>
                    </div>
                  </Card>
                )
              })}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default TweetList
