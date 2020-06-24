const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GuidanceResponseStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GuidanceResponseStatus' },
});

class GuidanceResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, GuidanceResponseStatusSchema);
    this._type = 'FHIR::GuidanceResponseStatus';
  }
};


module.exports.GuidanceResponseStatusSchema = GuidanceResponseStatusSchema;
module.exports.GuidanceResponseStatus = GuidanceResponseStatus;
