const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__tada">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
