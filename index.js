import React, {
  Component,
  PropTypes
} from 'react'
import {
  requireNativeComponent,
  NativeAppEventEmitter
} from 'react-native'

class CardIOView extends Component {

  displayName = 'CardIOView'

  componentWillMount () {
    this._onFocusScore = NativeAppEventEmitter.addListener('didReceiveFocusScore', this.props.onFocusScore)
    this._onScan = NativeAppEventEmitter.addListener('didScanCard', this.props.onScan)
  }

  componentWillUnmount () {
    if (this._onFocusScore) {
      this._onFocusScore.remove()
    }

    if (this._onScan) {
      this._onScan.remove()
    }
  }

  render () {
    return <RCTCardIOView {...this.props} />
  }

  _onFocusScore = null
  _onScan = null

}

CardIOView.propTypes = {
  onFocusScore: PropTypes.func,
  onScan: PropTypes.func
}

CardIOView.defaultProps = {
  onFocusScore: () => {},
  onScan: () => {}
}

const RCTCardIOView = requireNativeComponent('RCTCardIOView', CardIOView)

module.exports = CardIOView
