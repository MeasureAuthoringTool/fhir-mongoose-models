const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductAuthorizationJurisdictionalAuthorizationSchema = BackboneElementSchemaFunction({
   identifier : [IdentifierSchema],
   country : CodeableConceptSchema,
   jurisdiction : [CodeableConceptSchema],
   legalStatusOfSupply : CodeableConceptSchema,
   validityPeriod : PeriodSchema,
   fhirTitle: { type: String, default: 'MedicinalProductAuthorizationJurisdictionalAuthorization' },
});

class MedicinalProductAuthorizationJurisdictionalAuthorization extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductAuthorizationJurisdictionalAuthorizationSchema);
    this._type = 'FHIR::MedicinalProductAuthorizationJurisdictionalAuthorization';
  }
};


module.exports.MedicinalProductAuthorizationJurisdictionalAuthorizationSchema = MedicinalProductAuthorizationJurisdictionalAuthorizationSchema;
module.exports.MedicinalProductAuthorizationJurisdictionalAuthorization = MedicinalProductAuthorizationJurisdictionalAuthorization;
