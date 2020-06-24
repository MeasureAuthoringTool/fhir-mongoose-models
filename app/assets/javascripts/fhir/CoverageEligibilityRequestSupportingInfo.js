const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CoverageEligibilityRequestSupportingInfoSchema = BackboneElementSchemaFunction({
   sequence : Number,
   information : ReferenceSchema,
   appliesToAll : Boolean,
   fhirTitle: { type: String, default: 'CoverageEligibilityRequestSupportingInfo' },
});

class CoverageEligibilityRequestSupportingInfo extends mongoose.Document {
  constructor(object) {
    super(object, CoverageEligibilityRequestSupportingInfoSchema);
    this._type = 'FHIR::CoverageEligibilityRequestSupportingInfo';
  }
};


module.exports.CoverageEligibilityRequestSupportingInfoSchema = CoverageEligibilityRequestSupportingInfoSchema;
module.exports.CoverageEligibilityRequestSupportingInfo = CoverageEligibilityRequestSupportingInfo;
