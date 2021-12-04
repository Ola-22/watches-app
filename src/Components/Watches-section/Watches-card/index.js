export default function WatchesCard({ title, paragraph, discover, src }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{paragraph}</p>
      <a href="#">{discover}</a>

      <img src={src} alt="" />
    </div>
  );
}
