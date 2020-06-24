const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { MoneySchema } = require('./Money');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeCostSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   source : String,
   cost : MoneySchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgeCost' },
});

class MedicationKnowledgeCost extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeCostSchema);
    this._type = 'FHIR::MedicationKnowledgeCost';
  }
};


module.exports.MedicationKnowledgeCostSchema = MedicationKnowledgeCostSchema;
module.exports.MedicationKnowledgeCost = MedicationKnowledgeCost;
