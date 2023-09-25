import ms from 'ms'

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? '' : ' ago'
  }`
}


export const toThaiDate = (timestamp: Date): string => {
  // style => short, medium, long
  if (!timestamp) return "unknown time";
  return new Intl.DateTimeFormat('th-TH', {dateStyle: 'medium', "timeStyle": 'medium',"timeZone": 'Asia/Bangkok'}).format(new Date(timestamp))
}