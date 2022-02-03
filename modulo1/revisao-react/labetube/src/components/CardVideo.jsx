import React from "react";

export const CardVideo = ({ image }) => {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={image} alt="" />
      <h4>{titulo}</h4>
    </div>
  );
};
