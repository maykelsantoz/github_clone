import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'maykelsantoz'}>
          maykelsantoz
        </Link>
        <span>/</span>

        <Link className={'reponame'} to={'/maykelsantoz/nodefarm-content'}>
          nodefarm-content
        </Link>
      </Breadcrumb>
      <p>Contains all of my Project.</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={'https://github.com/maykelsantoz/maykelsantoz'}>
        <GithubIcon />
        <span>View on Github</span>
      </ LinkButton>
    </Container>
  );
}

export default Repo;