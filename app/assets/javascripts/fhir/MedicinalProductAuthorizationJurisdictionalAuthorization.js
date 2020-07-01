const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');

const MedicinalProductAuthorizationJurisdictionalAuthorizationSchema = BackboneElementSchemaFunction({
  identifier: [IdentifierSchema],
  country: CodeableConceptSchema,
  jurisdiction: [CodeableConceptSchema],
  legalStatusOfSupply: CodeableConceptSchema,
  validityPeriod: PeriodSchema,
  typeName: { type: String, default: 'MedicinalProductAuthorizationJurisdictionalAuthorization' },
  _type: { type: String, default: 'FHIR::MedicinalProductAuthorizationJurisdictionalAuthorization' },
});

class MedicinalProductAuthorizationJurisdictionalAuthorization extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductAuthorizationJurisdictionalAuthorizationSchema);
    this.typeName = 'MedicinalProductAuthorizationJurisdictionalAuthorization';
    this._type = 'FHIR::MedicinalProductAuthorizationJurisdictionalAuthorization';
  }
}

module.exports.MedicinalProductAuthorizationJurisdictionalAuthorizationSchema = MedicinalProductAuthorizationJurisdictionalAuthorizationSchema;
module.exports.MedicinalProductAuthorizationJurisdictionalAuthorization = MedicinalProductAuthorizationJurisdictionalAuthorization;
