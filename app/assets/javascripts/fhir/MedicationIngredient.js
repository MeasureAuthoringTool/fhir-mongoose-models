const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');

const MedicationIngredientSchema = BackboneElementSchemaFunction({
  itemCodeableConcept: CodeableConceptSchema,
  itemReference: ReferenceSchema,
  isActive: PrimitiveBooleanSchema,
  strength: RatioSchema,
  typeName: { type: String, default: 'MedicationIngredient' },
  _type: { type: String, default: 'FHIR::MedicationIngredient' },
});

class MedicationIngredient extends mongoose.Document {
  constructor(object) {
    super(object, MedicationIngredientSchema);
    this.typeName = 'MedicationIngredient';
    this._type = 'FHIR::MedicationIngredient';
  }
}

module.exports.MedicationIngredientSchema = MedicationIngredientSchema;
module.exports.MedicationIngredient = MedicationIngredient;
