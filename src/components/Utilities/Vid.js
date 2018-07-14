import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import styled from 'styled-components'

const VidResponsiveWrapper = styled.div`
    overflow:hidden;
    padding-bottom:56.25%;
    position:relative;
    height:0;
    margin: 1rem 0;

    & iframe {
      left: 0;
      top: 0
      height: 100%;
      width: 100%;
      position: absolute;
    }
`

const Vid = props => {
  return (
    <div>
      {props.video !== null ? (
        <VidResponsiveWrapper>
          <iframe
            title="Iron Cove Video Series"
            width="460"
            height="315"
            src={props.video}
            frameBorder="0"
          />
        </VidResponsiveWrapper>
      ) : (
        undefined
      )}
    </div>
  )
}

Vid.propTypes = {
  video: PropTypes.string,
}

export default Vid
