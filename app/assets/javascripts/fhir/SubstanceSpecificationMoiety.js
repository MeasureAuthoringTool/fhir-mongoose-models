const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');

const SubstanceSpecificationMoietySchema = BackboneElementSchemaFunction({
  role: CodeableConceptSchema,
  identifier: IdentifierSchema,
  name: PrimitiveStringSchema,
  stereochemistry: CodeableConceptSchema,
  opticalActivity: CodeableConceptSchema,
  molecularFormula: PrimitiveStringSchema,
  amountQuantity: QuantitySchema,
  amountString: PrimitiveStringSchema,
  typeName: { type: String, default: 'SubstanceSpecificationMoiety' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationMoiety' },
});

class SubstanceSpecificationMoiety extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationMoietySchema);
    this.typeName = 'SubstanceSpecificationMoiety';
    this._type = 'FHIR::SubstanceSpecificationMoiety';
  }
}

module.exports.SubstanceSpecificationMoietySchema = SubstanceSpecificationMoietySchema;
module.exports.SubstanceSpecificationMoiety = SubstanceSpecificationMoiety;
