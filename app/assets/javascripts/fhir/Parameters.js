const mongoose = require('mongoose/browser');
const { ParametersParameterSchema } = require('./ParametersParameter');
const { ResourceSchema } = require('./Resource');
const { ResourceSchemaFunction } = require('./Resource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ParametersSchema = ResourceSchemaFunction({
   parameter : [ParametersParameterSchema],
   fhirTitle: { type: String, default: 'Parameters' },
});

class Parameters extends mongoose.Document {
  constructor(object) {
    super(object, ParametersSchema);
    this._type = 'FHIR::Parameters';
  }
};


module.exports.ParametersSchema = ParametersSchema;
module.exports.Parameters = Parameters;
