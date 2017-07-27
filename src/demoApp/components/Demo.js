import React, { Component } from 'react';
import axios from 'axios';
import promise from 'es6-promise';
import styles from './Demo.css';

promise.polyfill();

export default class Demo extends Component {
  constructor () {
    super();
    this.state = {
      formats: [],
      currentDemo: ''
    };
  }

  updateDemo = () => {
    this.setCurrentDemo(window.location.hash.slice(1) || this.defaultDemo());
  };

  setCurrentDemo = (demo) => {
    this.setState({ currentDemo: demo });
  };

  componentDidMount () {
    axios.get('demo.json')
    .then((response) => {
      this.setState({ formats: response.data.formats });
    })
    .catch((response) => {
      if (response instanceof Error) {
        console.log('Error', response.message); // eslint-disable-line
      } else {
        console.log(response); // eslint-disable-line
      }
    });

    this.updateDemo();

    window.addEventListener('hashchange', this.updateDemo, false);
  }

  componentWillUnmount () {
    window.removeEventListener('hashchange', this.updateDemo, false);
  }

  defaultDemo () {
    const firstFormat = this.state.formats[0];
    const firstDemo = (firstFormat) ? firstFormat.demos[0] : null;

    return (firstDemo) ? firstDemo.path : '';
  }

  renderFormat (format) {
    return (
      <div key={format.name} className={styles.demoLinkListContainer}>
        <ul className={styles.demoLinkList}>
          {
            format.demos.map(demo =>
              <li key={demo.name} className={styles.demoLinkContainer}>
                <a href={'#' + demo.path}
                  className={styles.demoLink}>
                  {format.name}
                </a>
              </li>
            )
          }
        </ul>
      </div>
    );
  }

  render () {
    return (
      <div className={styles.root}>
        <nav className={styles.demoNav}>
          { this.state.formats.map(format => this.renderFormat(format)) }
        </nav>
        <iframe
          title={this.state.currentDemo && this.state.currentDemo.name}
          src={this.state.currentDemo || this.defaultDemo()}
          className={styles.demo}
        />
      </div>
    );
  }
}
