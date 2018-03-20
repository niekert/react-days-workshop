import React from 'react';
import PropTypes from 'prop-types';
import { withAbContext } from '../context/AbTestContext';
import compose from '../utils/compose';
import { trackEvent } from '../utils/events';

const withTrackingContext = ComposedComponent =>
  class TrackingContext extends React.Component {
    static contextTypes = {
      assignedVariants: PropTypes.object,
      store: PropTypes.shape({
        getState: PropTypes.func,
      }),
    };

    trackEvent = (eventName, eventProps) => {
      const { assignedVariants } = this.props;
      const { store } = this.context;

      const storeState = store.getState();
      debugger;
      trackEvent(eventName, {
        ...eventProps,
        slideNumber: storeState.route.slide,
        ...assignedVariants,
      });
    };

    render() {
      return <ComposedComponent trackEvent={this.trackEvent} {...this.props} />;
    }
  };

export default compose(withAbContext, withTrackingContext);
