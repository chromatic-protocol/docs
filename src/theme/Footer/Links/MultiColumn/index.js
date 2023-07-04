import React from 'react'
import LinkItem from '@theme/Footer/LinkItem'
function ColumnLinkItem({ item }) {
  return item.html ? (
    <li
      className="footer-item"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer-item">
      <LinkItem item={item} />
    </li>
  )
}
function Column({ column }) {
  return (
    <div className="footer-group">
      <div className="footer-title">{column.title}</div>
      <ul className="footer-items clean-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  )
}
export default function FooterLinksMultiColumn({ columns }) {
  return (
    <div className="footer-links">
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  )
}
