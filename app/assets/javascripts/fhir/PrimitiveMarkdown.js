const mongoose = require('mongoose/browser');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveStringSchemaFunction } = require('./PrimitiveString');

const PrimitiveMarkdownSchema = PrimitiveStringSchemaFunction({
  typeName: { type: String, default: 'PrimitiveMarkdown' },
  _type: { type: String, default: 'FHIR::PrimitiveMarkdown' },
});

class PrimitiveMarkdown extends mongoose.Document {
  constructor(object) {
    super(object, PrimitiveMarkdownSchema);
    this.typeName = 'PrimitiveMarkdown';
    this._type = 'FHIR::PrimitiveMarkdown';
  }
}

module.exports.PrimitiveMarkdownSchema = PrimitiveMarkdownSchema;
module.exports.PrimitiveMarkdown = PrimitiveMarkdown;
