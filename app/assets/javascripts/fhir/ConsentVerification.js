const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const ConsentVerificationSchema = BackboneElementSchemaFunction({
  verified: PrimitiveBooleanSchema,
  verifiedWith: ReferenceSchema,
  verificationDate: PrimitiveDateTimeSchema,
  typeName: { type: String, default: 'ConsentVerification' },
  _type: { type: String, default: 'FHIR::ConsentVerification' },
});

class ConsentVerification extends mongoose.Document {
  constructor(object) {
    super(object, ConsentVerificationSchema);
    this.typeName = 'ConsentVerification';
    this._type = 'FHIR::ConsentVerification';
  }
}

module.exports.ConsentVerificationSchema = ConsentVerificationSchema;
module.exports.ConsentVerification = ConsentVerification;
