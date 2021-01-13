import React from "react";

export default function Show({ id, name }) {
  return <div key={id}>{name}</div>;
}
