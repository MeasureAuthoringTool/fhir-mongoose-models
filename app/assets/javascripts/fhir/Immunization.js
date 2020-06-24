const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const FHIRDate = require('./basetypes/FHIRDate');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ImmunizationEducationSchema } = require('./ImmunizationEducation');
const { ImmunizationPerformerSchema } = require('./ImmunizationPerformer');
const { ImmunizationProtocolAppliedSchema } = require('./ImmunizationProtocolApplied');
const { ImmunizationReactionSchema } = require('./ImmunizationReaction');
const { ImmunizationStatusSchema } = require('./ImmunizationStatus');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ImmunizationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ImmunizationStatusSchema,
   statusReason : CodeableConceptSchema,
   vaccineCode : CodeableConceptSchema,
   patient : ReferenceSchema,
   encounter : ReferenceSchema,
   occurrenceDateTime : DateTime,
   occurrenceString : String,
   recorded : DateTime,
   primarySource : Boolean,
   reportOrigin : CodeableConceptSchema,
   location : ReferenceSchema,
   manufacturer : ReferenceSchema,
   lotNumber : String,
   expirationDate : FHIRDate,
   site : CodeableConceptSchema,
   route : CodeableConceptSchema,
   doseQuantity : SimpleQuantitySchema,
   performer : [ImmunizationPerformerSchema],
   note : [AnnotationSchema],
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   isSubpotent : Boolean,
   subpotentReason : [CodeableConceptSchema],
   education : [ImmunizationEducationSchema],
   programEligibility : [CodeableConceptSchema],
   fundingSource : CodeableConceptSchema,
   reaction : [ImmunizationReactionSchema],
   protocolApplied : [ImmunizationProtocolAppliedSchema],
   fhirTitle: { type: String, default: 'Immunization' },
});

class Immunization extends mongoose.Document {
  constructor(object) {
    super(object, ImmunizationSchema);
    this._type = 'FHIR::Immunization';
  }
};


module.exports.ImmunizationSchema = ImmunizationSchema;
module.exports.Immunization = Immunization;
