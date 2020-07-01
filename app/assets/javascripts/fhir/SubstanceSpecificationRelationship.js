const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { QuantitySchema } = require('./Quantity');
const { RangeSchema } = require('./Range');
const { RatioSchema } = require('./Ratio');
const { ReferenceSchema } = require('./Reference');

const SubstanceSpecificationRelationshipSchema = BackboneElementSchemaFunction({
  substanceReference: ReferenceSchema,
  substanceCodeableConcept: CodeableConceptSchema,
  relationship: CodeableConceptSchema,
  isDefining: PrimitiveBooleanSchema,
  amountQuantity: QuantitySchema,
  amountRange: RangeSchema,
  amountRatio: RatioSchema,
  amountString: PrimitiveStringSchema,
  amountRatioLowLimit: RatioSchema,
  amountType: CodeableConceptSchema,
  source: [ReferenceSchema],
  typeName: { type: String, default: 'SubstanceSpecificationRelationship' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationRelationship' },
});

class SubstanceSpecificationRelationship extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationRelationshipSchema);
    this.typeName = 'SubstanceSpecificationRelationship';
    this._type = 'FHIR::SubstanceSpecificationRelationship';
  }
}

module.exports.SubstanceSpecificationRelationshipSchema = SubstanceSpecificationRelationshipSchema;
module.exports.SubstanceSpecificationRelationship = SubstanceSpecificationRelationship;
