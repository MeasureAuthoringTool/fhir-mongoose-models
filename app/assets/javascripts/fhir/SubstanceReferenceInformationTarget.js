const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { ReferenceSchema } = require('./Reference');

const SubstanceReferenceInformationTargetSchema = BackboneElementSchemaFunction({
  target: IdentifierSchema,
  type: CodeableConceptSchema,
  interaction: CodeableConceptSchema,
  organism: CodeableConceptSchema,
  organismType: CodeableConceptSchema,
  amountQuantity: QuantitySchema,
  amountRange: RangeSchema,
  amountString: PrimitiveStringSchema,
  amountType: CodeableConceptSchema,
  source: [ReferenceSchema],
  typeName: { type: String, default: 'SubstanceReferenceInformationTarget' },
  _type: { type: String, default: 'FHIR::SubstanceReferenceInformationTarget' },
});

class SubstanceReferenceInformationTarget extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceReferenceInformationTargetSchema);
    this.typeName = 'SubstanceReferenceInformationTarget';
    this._type = 'FHIR::SubstanceReferenceInformationTarget';
  }
}

module.exports.SubstanceReferenceInformationTargetSchema = SubstanceReferenceInformationTargetSchema;
module.exports.SubstanceReferenceInformationTarget = SubstanceReferenceInformationTarget;
