import React from "react";
import Head from "../Components/Head";

const NotFound = () => {
  return (
    <div style={{ color: "white" }}>
      <Head title="Página não encontrada" description="Página não encontrada" />
      <h1>Erro 404</h1>
      <p>A página que você está procurando não foi encontrada :/</p>
    </div>
  );
};

export default NotFound;
