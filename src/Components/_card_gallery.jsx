import BotonCopiar from "../assets/utils/botonCopiar";

const _card_gallery = ({ image }) => {
  const imageName = image.slice(20, -4);
  return (
    <div className="card">
      <div>
        <img
          src={image}
          className="h-auto max-h-[300px] max-w-full rounded-lg mb-3"
          alt={imageName}
        />
      </div>
      <BotonCopiar text={`!${imageName}`} />
    </div>
  );
};

export default _card_gallery;
