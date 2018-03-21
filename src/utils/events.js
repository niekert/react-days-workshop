import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

export function trackEvent(eventName, eventProperties) {
  console.log(`EVENT: ${eventName}`);
  console.table(eventProperties);
  mixpanel.track(eventName, eventProperties);
}
