import React from 'react';
import PodcastListItem from './PodcastListItem';

const PodcastList = ({ podcasts }) => (
  <ul>
  {
    podcasts.map((podcast, i) => <PodcastListItem key={i} podcast={podcast} />)
  }
  </ul>
);

export default PodcastList
