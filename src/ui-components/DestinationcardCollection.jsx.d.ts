/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { Destination } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type DestinationcardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    dest?: Destination;
    items?: any[];
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function DestinationcardCollection(props: DestinationcardCollectionProps): React.ReactElement;
