const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const MessageSignificanceCategorySchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'MessageSignificanceCategory' },
  _type: { type: String, default: 'FHIR::MessageSignificanceCategory' },
});

class MessageSignificanceCategory extends mongoose.Document {
  constructor(object) {
    super(object, MessageSignificanceCategorySchema);
    this.typeName = 'MessageSignificanceCategory';
    this._type = 'FHIR::MessageSignificanceCategory';
  }
}

module.exports.MessageSignificanceCategorySchema = MessageSignificanceCategorySchema;
module.exports.MessageSignificanceCategory = MessageSignificanceCategory;
