const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');

const SubstanceIngredientSchema = BackboneElementSchemaFunction({
  quantity: RatioSchema,
  substanceCodeableConcept: CodeableConceptSchema,
  substanceReference: ReferenceSchema,
  typeName: { type: String, default: 'SubstanceIngredient' },
  _type: { type: String, default: 'FHIR::SubstanceIngredient' },
});

class SubstanceIngredient extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceIngredientSchema);
    this.typeName = 'SubstanceIngredient';
    this._type = 'FHIR::SubstanceIngredient';
  }
}

module.exports.SubstanceIngredientSchema = SubstanceIngredientSchema;
module.exports.SubstanceIngredient = SubstanceIngredient;
