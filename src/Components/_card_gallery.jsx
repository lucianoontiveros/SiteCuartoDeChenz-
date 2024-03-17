import BotonCopiar from "../assets/utils/botonCopiar";

const _card_gallery = ({ image, name }) => {
  return (
    <div className="card">
      <div>
        <img
          src={image}
          className="h-auto max-h-[300px] max-w-full rounded-lg mb-3"
          alt={name}
          loading="lazy"
        />
      </div>
      <BotonCopiar text={`!${name}`} />
    </div>
  );
};

export default _card_gallery;
