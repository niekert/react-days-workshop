import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

export function trackEvent(eventName, properties) {
  mixpanel.track(eventName, properties);
}
