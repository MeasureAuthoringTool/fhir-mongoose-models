const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AttachmentSchema } = require('./Attachment');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ConsentPolicySchema } = require('./ConsentPolicy');
const { ConsentProvisionSchema } = require('./ConsentProvision');
const { ConsentStateSchema } = require('./ConsentState');
const { ConsentVerificationSchema } = require('./ConsentVerification');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ConsentSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   status : ConsentStateSchema,
   scope : CodeableConceptSchema,
   category : [CodeableConceptSchema],
   patient : ReferenceSchema,
   dateTime : DateTime,
   performer : [ReferenceSchema],
   organization : [ReferenceSchema],
   sourceAttachment : AttachmentSchema,
   sourceReference : ReferenceSchema,
   policy : [ConsentPolicySchema],
   policyRule : CodeableConceptSchema,
   verification : [ConsentVerificationSchema],
   provision : ConsentProvisionSchema,
   fhirTitle: { type: String, default: 'Consent' },
});

class Consent extends mongoose.Document {
  constructor(object) {
    super(object, ConsentSchema);
    this._type = 'FHIR::Consent';
  }
};


module.exports.ConsentSchema = ConsentSchema;
module.exports.Consent = Consent;
