const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MedicationKnowledgeAdministrationGuidelinesDosageSchema } = require('./MedicationKnowledgeAdministrationGuidelinesDosage');
const { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema } = require('./MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeAdministrationGuidelinesSchema = BackboneElementSchemaFunction({
   dosage : [MedicationKnowledgeAdministrationGuidelinesDosageSchema],
   indicationCodeableConcept : CodeableConceptSchema,
   indicationReference : ReferenceSchema,
   patientCharacteristics : [MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsSchema],
   fhirTitle: { type: String, default: 'MedicationKnowledgeAdministrationGuidelines' },
});

class MedicationKnowledgeAdministrationGuidelines extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeAdministrationGuidelinesSchema);
    this._type = 'FHIR::MedicationKnowledgeAdministrationGuidelines';
  }
};


module.exports.MedicationKnowledgeAdministrationGuidelinesSchema = MedicationKnowledgeAdministrationGuidelinesSchema;
module.exports.MedicationKnowledgeAdministrationGuidelines = MedicationKnowledgeAdministrationGuidelines;
