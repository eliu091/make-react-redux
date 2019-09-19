import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
  render () {
    return (
      <div>
        <p>This is Content</p>
        <ThemeSwitch />
      </div>
    )
  }
}

export default Content