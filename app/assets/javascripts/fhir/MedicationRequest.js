const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { IdentifierSchema } = require('./Identifier');
const { MedicationRequestDispenseRequestSchema } = require('./MedicationRequestDispenseRequest');
const { MedicationRequestIntentSchema } = require('./MedicationRequestIntent');
const { MedicationRequestPrioritySchema } = require('./MedicationRequestPriority');
const { MedicationRequestStatusSchema } = require('./MedicationRequestStatus');
const { MedicationRequestSubstitutionSchema } = require('./MedicationRequestSubstitution');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationRequestSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : MedicationRequestStatusSchema,
   statusReason : CodeableConceptSchema,
   intent : MedicationRequestIntentSchema,
   category : [CodeableConceptSchema],
   priority : MedicationRequestPrioritySchema,
   doNotPerform : Boolean,
   reportedBoolean : Boolean,
   reportedReference : ReferenceSchema,
   medicationCodeableConcept : CodeableConceptSchema,
   medicationReference : ReferenceSchema,
   subject : ReferenceSchema,
   encounter : ReferenceSchema,
   supportingInformation : [ReferenceSchema],
   authoredOn : DateTime,
   requester : ReferenceSchema,
   performer : ReferenceSchema,
   performerType : CodeableConceptSchema,
   recorder : ReferenceSchema,
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   instantiatesCanonical : [String],
   instantiatesUri : [String],
   basedOn : [ReferenceSchema],
   groupIdentifier : IdentifierSchema,
   courseOfTherapyType : CodeableConceptSchema,
   insurance : [ReferenceSchema],
   note : [AnnotationSchema],
   dosageInstruction : [DosageSchema],
   dispenseRequest : MedicationRequestDispenseRequestSchema,
   substitution : MedicationRequestSubstitutionSchema,
   priorPrescription : ReferenceSchema,
   detectedIssue : [ReferenceSchema],
   eventHistory : [ReferenceSchema],
   fhirTitle: { type: String, default: 'MedicationRequest' },
});

class MedicationRequest extends mongoose.Document {
  constructor(object) {
    super(object, MedicationRequestSchema);
    this._type = 'FHIR::MedicationRequest';
  }
};


module.exports.MedicationRequestSchema = MedicationRequestSchema;
module.exports.MedicationRequest = MedicationRequest;
