const mongoose = require('mongoose/browser');
const { MimeTypeSchema } = require('./MimeType');
const { PrimitiveBase64BinarySchema } = require('./PrimitiveBase64Binary');
const { ReferenceSchema } = require('./Reference');
const { ResourceSchema } = require('./Resource');
const { ResourceSchemaFunction } = require('./Resource');

const BinarySchema = ResourceSchemaFunction({
  contentType: MimeTypeSchema,
  securityContext: ReferenceSchema,
  data: PrimitiveBase64BinarySchema,
  typeName: { type: String, default: 'Binary' },
  _type: { type: String, default: 'FHIR::Binary' },
});

class Binary extends mongoose.Document {
  constructor(object) {
    super(object, BinarySchema);
    this.typeName = 'Binary';
    this._type = 'FHIR::Binary';
  }
}

module.exports.BinarySchema = BinarySchema;
module.exports.Binary = Binary;
