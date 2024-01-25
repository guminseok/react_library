import { storiesOf } from '@storybook/react';
import React from 'react';
import { HeaderLogo } from '.';

const stories = storiesOf('components/HeaderLogo', module);

stories.add('default', () => {
  return <HeaderLogo />;
});
