const mongoose = require('mongoose/browser');
const { CodingSchema } = require('./Coding');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { PrimitiveInstantSchema } = require('./PrimitiveInstant');
const { ReferenceSchema } = require('./Reference');

const SignatureSchema = ElementSchemaFunction({
  type: [CodingSchema],
  when: PrimitiveInstantSchema,
  who: ReferenceSchema,
  onBehalfOf: ReferenceSchema,
  targetFormat: MimeTypeSchema,
  sigFormat: MimeTypeSchema,
  data: PrimitiveBase64BinarySchema,
  typeName: { type: String, default: 'Signature' },
  _type: { type: String, default: 'FHIR::Signature' },
});

class Signature extends mongoose.Document {
  constructor(object) {
    super(object, SignatureSchema);
    this.typeName = 'Signature';
    this._type = 'FHIR::Signature';
  }
}

module.exports.SignatureSchema = SignatureSchema;
module.exports.Signature = Signature;
