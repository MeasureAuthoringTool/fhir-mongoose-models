const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DosageSchema } = require('./Dosage');
const { IdentifierSchema } = require('./Identifier');
const { MedicationStatementStatusSchema } = require('./MedicationStatementStatus');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationStatementSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   basedOn : [ReferenceSchema],
   partOf : [ReferenceSchema],
   status : MedicationStatementStatusSchema,
   statusReason : [CodeableConceptSchema],
   category : CodeableConceptSchema,
   medicationCodeableConcept : CodeableConceptSchema,
   medicationReference : ReferenceSchema,
   subject : ReferenceSchema,
   context : ReferenceSchema,
   effectiveDateTime : DateTime,
   effectivePeriod : PeriodSchema,
   dateAsserted : DateTime,
   informationSource : ReferenceSchema,
   derivedFrom : [ReferenceSchema],
   reasonCode : [CodeableConceptSchema],
   reasonReference : [ReferenceSchema],
   note : [AnnotationSchema],
   dosage : [DosageSchema],
   fhirTitle: { type: String, default: 'MedicationStatement' },
});

class MedicationStatement extends mongoose.Document {
  constructor(object) {
    super(object, MedicationStatementSchema);
    this._type = 'FHIR::MedicationStatement';
  }
};


module.exports.MedicationStatementSchema = MedicationStatementSchema;
module.exports.MedicationStatement = MedicationStatement;
