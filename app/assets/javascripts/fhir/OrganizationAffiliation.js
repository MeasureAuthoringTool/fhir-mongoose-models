const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ContactPointSchema } = require('./ContactPoint');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const OrganizationAffiliationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  active: PrimitiveBooleanSchema,
  period: PeriodSchema,
  organization: ReferenceSchema,
  participatingOrganization: ReferenceSchema,
  network: [ReferenceSchema],
  code: [CodeableConceptSchema],
  specialty: [CodeableConceptSchema],
  location: [ReferenceSchema],
  healthcareService: [ReferenceSchema],
  telecom: [ContactPointSchema],
  endpoint: [ReferenceSchema],
  typeName: { type: String, default: 'OrganizationAffiliation' },
  _type: { type: String, default: 'FHIR::OrganizationAffiliation' },
});

class OrganizationAffiliation extends mongoose.Document {
  constructor(object) {
    super(object, OrganizationAffiliationSchema);
    this.typeName = 'OrganizationAffiliation';
    this._type = 'FHIR::OrganizationAffiliation';
  }
}

module.exports.OrganizationAffiliationSchema = OrganizationAffiliationSchema;
module.exports.OrganizationAffiliation = OrganizationAffiliation;
