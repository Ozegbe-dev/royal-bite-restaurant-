export default function SectionHeading({ eyebrow, title, body, align='left', dark=false }) {
  return <div className={`section-heading ${align} ${dark ? 'dark-heading' : ''}`}><span className="eyebrow">{eyebrow}</span><h2 dangerouslySetInnerHTML={{__html:title}} />{body && <p>{body}</p>}</div>;
}
