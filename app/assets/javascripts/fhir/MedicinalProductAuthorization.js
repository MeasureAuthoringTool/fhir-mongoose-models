const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicinalProductAuthorizationJurisdictionalAuthorizationSchema } = require('./MedicinalProductAuthorizationJurisdictionalAuthorization');
const { MedicinalProductAuthorizationProcedureSchema } = require('./MedicinalProductAuthorizationProcedure');
const { PeriodSchema } = require('./Period');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductAuthorizationSchema = DomainResourceSchemaFunction({
  identifier: [IdentifierSchema],
  subject: ReferenceSchema,
  country: [CodeableConceptSchema],
  jurisdiction: [CodeableConceptSchema],
  status: CodeableConceptSchema,
  statusDate: PrimitiveDateTimeSchema,
  restoreDate: PrimitiveDateTimeSchema,
  validityPeriod: PeriodSchema,
  dataExclusivityPeriod: PeriodSchema,
  dateOfFirstAuthorization: PrimitiveDateTimeSchema,
  internationalBirthDate: PrimitiveDateTimeSchema,
  legalBasis: CodeableConceptSchema,
  jurisdictionalAuthorization: [MedicinalProductAuthorizationJurisdictionalAuthorizationSchema],
  holder: ReferenceSchema,
  regulator: ReferenceSchema,
  procedure: MedicinalProductAuthorizationProcedureSchema,
  typeName: { type: String, default: 'MedicinalProductAuthorization' },
  _type: { type: String, default: 'FHIR::MedicinalProductAuthorization' },
});

class MedicinalProductAuthorization extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductAuthorizationSchema);
    this.typeName = 'MedicinalProductAuthorization';
    this._type = 'FHIR::MedicinalProductAuthorization';
  }
}

module.exports.MedicinalProductAuthorizationSchema = MedicinalProductAuthorizationSchema;
module.exports.MedicinalProductAuthorization = MedicinalProductAuthorization;
