import React from "react";
import UserCard from "../Card/UserCard";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="Container">
        <div className="UserSection">
          <UserCard
            img={
              "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/166/416/products/918978c1-352c3e86aa9c935b4d15887706854146-640-0.jpg"
            }
            text={"remera"}
            model={"modelo 2015"}
            price={"$" + 10}
          />
          <UserCard
            img={"https://datalatienda.com/10653/remera-boca-jr.jpg"}
            text={"remera"}
            model={"modelo 2015"}
            price={"$" + 10}
          />
          <UserCard
            img={
              "https://bocashop.vteximg.com.br/arquivos/ids/165083-600-600/GK3173_1.jpg?v=637528056569970000"
            }
            text={"remera"}
            model={"modelo 2015"}
            price={"$" + 10}
          />
          <UserCard
            img={
              "https://thumbs.nosto.com/quick/rbxh5h46/8/264565_alt_3b968fded0be23a2af15936e9e59ed8f1116df22341aed35a216406c2544a4af/ddfe0b80b2f167745e12a8e001de483886420064929d9f8f22e08dfef43fcc6fa/A"
            }
            text={"remera"}
            model={"modelo 2015"}
            price={"$" + 10}
          />
          <UserCard
            img={
              "https://assets.adidas.com/images/w_600,f_auto,q_auto/26cac397ad524b33911aab3c01388952_9366/Shorts_Uniforme_Titular_Boca_Juniors_20-21_Azul_GL3918_01_laydown.jpg"
            }
            text={"remera"}
            model={"modelo 2015"}
            price={"$" + 10}
          />
          <UserCard
            img={
              "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc786ee45/products/AD_GL7519/AD_GL7519-1.JPG"
            }
            text={"remera"}
            model={"modelo 2015"}
            price={"$" + 10}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
