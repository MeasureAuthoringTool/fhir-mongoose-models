const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { LocationHoursOfOperationSchema } = require('./LocationHoursOfOperation');
const { LocationModeSchema } = require('./LocationMode');
const { LocationPositionSchema } = require('./LocationPosition');
const { LocationStatusSchema } = require('./LocationStatus');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const LocationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  status: LocationStatusSchema,
  operationalStatus: CodingSchema,
  name: PrimitiveStringSchema,
  alias: [PrimitiveStringSchema],
  description: PrimitiveStringSchema,
  mode: LocationModeSchema,
  type: [CodeableConceptSchema],
  telecom: [ContactPointSchema],
  address: AddressSchema,
  physicalType: CodeableConceptSchema,
  position: LocationPositionSchema,
  managingOrganization: ReferenceSchema,
  partOf: ReferenceSchema,
  hoursOfOperation: [LocationHoursOfOperationSchema],
  availabilityExceptions: PrimitiveStringSchema,
  endpoint: [ReferenceSchema],
  typeName: { type: String, default: 'Location' },
  _type: { type: String, default: 'FHIR::Location' },
});

class Location extends mongoose.Document {
  constructor(object) {
    super(object, LocationSchema);
    this.typeName = 'Location';
    this._type = 'FHIR::Location';
  }
}

module.exports.LocationSchema = LocationSchema;
module.exports.Location = Location;
