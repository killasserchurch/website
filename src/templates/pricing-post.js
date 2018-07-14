import React, { Component } from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import Helmet from 'react-helmet' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import CustomLink from 'components/CustomLink'
const ColTwoPricingContainer = styled.div`
  ul li:first-child {
    background-color: #1abc9c !important;
  }
`
const ColThreePricingContainer = styled.div`
  ul li:first-child {
    background-color: #5d6a9a !important;
  }
`

const PricingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    width: 260px; /* width of each table */
    margin-right: 20px; /* spacing between tables */
    margin-bottom: 1em;
    border: 1px solid gray;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.05);
      transition: all 0.5s;
      z-index: 100;
      box-shadow: 0 0 10px gray;
    }
    @media only screen and (max-width: 600px) {
      border-radius: 0;
      width: 100%;
      margin-right: 0;
    }
    li {
      padding: 10px 10px;
      position: relative;
      font-size: 0.9rem;
      border-bottom: 1px solid #eee;
      &:first-child {
        font-weight: bold;
        text-align: center;
        padding: 30px 10px;
        background: #eac80d;
        color: white;
        box-shadow: 0 -10px 5px rgba(0, 0, 0, 0.1) inset;
        text-transform: uppercase;
        strong {
          font-size: 2rem;
        }
      }
      &:nth-child(2) {
        background-color: #fff;
        color: #000;
        text-align: center;
        font-weight: bold;
      }
    }
    &:last-of-type {
      margin-right: 0;
    }
  }
`

class PricingPost extends Component {
  render() {
    const {
      title,
      metaDescription,
      pricingColOneTitle,
      pricingColOneContentList,
      pricingColTwoTitle,
      pricingColTwoContentList,
      pricingColThreeTitle,
      pricingColThreeContentList,
    } = this.props.data.contentfulPricing
    return (
      <div>
        <Helmet
          title={`${title} | ${this.props.data.site.siteMetadata.title}`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
          ]}
        />
        <section id="two">
          <div className="inner">
            <header>
              <h1>{title}</h1>
            </header>
            <div className="row">
              <div className="4u 12u$(medium)">
                <PricingContainer>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<h2>${pricingColOneTitle}</h2> ${
                        pricingColOneContentList.childMarkdownRemark.html
                      }`,
                    }}
                  />
                </PricingContainer>
              </div>
              <ColTwoPricingContainer className="4u 12u$(medium)">
                <PricingContainer>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<h2>${pricingColTwoTitle}</h2> ${
                        pricingColTwoContentList.childMarkdownRemark.html
                      }`,
                    }}
                  />
                </PricingContainer>
              </ColTwoPricingContainer>
              <ColThreePricingContainer className="4u 12u$(medium)">
                <PricingContainer>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<h2>${pricingColThreeTitle}</h2> ${
                        pricingColThreeContentList.childMarkdownRemark.html
                      }`,
                    }}
                  />
                </PricingContainer>
              </ColThreePricingContainer>
            </div>
            <section>
              <CustomLink
                whereTo="/technology"
                whereToText="Back to Technology List"
              />
            </section>
            <hr />
          </div>
        </section>
      </div>
    )
  }
}

PricingPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PricingPost

export const pricingQuery = graphql`
  query pricingPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPricing(slug: { eq: $slug }) {
      title
      slug
      metaDescription
      pricingColOneTitle
      pricingColTwoTitle
      pricingColThreeTitle
      pricingColOneContentList {
        childMarkdownRemark {
          html
        }
      }
      pricingColTwoContentList {
        childMarkdownRemark {
          html
        }
      }
      pricingColThreeContentList {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
