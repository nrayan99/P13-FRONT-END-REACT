function FeatureItem({
  img,
  title,
  text,
}: {
  img: { src: string; alt: string };
  title: string;
  text: string;
}) {
  return (
    <div className="feature-item">
      <img src={img.src} alt={img.alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default FeatureItem;
