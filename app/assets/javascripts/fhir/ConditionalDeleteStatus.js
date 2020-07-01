const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ConditionalDeleteStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ConditionalDeleteStatus' },
  _type: { type: String, default: 'FHIR::ConditionalDeleteStatus' },
});

class ConditionalDeleteStatus extends mongoose.Document {
  constructor(object) {
    super(object, ConditionalDeleteStatusSchema);
    this.typeName = 'ConditionalDeleteStatus';
    this._type = 'FHIR::ConditionalDeleteStatus';
  }
}

module.exports.ConditionalDeleteStatusSchema = ConditionalDeleteStatusSchema;
module.exports.ConditionalDeleteStatus = ConditionalDeleteStatus;
