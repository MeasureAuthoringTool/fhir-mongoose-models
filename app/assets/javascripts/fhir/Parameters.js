const mongoose = require('mongoose/browser');
const { ParametersParameterSchema } = require('./ParametersParameter');
const { ResourceSchema } = require('./Resource');
const { ResourceSchemaFunction } = require('./Resource');

const ParametersSchema = ResourceSchemaFunction({
  parameter: [ParametersParameterSchema],
  typeName: { type: String, default: 'Parameters' },
  _type: { type: String, default: 'FHIR::Parameters' },
});

class Parameters extends mongoose.Document {
  constructor(object) {
    super(object, ParametersSchema);
    this.typeName = 'Parameters';
    this._type = 'FHIR::Parameters';
  }
}

module.exports.ParametersSchema = ParametersSchema;
module.exports.Parameters = Parameters;
