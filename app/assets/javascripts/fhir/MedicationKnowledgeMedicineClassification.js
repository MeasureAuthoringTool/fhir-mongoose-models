const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeMedicineClassificationSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   classification : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'MedicationKnowledgeMedicineClassification' },
});

class MedicationKnowledgeMedicineClassification extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeMedicineClassificationSchema);
    this._type = 'FHIR::MedicationKnowledgeMedicineClassification';
  }
};


module.exports.MedicationKnowledgeMedicineClassificationSchema = MedicationKnowledgeMedicineClassificationSchema;
module.exports.MedicationKnowledgeMedicineClassification = MedicationKnowledgeMedicineClassification;
