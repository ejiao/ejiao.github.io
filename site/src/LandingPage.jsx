import React, { Component } from 'react';

import './landing_page.css';

class LandingPage extends Component {
  render() {
    return (
      <main className="landing_page">
        <article className="landing_page__content" aria-labelledby="page-title">
          <h1 id="page-title" className="landing_page__title">
            Towards a More Friendly Future
          </h1>
          <p className="landing_page__intro">I&#8217;m Eddie.</p>
          <p className="landing_page__body">
            I make new ways for people to use computers. About a year ago, I
            founded Common Knowledge, a research lab building new types of
            computing surfaces. Before that, I was a founder fellow at South
            Park Commons. Before that, I was a software engineer at Humane,
            where we tried to build an AI-native computer. At Humane, I built,
            prototyped, and shipped a few highly novel interfaces. Before
            Humane I was a software engineer at Slack, where I worked on the
            desktop and iOS clients. I studied Computer Science at Brown
            University and grew up in the Hudson Valley of New York.
          </p>
        </article>
      </main>
    );
  }
}

export default LandingPage;
