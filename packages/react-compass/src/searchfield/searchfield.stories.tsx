import type {StoryDecorator} from '@ladle/react'
import {Column, Row} from '../utils/components'
import SearchField from './searchfield'

export const Variants: React.FC = () => (
  <Column>
    <Row>
      <SearchField
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
      />

      <SearchField
        isDisabled
        placeholder='Search'
        onSubmit={(text) => console.log(text)}
      />
    </Row>
  </Column>
)

export default {
  decorators: [
    (Component) => (
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html: `.ladle-main { background: #eee; }`,
          }}
        ></style>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
}
