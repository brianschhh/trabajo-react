import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import "./Card.css";

const UserCard = ({ img, text, model, price }) => (
  <div className="userCard">
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{text}</Card.Header>
        <Card.Meta>
          <span className="date">{model}</span>
        </Card.Meta>
        <Card.Description>{price}</Card.Description>
      </Card.Content>
      <Button primary>Comprar</Button>
    </Card>
  </div>
);

export default UserCard;
