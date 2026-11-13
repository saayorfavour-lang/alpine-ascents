/** Builds a link that opens a Gmail compose tab (works in any browser, no mail app needed). */
export function gmailLink(to, subject = '', body = '') {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
