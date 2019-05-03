import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'
import styled from 'styled-components';
import { compose } from 'redux';
import { connect } from 'react-redux';
import provideScrollPosition from 'react-provide-scroll-position';

import { cookieSet } from 'common/cookies';
import ZendeskTicket from 'containers/ZendeskTicket';
import { modalSetData } from 'containers/ModalBox/actions';
import Footer from 'components/Footer';
import LandingMenuBar from 'components/LandingMenuBar';
import LandingCard from 'components/LandingCard';
import LandingForm from 'components/LandingForm';
import { FirstSection, Section } from 'components/Section';
import Container, { ActionBox } from 'components/Container';
import { StickyWrap, StickyTop, StickyBottom } from 'components/StickyFooter';
import Svg from 'components/Svg';
import icon from 'icons/globals';
import FlexBox from 'components/FlexBox';
import { Table, Tr, Td, NoteTd } from 'components/Tables';
import { H2 } from 'components/Heading';
import { ActionButtonLink } from 'components/ButtonLink';
import { ButtonStyle, ActionButtonStyle } from 'components/Button';
import Separator from 'components/Paragraph/Separator';
import media from 'style/mediainjector';
import { colore } from 'style/color';
import { landingPageToggleMenu } from 'containers/LandingPage/actions';
import { singleFieldRequired, atLeastNChars, singleFieldValidateEmail } from 'common/forms';
import { userDataSet } from 'containers/User/actions';
import InputField from 'components/FormElements/Field';
import AlertCookies from 'components/AlertCookies';
import AlertBanner from 'components/AlertBanner';

import viaggio from './images/viaggio.png';
//import basepremium from './images/basepremium.png';
import classe from './images/classe.png';
import formazione from './images/formazione.png';
import ceaverifiche from './images/ceaverifiche.png';
import cover from './images/cover.png';

import '../styles/index.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `}
  render={data => (
    <div className="container">
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHome.seoMetaTags}
      />
      <div className="container__sidebar">
        <div className="sidebar">

        <h6 className="sidebar__title">
            MIAOO
          </h6>
          <h6 className="sidebar__title">
            <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
          </h6>
          <div
            className="sidebar__intro"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
            }}
          />
          <ul className="sidebar__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <p className="sidebar__social">
            {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
              <a
                key={profile.profileType}
                href={profile.url}
                target="blank"
                className={`social social--${profile.profileType.toLowerCase()}`}
              > </a>
            ))}
          </p>
        </div>
      </div>
      <div className="container__body">
        <div className="container__mobile-header">
          <div className="mobile-header">
            <div className="mobile-header__menu">
              <Link to="#" data-js="toggleSidebar" />
            </div>
            <div className="mobile-header__logo">
              <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
    )}
  />
)

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
