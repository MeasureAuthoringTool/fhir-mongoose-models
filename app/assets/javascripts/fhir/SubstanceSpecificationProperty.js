const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { ReferenceSchema } = require('./Reference');

const SubstanceSpecificationPropertySchema = BackboneElementSchemaFunction({
  category: CodeableConceptSchema,
  code: CodeableConceptSchema,
  parameters: PrimitiveStringSchema,
  definingSubstanceReference: ReferenceSchema,
  definingSubstanceCodeableConcept: CodeableConceptSchema,
  amountQuantity: QuantitySchema,
  amountString: PrimitiveStringSchema,
  typeName: { type: String, default: 'SubstanceSpecificationProperty' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationProperty' },
});

class SubstanceSpecificationProperty extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationPropertySchema);
    this.typeName = 'SubstanceSpecificationProperty';
    this._type = 'FHIR::SubstanceSpecificationProperty';
  }
}

module.exports.SubstanceSpecificationPropertySchema = SubstanceSpecificationPropertySchema;
module.exports.SubstanceSpecificationProperty = SubstanceSpecificationProperty;
