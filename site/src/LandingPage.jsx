import React, { Component } from 'react';

import './landing_page.css';

class LandingPage extends Component {
  render() {
    return (
      <main className="landing_page">
        <article className="landing_page__content" aria-labelledby="page-title">
          <h1 id="page-title" className="landing_page__title">
            Building New Ways to Use Computers
          </h1>
          <p className="landing_page__intro">
            I&#8217;m <a href="https://x.com/eddiejiao_obj">Eddie</a>.
          </p>
          <p className="landing_page__body">
            Recently I&#8217;ve been working on{' '}
            <a href="https://flipbook.page">Flipbook</a>, an early
            diffusion-based generative graphical user interface. About a year
            ago, I founded{' '}
            <a href="https://www.commonknowled.ge/">Common Knowledge</a>, a
            research lab building new types of computing surfaces. Previously, I
            was a founder fellow at{' '}
            <a href="https://www.southparkcommons.com/">South Park Commons</a>.
            Before that, I was an engineer at Humane, where I built a few
            highly{' '}
            <a href="https://patents.justia.com/patent/20240345718">novel</a>{' '}
            <a href="https://patents.justia.com/patent/20250103144">
              interfaces
            </a>, and at <a href="https://slack.com/">Slack</a>, where I worked
            on the{' '}
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
