const { BackboneElementSchema } = require('./BackboneElement');
const { PrimitiveBooleanSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ConsentVerificationSchema } = require('./allSchemaHeaders.js');

ConsentVerificationSchema.add(BackboneElementSchema);
ConsentVerificationSchema.remove('id');
ConsentVerificationSchema.add({
  verified: PrimitiveBooleanSchema,
  verifiedWith: ReferenceSchema,
  verificationDate: PrimitiveDateTimeSchema,
});

module.exports.ConsentVerificationSchema = ConsentVerificationSchema;
