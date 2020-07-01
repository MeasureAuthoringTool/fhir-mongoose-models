const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConditionalReadStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConditionalReadStatus' },
  _type: { type: String, default: 'FHIR::ConditionalReadStatus' },
});

class ConditionalReadStatus extends mongoose.Document {
  constructor(object) {
    super(object, ConditionalReadStatusSchema);
    this.typeName = 'ConditionalReadStatus';
    this._type = 'FHIR::ConditionalReadStatus';
  }
}

module.exports.ConditionalReadStatusSchema = ConditionalReadStatusSchema;
module.exports.ConditionalReadStatus = ConditionalReadStatus;
