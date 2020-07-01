const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { QuantitySchema } = require('./Quantity');

const ProductShelfLifeSchema = BackboneElementSchemaFunction({
  identifier: IdentifierSchema,
  type: CodeableConceptSchema,
  period: QuantitySchema,
  specialPrecautionsForStorage: [CodeableConceptSchema],
  typeName: { type: String, default: 'ProductShelfLife' },
  _type: { type: String, default: 'FHIR::ProductShelfLife' },
});

class ProductShelfLife extends mongoose.Document {
  constructor(object) {
    super(object, ProductShelfLifeSchema);
    this.typeName = 'ProductShelfLife';
    this._type = 'FHIR::ProductShelfLife';
  }
}

module.exports.ProductShelfLifeSchema = ProductShelfLifeSchema;
module.exports.ProductShelfLife = ProductShelfLife;
