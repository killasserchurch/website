import React from 'react' // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { Boxes } from './Elements'
import VideoPost from './VideoPost'

const Video = props => (
  <div id="main" className="alt">
    <section>
      <div className="inner">
        <header>
          <h1>Video</h1>
        </header>
        <p>A selection of videos about cloud products and services.</p>
        {props.data !== undefined ? (
          <Boxes className="action boxes">
            {props.data.allContentfulVideo.edges.map(edge => (
              <VideoPost key={edge.node.slug} node={edge.node} />
            ))}
          </Boxes>
        ) : (
          undefined
        )}
      </div>
    </section>
  </div>
)

Video.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Video
