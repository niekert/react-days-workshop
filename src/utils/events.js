import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

export function trackEvent(eventName, properties) {
  console.log('TRACKING: ', eventName);
  console.table(properties);
  mixpanel.track(eventName, properties);
}
