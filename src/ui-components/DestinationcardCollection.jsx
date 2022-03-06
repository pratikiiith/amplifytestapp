/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Destination } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Destinationcard from "./Destinationcard";
import { Collection } from "@aws-amplify/ui-react";
export default function DestinationcardCollection(props) {
  const { dest, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Destination,
        }).items;
  return (
    <Collection
      type="grid"
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <Destinationcard
          dest={item}
          height="auto"
          width="auto"
          margin="1rem 1rem 1rem 1rem"
          key={item.id}
          {...getOverrideProps(overrides, "Collection.Destinationcard[0]")}
        ></Destinationcard>
      )}
    </Collection>
  );
}
