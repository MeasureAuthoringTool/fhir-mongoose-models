const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');

const MedicationKnowledgeIngredientSchema = BackboneElementSchemaFunction({
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  isActive: PrimitiveBooleanSchema,
  strength: RatioSchema,
  typeName: { type: String, default: 'MedicationKnowledgeIngredient' },
  _type: { type: String, default: 'FHIR::MedicationKnowledgeIngredient' },
});

class MedicationKnowledgeIngredient extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeIngredientSchema);
    this.typeName = 'MedicationKnowledgeIngredient';
    this._type = 'FHIR::MedicationKnowledgeIngredient';
  }
}

module.exports.MedicationKnowledgeIngredientSchema = MedicationKnowledgeIngredientSchema;
module.exports.MedicationKnowledgeIngredient = MedicationKnowledgeIngredient;
