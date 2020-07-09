const { AttachmentSchema } = require('./allSchemaHeaders.js');
const { CodeableConceptSchema } = require('./allSchemaHeaders.js');
const { ConsentPolicySchema } = require('./allSchemaHeaders.js');
const { ConsentProvisionSchema } = require('./allSchemaHeaders.js');
const { ConsentStateSchema } = require('./allSchemaHeaders.js');
const { ConsentVerificationSchema } = require('./allSchemaHeaders.js');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./allSchemaHeaders.js');
const { PrimitiveDateTimeSchema } = require('./allSchemaHeaders.js');
const { ReferenceSchema } = require('./allSchemaHeaders.js');
const { ConsentSchema } = require('./allSchemaHeaders.js');

ConsentSchema.add(DomainResourceSchema);
ConsentSchema.remove('id');
ConsentSchema.add({
  identifier: [IdentifierSchema],
  status: ConsentStateSchema,
  scope: CodeableConceptSchema,
  category: [CodeableConceptSchema],
  patient: ReferenceSchema,
  dateTime: PrimitiveDateTimeSchema,
  performer: [ReferenceSchema],
  organization: [ReferenceSchema],
  sourceAttachment: AttachmentSchema,
  sourceReference: ReferenceSchema,
  policy: [ConsentPolicySchema],
  policyRule: CodeableConceptSchema,
  verification: [ConsentVerificationSchema],
  provision: ConsentProvisionSchema,
});

module.exports.ConsentSchema = ConsentSchema;
