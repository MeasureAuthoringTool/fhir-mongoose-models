const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ClaimResponseStatusSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ClaimResponseStatus' },
});

class ClaimResponseStatus extends mongoose.Document {
  constructor(object) {
    super(object, ClaimResponseStatusSchema);
    this._type = 'FHIR::ClaimResponseStatus';
  }
};


module.exports.ClaimResponseStatusSchema = ClaimResponseStatusSchema;
module.exports.ClaimResponseStatus = ClaimResponseStatus;
