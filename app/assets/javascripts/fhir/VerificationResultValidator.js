const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const VerificationResultValidatorSchema = BackboneElementSchemaFunction({
   organization : ReferenceSchema,
   identityCertificate : String,
   attestationSignature : SignatureSchema,
   fhirTitle: { type: String, default: 'VerificationResultValidator' },
});

class VerificationResultValidator extends mongoose.Document {
  constructor(object) {
    super(object, VerificationResultValidatorSchema);
    this._type = 'FHIR::VerificationResultValidator';
  }
};


module.exports.VerificationResultValidatorSchema = VerificationResultValidatorSchema;
module.exports.VerificationResultValidator = VerificationResultValidator;
