const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicinalProductAuthorizationJurisdictionalAuthorizationSchema } = require('./MedicinalProductAuthorizationJurisdictionalAuthorization');
const { MedicinalProductAuthorizationProcedureSchema } = require('./MedicinalProductAuthorizationProcedure');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductAuthorizationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   subject : ReferenceSchema,
   country : [CodeableConceptSchema],
   jurisdiction : [CodeableConceptSchema],
   status : CodeableConceptSchema,
   statusDate : DateTime,
   restoreDate : DateTime,
   validityPeriod : PeriodSchema,
   dataExclusivityPeriod : PeriodSchema,
   dateOfFirstAuthorization : DateTime,
   internationalBirthDate : DateTime,
   legalBasis : CodeableConceptSchema,
   jurisdictionalAuthorization : [MedicinalProductAuthorizationJurisdictionalAuthorizationSchema],
   holder : ReferenceSchema,
   regulator : ReferenceSchema,
   procedure : MedicinalProductAuthorizationProcedureSchema,
   fhirTitle: { type: String, default: 'MedicinalProductAuthorization' },
});

class MedicinalProductAuthorization extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductAuthorizationSchema);
    this._type = 'FHIR::MedicinalProductAuthorization';
  }
};


module.exports.MedicinalProductAuthorizationSchema = MedicinalProductAuthorizationSchema;
module.exports.MedicinalProductAuthorization = MedicinalProductAuthorization;
