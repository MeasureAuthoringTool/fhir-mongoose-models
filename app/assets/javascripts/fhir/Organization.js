const mongoose = require('mongoose/browser');
const { AddressSchema } = require('./Address');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { OrganizationContactSchema } = require('./OrganizationContact');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const OrganizationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  type: [CodeableConceptSchema],
  name: PrimitiveStringSchema,
  alias: [PrimitiveStringSchema],
  telecom: [ContactPointSchema],
  address: [AddressSchema],
  partOf: ReferenceSchema,
  contact: [OrganizationContactSchema],
  endpoint: [ReferenceSchema],
  typeName: { type: String, default: 'Organization' },
  _type: { type: String, default: 'FHIR::Organization' },
});

class Organization extends mongoose.Document {
  constructor(object) {
    super(object, OrganizationSchema);
    this.typeName = 'Organization';
    this._type = 'FHIR::Organization';
  }
}

module.exports.OrganizationSchema = OrganizationSchema;
module.exports.Organization = Organization;
