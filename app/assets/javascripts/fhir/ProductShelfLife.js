const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { QuantitySchema } = require('./Quantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ProductShelfLifeSchema = BackboneElementSchemaFunction({
   identifier : IdentifierSchema,
   type : CodeableConceptSchema,
   period : QuantitySchema,
   specialPrecautionsForStorage : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'ProductShelfLife' },
});

class ProductShelfLife extends mongoose.Document {
  constructor(object) {
    super(object, ProductShelfLifeSchema);
    this._type = 'FHIR::ProductShelfLife';
  }
};


module.exports.ProductShelfLifeSchema = ProductShelfLifeSchema;
module.exports.ProductShelfLife = ProductShelfLife;
