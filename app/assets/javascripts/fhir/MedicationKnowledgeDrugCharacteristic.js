const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeDrugCharacteristicSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   valueCodeableConcept : CodeableConceptSchema,
   valueString : String,
   valueSimpleQuantity : SimpleQuantitySchema,
   valueBase64Binary : String,
   fhirTitle: { type: String, default: 'MedicationKnowledgeDrugCharacteristic' },
});

class MedicationKnowledgeDrugCharacteristic extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeDrugCharacteristicSchema);
    this._type = 'FHIR::MedicationKnowledgeDrugCharacteristic';
  }
};


module.exports.MedicationKnowledgeDrugCharacteristicSchema = MedicationKnowledgeDrugCharacteristicSchema;
module.exports.MedicationKnowledgeDrugCharacteristic = MedicationKnowledgeDrugCharacteristic;
