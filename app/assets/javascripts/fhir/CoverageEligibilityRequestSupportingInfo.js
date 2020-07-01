const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitivePositiveIntSchema } = require('./PrimitivePositiveInt');
const { ReferenceSchema } = require('./Reference');

const CoverageEligibilityRequestSupportingInfoSchema = BackboneElementSchemaFunction({
  sequence: PrimitivePositiveIntSchema,
  information: ReferenceSchema,
  appliesToAll: PrimitiveBooleanSchema,
  typeName: { type: String, default: 'CoverageEligibilityRequestSupportingInfo' },
  _type: { type: String, default: 'FHIR::CoverageEligibilityRequestSupportingInfo' },
});

class CoverageEligibilityRequestSupportingInfo extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestSupportingInfoSchema);
    this.typeName = 'CoverageEligibilityRequestSupportingInfo';
    this._type = 'FHIR::CoverageEligibilityRequestSupportingInfo';
  }
}

module.exports.CoverageEligibilityRequestSupportingInfoSchema = CoverageEligibilityRequestSupportingInfoSchema;
module.exports.CoverageEligibilityRequestSupportingInfo = CoverageEligibilityRequestSupportingInfo;
