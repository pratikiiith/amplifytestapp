import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DestinationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Destination {
  readonly id: string;
  readonly name?: string;
  readonly Budget?: string;
  readonly description?: string;
  readonly imageurl?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Destination, DestinationMetaData>);
  static copyOf(source: Destination, mutator: (draft: MutableModel<Destination, DestinationMetaData>) => MutableModel<Destination, DestinationMetaData> | void): Destination;
}