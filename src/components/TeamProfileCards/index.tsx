/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

function WebsiteLink({to, children}: {to: string; children?: ReactNode}) {
  return (
    <Link to={to}>
      {children ?? (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

type ProfileProps = {
  className?: string;
  name: string;
  children: ReactNode;
  githubUrl: string;
  xUrl?: string;
};

function TeamProfileCard({
  className,
  name,
  children,
  githubUrl,
  xUrl,
}: ProfileProps) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              style={{ marginBottom: '15px' }}
              src={`${githubUrl}.png`}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <Heading as="h3" className="avatar__name">
                {name}
              </Heading>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <Link className="button button--secondary" href={githubUrl}>
                GitHub
              </Link>
            )}
            {xUrl && (
              <Link className="button button--secondary" href={xUrl}>
                X
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props: ProfileProps) {
  return (
    <TeamProfileCard {...props} className="col col--6 margin-bottom--lg" />
  );
}

export function ActiveTeamRow(): ReactNode {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Mohamed EL HAJJI"
        githubUrl="https://github.com/pr-elhajji"
        >
        <Translate
          id="team.profile.Sebastien Lorber.body"
          values={{
            website: <WebsiteLink to="https://sebastienlorber.com/" />,
            devto: <Link to="https://dev.to/sebastienlorber">Dev.to</Link>,
          }}>
          {
            'Professor/Consultant with expertise in artificial intelligence, big data & Digital transforamtion, focusing on their transformative applications in education and precision agriculture...'
          }
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Youssef ES-SAADY"
        githubUrl="https://github.com/essaady"
        >
        <Translate id="team.profile.Sida Chen.body">
          Researcher and Professor specializing with expertise in artificial intelligence, focusing on its transformative applications in education and precision agriculture.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Tarek AIT BAHA"
        githubUrl="https://github.com/tarekai">
        <Translate id="team.profile.Clement Couriol.body">
        Researcher and PhD in Artificial Intelligence, specializing in Natural Language Processing.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function HonoraryAlumniTeamRow(): ReactNode {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Joel Marcey"
        githubUrl="https://github.com/JoelMarcey"
        xUrl="https://x.com/joelmarcey">
        <Translate id="team.profile.Joel Marcey.body">
          Docusaurus founder and now ever grateful Docusaurus cheerleader to
          those who actually write code for it.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Alexey Pyltsyn"
        githubUrl="https://github.com/lex111">
        <Translate id="team.profile.Alexey Pyltsyn.body">
          Obsessed open-source enthusiast 👋 Eternal amateur at everything 🤷‍♂️
          Maintainer of Russian docs on PHP, React, Kubernetes and much more 🧐
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Yangshun Tay"
        githubUrl="https://github.com/yangshun"
        xUrl="https://x.com/yangshunz">
        <Translate id="team.profile.Yangshun Tay.body">
          Full Front End Stack developer who likes working on the Jamstack.
          Working on Docusaurus made him Facebook&apos;s unofficial part-time
          Open Source webmaster, which is an awesome role to be in.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Endilie Yacop Sucipto"
        githubUrl="https://github.com/endiliey"
        xUrl="https://x.com/endiliey">
        <Translate id="team.profile.Endilie Yacop Sucipto.body">
          Maintainer @docusaurus · 🔥🔥🔥
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Wei Gao"
        githubUrl="https://github.com/wgao19"
        xUrl="https://x.com/wgao19">
        <Translate id="team.profile.Wei Gao.body">
          🏻‍🌾 Work in progress React developer, maintains Docusaurus, writes
          docs and spams this world with many websites.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function StudentFellowsTeamRow(): ReactNode {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Reda EL BETTIOUI"
        githubUrl="https://github.com/XredaX"
        >
        <Translate
          id="team.profile.Anshul Goyal.body"
          values={{
            websiteLink: (
              <Link href="https://anshulgoyal.dev/">
                <Translate id="team.profile.Anshul Goyal.body.websiteLink.label">
                  website
                </Translate>
              </Link>
            ),
          }}>
          {
            ''
          }
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Aicha Dakir"
        githubUrl="https://github.com/dak-Aic">
        <Translate id="team.profile.Drew Alexander.body">
         {
            ''
          }
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Abdallah OUGOUMAD"
        githubUrl="https://github.com/03ABDALLAH"
        >
        <Translate
          id="team.profile.Fanny Vieira.body"
          values={{
            blogLink: (
              <Link href="https://dev.to/fannyvieira">
                <Translate id="team.profile.Fanny Vieira.body.blogLink.label">
                  her blog
                </Translate>
              </Link>
            ),
            spotifyLink: (
              <Link href="https://open.spotify.com/user/anotherfanny">
                <Translate id="team.profile.Fanny Vieira.body.spotifyLink.label">
                  Spotify playlists
                </Translate>
              </Link>
            ),
          }}>
          {
            ''
          }
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Abdellatif LAGHJAJ"
        githubUrl="https://github.com/abdellatif-laghjaj"
        >
        <Translate
          id="team.profile.Sam Zhou.body"
          values={{
            websiteLink: (
              <Link href="https://developersam.com">
                <Translate id="team.profile.Anshul Goyal.body.websiteLink.label">
                  website
                </Translate>
              </Link>
            ),
            samLangLink: (
              <Link href="https://samlang.developersam.com/">
                <Translate id="team.profile.Sam Zhou.body.samLangLink.label">
                  programming language
                </Translate>
              </Link>
            ),
            miniReactLink: (
              <Link href="https://github.com/SamChou19815/mini-react">
                <Translate id="team.profile.Sam Zhou.body.miniReactLink.label">
                  mini React
                </Translate>
              </Link>
            ),
          }}>
          {
            ''
          }
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}
