import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {HashRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { MultimediaPageContent } from "./multimedia.component";

library.add(fas);

const props = {
  webId: 'https://saragr.inrupt.net/'
};

describe.only('Multimedia', () => {
  afterAll(cleanup);
  const {container} = render(
    <Router>
        <MultimediaPageContent {...{...props}} />
    </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

});
