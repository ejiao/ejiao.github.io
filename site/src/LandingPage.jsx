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
          <p className="landing_page__intro">
            I&#8217;m <a href="https://x.com/eddiejiao_obj">Eddie</a>.
          </p>
          <p className="landing_page__body">
            I make new ways for people to use computers. About a year ago, I
            founded <a href="https://www.commonknowled.ge/">Common Knowledge</a>,
            a research lab building new types of computing surfaces. Before
            that, I was a founder fellow at{' '}
            <a href="https://www.southparkcommons.com/">South Park Commons</a>.
            Before that, I was a software engineer at Humane, where we tried to
            build an AI-native computer. At Humane, I built, prototyped, and
            shipped a few highly{' '}
            <a href="https://patents.justia.com/patent/20240345718">novel</a>{' '}
            <a href="https://patents.justia.com/patent/20250103144">
              interfaces
            </a>.
            Before Humane I was a software engineer at{' '}
            <a href="https://slack.com/">Slack</a>, where I worked on the{' '}
            <a href="https://slack.com/downloads/mac">desktop</a> and{' '}
            <a href="https://apps.apple.com/us/app/slack/id618783545">iOS</a>{' '}
            clients. I studied Computer Science at{' '}
            <a href="https://www.brown.edu/">Brown University</a> and grew up in
            the Hudson Valley of New York.
          </p>
        </article>
      </main>
    );
  }
}

export default LandingPage;
