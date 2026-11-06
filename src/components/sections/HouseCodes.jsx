import './HouseCodes.css'

const rows = [
  { id: 'symbols', direction: 'left', duration: 46, items: [
    { type: 'word', id: 'orb', text: 'ORB', left: 199, top: 19, color: '#c1121f', hoverColor: '#9584d3' },
    { type: 'word', id: 'corset', text: 'CORSET', left: 655, top: 19, hoverColor: '#c1121f' },
    { type: 'word', id: 'tartan', text: 'TARTAN', left: 1380, top: 19, color: '#8d1f2d', hoverColor: '#61a96d' },
    { type: 'caption', id: 'house-symbol', text: 'House Symbol', left: 100, top: 29 },
    { type: 'caption', id: 'body-architecture', text: 'Body Architecture', left: 531, top: 29 },
    { type: 'caption', id: 'british-heritage', text: 'British Heritage', left: 1272, top: 29 },
  ] },
  { id: 'origins', direction: 'right', duration: 52, items: [
    { type: 'word', id: 'punk', text: 'PUNK', left: -19, top: 232, hoverColor: '#e8587a' },
    { type: 'word', id: 'pearls', text: 'PEARLS', left: 544, top: 232, hoverColor: '#9584d3' },
    { type: 'word', id: 'london', text: 'LONDON', left: 1260, top: 232, hoverColor: '#61a96d' },
    { type: 'caption', id: 'anti-establishment', text: 'Anti-Establishment', left: -154, top: 242 },
    { type: 'caption', id: 'iconic-jewelry', text: 'Iconic Jewelry', left: 445, top: 242 },
    { type: 'caption', id: 'since-1971', text: 'Since 1971', left: 1190, top: 242 },
  ] },
  { id: 'legacy', direction: 'left', duration: 48, items: [
    { type: 'word', id: 'activism', text: 'ACTIVISM', left: -73, top: 445, hoverColor: '#61a96d' },
    { type: 'word', id: 'heritage', text: 'HERITAGE', left: 755, top: 445, hoverColor: '#9584d3' },
    { type: 'word', id: 'chain', text: 'CHAIN', left: 1607, top: 445, hoverColor: '#e8587a' },
    { type: 'caption', id: 'climate-action', text: 'Climate Action', left: -175, top: 455 },
    { type: 'caption', id: 'brand-legacy', text: 'Brand Legacy', left: 662, top: 455 },
    { type: 'caption', id: 'creative-disorder', text: 'Creative Disorder', left: 1487, top: 455 },
  ] },
  { id: 'forms', direction: 'right', duration: 56, items: [
    { type: 'word', id: 'archive', text: 'ARCHIVE', left: -167, top: 658, hoverColor: '#c1121f' },
    { type: 'word', id: 'platform', text: 'PLATFORM', left: 611, top: 658, hoverColor: '#61a96d' },
    { type: 'word', id: 'draping', text: 'DRAPING', left: 1522, top: 658, hoverColor: '#9584d3' },
    { type: 'caption', id: 'past-collections', text: 'Past Collections', left: -280, top: 668 },
    { type: 'caption', id: 'elevated-soles', text: 'Elevated Soles', left: 509, top: 668 },
    { type: 'caption', id: 'fluid-forms', text: 'Fluid Forms', left: 1439, top: 668 },
  ] },
  { id: 'details', direction: 'left', duration: 50, items: [
    { type: 'word', id: 'red-label', text: 'RED LABEL', left: -234, top: 871, hoverColor: '#e8587a' },
    { type: 'word', id: 'safety-pin', text: 'SAFETY PIN', left: 709, top: 871, hoverColor: '#9584d3' },
    { type: 'word', id: 'tailoring', text: 'TAILORING', left: 1701, top: 871, hoverColor: '#61a96d' },
    { type: 'caption', id: 'youth-culture', text: 'Youth Culture', left: -329, top: 881 },
    { type: 'caption', id: 'subversive-detail', text: 'Subversive Detail', left: 589, top: 881 },
    { type: 'caption', id: 'precision-cutting', text: 'Precision Cutting', left: 1584, top: 881 },
  ] },
]

function RowItem({ item }) {
  const style = {
    '--item-left': `${item.left}px`, '--item-top': `${item.top}px`,
    ...(item.type === 'word' ? { '--word-color': item.color ?? '#000', '--hover-color': item.hoverColor } : {}),
  }

  if (item.type === 'caption') return <span aria-hidden="true" className="house-codes__caption" style={style}>{item.text}</span>
  return <span aria-hidden="true" className="house-codes__word" style={style}>{item.text}</span>
}

export default function HouseCodes() {
  return (
    <section className="house-codes" id="house-codes" aria-label="House Codes">
      {rows.map((row) => (
        <div className={`house-codes__row house-codes__row--${row.direction}`} key={row.id} role="group" aria-label={row.items.map((item) => item.text).join(', ')} style={{ '--marquee-duration': `${row.duration}s` }}>
          <div className="house-codes__track">
            <div className="house-codes__copy house-codes__copy--primary" aria-hidden="true">
              {row.items.map((item) => <RowItem item={item} key={item.id} />)}
            </div>
            <div className="house-codes__copy house-codes__copy--duplicate" aria-hidden="true">
              {row.items.map((item) => <RowItem item={item} duplicate key={item.id} />)}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
