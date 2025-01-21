import React from "react";
import imgNode from '../../assets/images/NodeJs.png'
import imgDotNet from '../../assets/images/dotnet-imagen-2.png'

export const HerramientasImg = () => {
  return (
    <div className="text-center">
      <img src={imgDotNet} id="fotoNet" alt="ImgDotNet"/>
      <img src={imgNode} id="fotoNode" alt="ImgNodeJS"/>
    </div>
  );
};
