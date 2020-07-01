const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { SubstanceAmountReferenceRangeSchema } = require('./SubstanceAmountReferenceRange');

const SubstanceAmountSchema = BackboneElementSchemaFunction({
  amountQuantity: QuantitySchema,
  amountRange: RangeSchema,
  amountString: PrimitiveStringSchema,
  amountType: CodeableConceptSchema,
  amountText: PrimitiveStringSchema,
  referenceRange: SubstanceAmountReferenceRangeSchema,
  typeName: { type: String, default: 'SubstanceAmount' },
  _type: { type: String, default: 'FHIR::SubstanceAmount' },
});

class SubstanceAmount extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceAmountSchema);
    this.typeName = 'SubstanceAmount';
    this._type = 'FHIR::SubstanceAmount';
  }
}

module.exports.SubstanceAmountSchema = SubstanceAmountSchema;
module.exports.SubstanceAmount = SubstanceAmount;
