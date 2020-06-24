const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DosageSchema } = require('./Dosage');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeAdministrationGuidelinesDosageSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   dosage : [DosageSchema],
   fhirTitle: { type: String, default: 'MedicationKnowledgeAdministrationGuidelinesDosage' },
});

class MedicationKnowledgeAdministrationGuidelinesDosage extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeAdministrationGuidelinesDosageSchema);
    this._type = 'FHIR::MedicationKnowledgeAdministrationGuidelinesDosage';
  }
};


module.exports.MedicationKnowledgeAdministrationGuidelinesDosageSchema = MedicationKnowledgeAdministrationGuidelinesDosageSchema;
module.exports.MedicationKnowledgeAdministrationGuidelinesDosage = MedicationKnowledgeAdministrationGuidelinesDosage;
