const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { ReferenceSchema } = require('./Reference');

const SubstanceSpecificationCodeSchema = BackboneElementSchemaFunction({
  code: CodeableConceptSchema,
  status: CodeableConceptSchema,
  statusDate: PrimitiveDateTimeSchema,
  comment: PrimitiveStringSchema,
  source: [ReferenceSchema],
  typeName: { type: String, default: 'SubstanceSpecificationCode' },
  _type: { type: String, default: 'FHIR::SubstanceSpecificationCode' },
});

class SubstanceSpecificationCode extends mongoose.Document {
  constructor(object) {
    super(object, SubstanceSpecificationCodeSchema);
    this.typeName = 'SubstanceSpecificationCode';
    this._type = 'FHIR::SubstanceSpecificationCode';
  }
}

module.exports.SubstanceSpecificationCodeSchema = SubstanceSpecificationCodeSchema;
module.exports.SubstanceSpecificationCode = SubstanceSpecificationCode;
