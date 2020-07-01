const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { MedicinalProductIngredientSpecifiedSubstanceSchema } = require('./MedicinalProductIngredientSpecifiedSubstance');
const { MedicinalProductIngredientSubstanceSchema } = require('./MedicinalProductIngredientSubstance');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { ReferenceSchema } = require('./Reference');

const MedicinalProductIngredientSchema = DomainResourceSchemaFunction({
  identifier: IdentifierSchema,
  role: CodeableConceptSchema,
  allergenicIndicator: PrimitiveBooleanSchema,
  manufacturer: [ReferenceSchema],
  specifiedSubstance: [MedicinalProductIngredientSpecifiedSubstanceSchema],
  substance: MedicinalProductIngredientSubstanceSchema,
  typeName: { type: String, default: 'MedicinalProductIngredient' },
  _type: { type: String, default: 'FHIR::MedicinalProductIngredient' },
});

class MedicinalProductIngredient extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductIngredientSchema);
    this.typeName = 'MedicinalProductIngredient';
    this._type = 'FHIR::MedicinalProductIngredient';
  }
}

module.exports.MedicinalProductIngredientSchema = MedicinalProductIngredientSchema;
module.exports.MedicinalProductIngredient = MedicinalProductIngredient;
