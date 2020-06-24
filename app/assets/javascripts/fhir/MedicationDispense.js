const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { IdentifierSchema } = require('./Identifier');
const { MedicationDispensePerformerSchema } = require('./MedicationDispensePerformer');
const { MedicationDispenseStatusSchema } = require('./MedicationDispenseStatus');
const { MedicationDispenseSubstitutionSchema } = require('./MedicationDispenseSubstitution');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationDispenseSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   partOf : [ReferenceSchema],
   status : MedicationDispenseStatusSchema,
   statusReasonCodeableConcept : CodeableConceptSchema,
   statusReasonReference : ReferenceSchema,
   category : CodeableConceptSchema,
   medicationCodeableConcept : CodeableConceptSchema,
   medicationReference : ReferenceSchema,
   subject : ReferenceSchema,
   context : ReferenceSchema,
   supportingInformation : [ReferenceSchema],
   performer : [MedicationDispensePerformerSchema],
   location : ReferenceSchema,
   authorizingPrescription : [ReferenceSchema],
   type : CodeableConceptSchema,
   quantity : SimpleQuantitySchema,
   daysSupply : SimpleQuantitySchema,
   whenPrepared : DateTime,
   whenHandedOver : DateTime,
   destination : ReferenceSchema,
   receiver : [ReferenceSchema],
   note : [AnnotationSchema],
   dosageInstruction : [DosageSchema],
   substitution : MedicationDispenseSubstitutionSchema,
   detectedIssue : [ReferenceSchema],
   eventHistory : [ReferenceSchema],
   fhirTitle: { type: String, default: 'MedicationDispense' },
});

class MedicationDispense extends mongoose.Document {
  constructor(object) {
    super(object, MedicationDispenseSchema);
    this._type = 'FHIR::MedicationDispense';
  }
};


module.exports.MedicationDispenseSchema = MedicationDispenseSchema;
module.exports.MedicationDispense = MedicationDispense;
