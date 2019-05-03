import React from 'react';
import { uniqueId } from 'lodash';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from 'styled-components';
import { allThemes, themeOptions } from 'style/theme';
import { Button, Icon } from 'components/Button';
import Div from 'components/Div';
import FlexBox from 'components/FlexBox';
import Svg from 'components/Svg';
import icon from './globals';
import buttonicon from './buttons';
import menuIcon from './menuIcons';

const IconBox = styled(FlexBox)`
  width: 32px;
  height: 32px;
  svg {
    width: 32px;
    fill: #000;
  }
`;
const menuIconBox = styled(FlexBox)`
  width: 32px;
  height: 32px;
`;

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add('globals', () => (
    <div>
      {Object.keys(icon).map((item) => (
        <Div
          float="left"
          margin="0 12px 9px 0"
          padding="6px"
          border="1px solid rgba(0, 0, 0, 0.1)"
          bgColor="#fff"
          key={uniqueId()}
        >
          <IconBox>
            <Svg {...icon[item]} />
          </IconBox>
          {item}
        </Div>
      ))}
    </div>
  ))
  .add('buttons', () => (
    <ThemeProvider theme={allThemes[select('theme', themeOptions, 'alatin')]}>
      <div>
        {Object.keys(buttonicon).map((ciccio) => (
          <Button
            margin="0 12px 9px 0"
            key={uniqueId()}
          >
            <Icon
              {...buttonicon[ciccio]}
              left={boolean('left', true)}
              right={boolean('right', false)}
              size={text('size', '')}
              margin={text('margin', '')}
            />
            {ciccio}
          </Button>
        ))}
      </div>
    </ThemeProvider>
  ))
  .add('menuIcons', () => (
    <ThemeProvider theme={allThemes[select('theme', themeOptions, 'alatin')]}>
      <div>
        {Object.keys(menuIcon).map((item) => (
          <Div
            display="inline-block"
            margin="0 12px 9px 0"
            padding="6px"
            border="1px solid rgba(0, 0, 0, 0.1)"
            bgColor="#fff"
            key={uniqueId()}
          >
            <menuIconBox>
              <Svg {...menuIcon[item]} />
            </menuIconBox>
            <p>{item}</p>
          </Div>
        ))}
      </div>
    </ThemeProvider>
  ));
