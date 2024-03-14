const BotonesCopiar = ({ text }) => {
  console.log({ text });
  const copiarTexto = ({ text }) => {
    console.log(text.valueOf());
    navigator.clipboard
      .writeText(text.valueOf())
      .then(() => console.log("texto copiado"))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <li className="list-group-item itemText">
        {text}
        <div
          onClick={() => copiarTexto({ text })}
          type="button"
          className="btn btn-success"
        ></div>
      </li>
    </>
  );
};

export default BotonesCopiar;
