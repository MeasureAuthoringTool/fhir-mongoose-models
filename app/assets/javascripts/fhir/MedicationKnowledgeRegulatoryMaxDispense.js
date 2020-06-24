const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeRegulatoryMaxDispenseSchema = BackboneElementSchemaFunction({
   quantity : SimpleQuantitySchema,
   period : DurationSchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgeRegulatoryMaxDispense' },
});

class MedicationKnowledgeRegulatoryMaxDispense extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeRegulatoryMaxDispenseSchema);
    this._type = 'FHIR::MedicationKnowledgeRegulatoryMaxDispense';
  }
};


module.exports.MedicationKnowledgeRegulatoryMaxDispenseSchema = MedicationKnowledgeRegulatoryMaxDispenseSchema;
module.exports.MedicationKnowledgeRegulatoryMaxDispense = MedicationKnowledgeRegulatoryMaxDispense;
