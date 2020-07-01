const mongoose = require('mongoose/browser');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ConsentPolicySchema } = require('./ConsentPolicy');
const { ConsentProvisionSchema } = require('./ConsentProvision');
const { ConsentStateSchema } = require('./ConsentState');
const { ConsentVerificationSchema } = require('./ConsentVerification');
const { DomainResourceSchema } = require('./DomainResource');
const { DomainResourceSchemaFunction } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { PrimitiveDateTimeSchema } = require('./PrimitiveDateTime');
const { ReferenceSchema } = require('./Reference');

const ConsentSchema = DomainResourceSchemaFunction({
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
  typeName: { type: String, default: 'Consent' },
  _type: { type: String, default: 'FHIR::Consent' },
});

class Consent extends mongoose.Document {
  constructor(object) {
    super(object, ConsentSchema);
    this.typeName = 'Consent';
    this._type = 'FHIR::Consent';
  }
}

module.exports.ConsentSchema = ConsentSchema;
module.exports.Consent = Consent;
