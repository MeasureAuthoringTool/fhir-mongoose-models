const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicationAdministrationDosageSchema } = require('./MedicationAdministrationDosage');
const { MedicationAdministrationPerformerSchema } = require('./MedicationAdministrationPerformer');
const { MedicationAdministrationStatusSchema } = require('./MedicationAdministrationStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationAdministrationSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   instantiates : [String],
   partOf : [ReferenceSchema],
   status : MedicationAdministrationStatusSchema,
   statusReason : [CodeableConceptSchema],
   category : CodeableConceptSchema,
   medicationCodeableConcept : CodeableConceptSchema,
   medicationReference : ReferenceSchema,
   subject : ReferenceSchema,
   context : ReferenceSchema,
   supportingInformation : [ReferenceSchema],
   effectiveDateTime : DateTime,
   effectivePeriod : PeriodSchema,
   performer : [MedicationAdministrationPerformerSchema],
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   request : ReferenceSchema,
   device : [ReferenceSchema],
   note : [AnnotationSchema],
   dosage : MedicationAdministrationDosageSchema,
   eventHistory : [ReferenceSchema],
   fhirTitle: { type: String, default: 'MedicationAdministration' },
});

class MedicationAdministration extends mongoose.Document {
  constructor(object) {
    super(object, MedicationAdministrationSchema);
    this._type = 'FHIR::MedicationAdministration';
  }
};


module.exports.MedicationAdministrationSchema = MedicationAdministrationSchema;
module.exports.MedicationAdministration = MedicationAdministration;
