const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const RestfulCapabilityModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'RestfulCapabilityMode' },
});

class RestfulCapabilityMode extends mongoose.Document {
  constructor(object) {
    super(object, RestfulCapabilityModeSchema);
    this._type = 'FHIR::RestfulCapabilityMode';
  }
};


module.exports.RestfulCapabilityModeSchema = RestfulCapabilityModeSchema;
module.exports.RestfulCapabilityMode = RestfulCapabilityMode;
