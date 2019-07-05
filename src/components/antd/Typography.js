import React from 'react'
import { Typography, Divider } from 'antd'

function TypographyDemo() {
  const { Title, Paragraph, Text } = Typography

  return (
    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects,
          lower the unnecessary cost of design differences and implementation
          and liberate the resources of design and front-end development
        </Text>
        .
      </Paragraph>
      <Title level={2}>Guidelines and Resources</Title>
      <Paragraph>
        We supply a series of design principles, practical patterns and high
        quality design resources (<Text code>Sketch</Text> and{' '}
        <Text code>Axure</Text>), to help people create their product prototypes
        beautifully and efficiently.
      </Paragraph>

      <Title level={2}>Paragraph ellipsis</Title>
      <Paragraph ellipsis>
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Paragraph>

      <Title level={2}>Paragraph ellipsis customized</Title>
      <Paragraph ellipsis={{ rows: 3, expandable: true }}>
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <a href="/docs/spec/proximity">Principles</a>
          </li>
          <li>
            <a href="/docs/pattern/navigation">Patterns</a>
          </li>
          <li>
            <a href="/docs/resource/download">Resource Download</a>
          </li>
        </ul>
      </Paragraph>

      <div>
        <Title>h1. Ant Design</Title>
        <Title level={2}>h2. Ant Design</Title>
        <Title level={3}>h3. Ant Design</Title>
        <Title level={4}>h4. Ant Design</Title>
      </div>

      <Divider />
    </Typography>
  )
}

export default TypographyDemo
