const { AddressSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { CodingSchema } = require('./allSchemaHeaders.js');
const { ContactPointSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { LocationHoursOfOperationSchema } = require('./allSchemaHeaders.js');
const { LocationModeSchema } = require('./allSchemaHeaders.js');
const { LocationPositionSchema } = require('./allSchemaHeaders.js');
const { LocationStatusSchema } = require('./allSchemaHeaders.js');
const { PrimitiveStringSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { LocationSchema } = require('./allSchemaHeaders.js');

LocationSchema.add(DomainResourceSchema);
LocationSchema.remove('id');
LocationSchema.add({
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
});

module.exports.LocationSchema = LocationSchema;
