export default function Border(p) {
  return (
  <div className="nes-container with-title is-centered">
    <p className="title">{p.title}</p>
    {p.children}
  </div>)
}
