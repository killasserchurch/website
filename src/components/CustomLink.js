import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const LinkWrapper = styled.div`
  flex-direction: column;
  align-content: flex-start;
  a {
    margin: 1rem !important;
  }

  @media all and (min-width: 500px) {
    flex-direction: row;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`

const CustomLink = props => {
  return (
    <div className="inner">
      <LinkWrapper>
        {props.whereTo !== null && props.whereTo !== undefined ? (
          <Link className="button next scrolly" to={props.whereTo}>
            {props.whereToText}
          </Link>
        ) : (
          undefined
        )}
        {props.ctaLink !== null && props.ctaLink !== undefined ? (
          <Link
            style={{ marginLeft: '1rem' }}
            className="button special icon fa-phone"
            to={props.ctaLink}
          >
            {props.cta}
          </Link>
        ) : (
          undefined
        )}
      </LinkWrapper>
    </div>
  )
}

CustomLink.propTypes = {
  whereTo: PropTypes.string,
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
  whereToText: PropTypes.string,
}

export default CustomLink
