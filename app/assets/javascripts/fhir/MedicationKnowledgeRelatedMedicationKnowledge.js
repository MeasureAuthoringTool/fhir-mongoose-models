const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeRelatedMedicationKnowledgeSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   reference : [ReferenceSchema],
   fhirTitle: { type: String, default: 'MedicationKnowledgeRelatedMedicationKnowledge' },
});

class MedicationKnowledgeRelatedMedicationKnowledge extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRelatedMedicationKnowledgeSchema);
    this._type = 'FHIR::MedicationKnowledgeRelatedMedicationKnowledge';
  }
};


module.exports.MedicationKnowledgeRelatedMedicationKnowledgeSchema = MedicationKnowledgeRelatedMedicationKnowledgeSchema;
module.exports.MedicationKnowledgeRelatedMedicationKnowledge = MedicationKnowledgeRelatedMedicationKnowledge;
